// import { useListView } from "../../core/ListViewProvider";
import { UsersListToolbar } from "./UserListToolbar";
import { UsersListGrouping } from "./UsersListGrouping";
import { UsersListSearchComponent } from "./UsersListSearchComponent";

const UsersListHeader = ({
  handleShowAddModal,
  setSearchContact,
  setFromDate,
  setToDate,
}: any) => {
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
          <UsersListToolbar
            handleShowAddModal={handleShowAddModal}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />
        )}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { UsersListHeader };
