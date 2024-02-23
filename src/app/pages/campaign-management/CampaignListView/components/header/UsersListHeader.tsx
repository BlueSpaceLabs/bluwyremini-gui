// import { useListView } from "../../core/ListViewProvider";
import { UsersListToolbar } from "./UserListToolbar";
import { UsersListGrouping } from "./UsersListGrouping";
import { UsersListSearchComponent } from "./UsersListSearchComponent";

const UsersListHeader = ({
  showCreateAppModal,
  setShowCreateAppModal,
}: any) => {
  // const { selected } = useListView();
  return (
    <div className="card-header border-0 pt-6">
      <UsersListSearchComponent />
      {/* begin::Card toolbar */}
      <div className="card-toolbar">
        {/* begin::Group actions */}
        {[].length > 0 ? (
          <UsersListGrouping />
        ) : (
          <UsersListToolbar
            showCreateAppModal={showCreateAppModal}
            setShowCreateAppModal={setShowCreateAppModal}
          />
        )}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { UsersListHeader };
