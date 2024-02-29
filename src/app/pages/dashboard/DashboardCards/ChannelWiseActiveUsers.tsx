import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import useStaticData from "../../../StaticData";

const ChannelWiseActiveUsers = () => {
  const { baseUrl } = useStaticData();

  const [chWActiveUsersData, setChWActiveUsersData] = React.useState<any[]>([]);
  const [wabaCount, setWabaCount] = React.useState<any[]>([]);
  const [fbmCount, setFbmCount] = React.useState<any[]>([]);
  const [instaCount, setInstaCount] = React.useState<any[]>([]);
  const [telegarmCount, setTelegarmCount] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/getLast24HrsContactCount.php`;

        const params = {
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
        };

        const response = await axios.get(url, { params });

        setChWActiveUsersData(response.data);
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

  //console.log("chWActiveUsersData", chWActiveUsersData);

  return (
    <>
      <div className="col-xl-4">
        <Box
          className="card bg-danger card-xl-stretch mb-xl-8"
          style={{ backgroundColor: "" }}
        >
          <Box className="card-body">
            <Box className=" text-white fw-bold fs-2 mb-1 mt-1">
              Channnel Wise Active Users
            </Box>
            In last 24 hrs.
            <br />
            <Box className={`fw-semibold text-white`}>
              <span
                className="bi bi-whatsapp"
                style={{ fontSize: 25, color: "lightblue" }}
              >
                {" "}
              </span>{" "}
              - {wabaCount}
            </Box>
            <Box className={`fw-semibold text-white`}>
              <span
                className="bi bi-messenger"
                style={{ fontSize: 25, color: "lightblue" }}
              >
                {" "}
              </span>{" "}
              - {fbmCount}
            </Box>
            <Box className={`fw-semibold text-white`}>
              <span
                className="bi bi-instagram"
                style={{ fontSize: 25, color: "lightblue" }}
              >
                {" "}
              </span>{" "}
              - {instaCount}
            </Box>
            <Box className={`fw-semibold text-white`}>
              <span
                className="bi bi-telegram"
                style={{ fontSize: 25, color: "lightblue" }}
              >
                {" "}
              </span>{" "}
              - {telegarmCount}
            </Box>
            <br />
            <center>
              <Link
                to="/contact-management"
                className="btn"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  minWidth: 300,
                }}
              >
                Engage
              </Link>
            </center>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ChannelWiseActiveUsers;
