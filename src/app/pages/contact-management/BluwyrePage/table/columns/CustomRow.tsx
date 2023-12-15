// import clsx from "clsx";
import { FC } from "react";
import { Row } from "react-table";
import { User } from "../../core/_models";

type Props = {
  row: Row<User>;
};

const CustomRow: FC<Props> = ({ row }) => {
  // console.log("rows", row);

  const RandomBoolean = () => {
    return Math.random() < 0.4;
  };
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell) => {
        if (cell.column.id === "selection") {
          return (
            <td
              {...cell.getCellProps()}
              // className={clsx({
              //   "text-end min-w-100px": cell.column.id === "actions",
              // })}
            >
              {cell.render("Cell")}
            </td>
          );
        } else if (cell.column.id === "name") {
          return (
            <td
              {...cell.getCellProps()}
              // className={clsx({
              //   "text-end min-w-100px": cell.column.id === "actions",
              // })}
            >
              {cell.render("Cell")}
            </td>
          );
        }
        //  else if (cell.column.id === "role") {
        //   return <td {...cell.getCellProps()}>19 Aug 2022, 10:10 pm</td>;
        // }
        else if (cell.column.id === "last_login") {
          return (
            <td>
              <input type="checkbox" defaultChecked={RandomBoolean()} />
            </td>
          );
        } else if (cell.column.id === "two_steps") {
          return (
            <td>
              <input type="checkbox" defaultChecked={RandomBoolean()} />
            </td>
          );
        } else if (cell.column.id === "joined_day") {
          return (
            <td>
              <input type="checkbox" defaultChecked={RandomBoolean()} />
            </td>
          );
        } else if (cell.column.id === "actions") {
          return (
            <td>
              <input type="checkbox" defaultChecked={RandomBoolean()} />
            </td>
          );
        }
      })}
    </tr>
  );
};

export { CustomRow };
