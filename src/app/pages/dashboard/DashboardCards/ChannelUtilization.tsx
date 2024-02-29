import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import useStaticData from "../../../StaticData";

const ChannelUtilization = () => {
  const { baseUrl } = useStaticData();

  const [chWActiveUsersData, setChWActiveUsersData] = React.useState<any[]>([]);
  const [wabaCount, setWabaCount] = React.useState<any[]>([]);
  const [fbmCount, setFbmCount] = React.useState<any[]>([]);
  const [instaCount, setInstaCount] = React.useState<any[]>([]);
  const [telegarmCount, setTelegarmCount] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/getLast31DaysChannelUtilization.php`;

        const params = {
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
        };

        const response = await axios.get(url, { params });

        setChWActiveUsersData(response.data);
        //console.log('response ', response.data)
        setWabaCount(response.data.wabaCount);
        setFbmCount(response.data.fbmCount);
        setInstaCount(response.data.instaCount);
        setTelegarmCount(response.data.telegarmCount);
      } catch (error) {
        console.log({ error });
      } finally {
        // logic
      }
    };
    fetchData();
  }, []);

  const labels = ["Whatsapp", "Messenger", "Instagram", "Telegram"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Channel Utilization",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [wabaCount, fbmCount, instaCount, telegarmCount],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default ChannelUtilization;
