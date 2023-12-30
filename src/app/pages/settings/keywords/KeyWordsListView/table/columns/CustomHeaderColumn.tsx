import { FC } from "react";
import { ColumnInstance } from "react-table";
import { User } from "../../core/_models";

type Props = {
  column: ColumnInstance<User>;
};

const CustomHeaderColumn: FC<Props> = ({ column }) => {
  // console.log("column", typeof column.Header === "string");

  // console.log("column", column);
  if (column.id === "selection") {
    return (
      <>
        {column.Header && typeof column.Header === "string" ? (
          <th {...column.getHeaderProps()}>{column.render("Header")}</th>
        ) : (
          column.render("Header")
        )}
      </>
    );
  } else if (column.id === "name") {
    return <th>KeyWord</th>;
  }
  // else if (column.id === "role") {
  //   return <th>Media Name</th>;
  // }
  else if (column.id === "last_login") {
    return <th>KeyWord Description</th>;
  }
  // else if (column.id === "two_steps") {
  //   return <th>Telegram</th>;
  // }
  // else if (column.id === "joined_day") {
  //   return <th>Updated Date</th>;
  // }
  else if (column.id === "actions") {
    return <th>Actions</th>;
  }
};

export { CustomHeaderColumn };
