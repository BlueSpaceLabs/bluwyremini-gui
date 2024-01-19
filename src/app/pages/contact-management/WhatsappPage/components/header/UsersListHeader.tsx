// import { useListView } from "../../core/ListViewProvider";
import { useEffect, useState } from "react";
import { UsersListToolbar } from "./UserListToolbar";
import { UsersListGrouping } from "./UsersListGrouping";
import { UsersListSearchComponent } from "./UsersListSearchComponent";
import axios from "axios";

const UsersListHeader = ({ handleShowAddModal }: any) => {
  const [searchContact, setSearchContact] = useState<string>("");

  useEffect(() => {
    console.log("Call Search API", { searchContact });

    if (searchContact.length > 2) {
      const serviceGetContactDetails = async () => {
        try {
          const response = await axios.get(
            "http://3.108.229.60:8082/bluwyremini-backend/info/getContactDetails.php",
            {
              params: {
                channelName: "whatsapp",
                accessKey:
                  "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
                search: searchContact,
              },
            }
          );
          const responseData = response?.data;

          console.log("responseData", responseData);
        } catch (error: any) {
          console.log(error);
        } finally {
          console.log("API Fetch Done");
        }
      };

      serviceGetContactDetails();
    }
  }, [searchContact]);

  // const { selected } = useListView();
  return (
    <div className="card-header border-0 pt-6">
      <UsersListSearchComponent setDebouncedSearchTerm={setSearchContact} />
      {/* begin::Card toolbar */}
      <div className="card-toolbar">
        {/* begin::Group actions */}
        {[].length > 0 ? (
          <UsersListGrouping />
        ) : (
          <UsersListToolbar handleShowAddModal={handleShowAddModal} />
        )}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { UsersListHeader };
