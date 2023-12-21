import clsx from "clsx";
import { FC } from "react";
import { Row } from "react-table";
import { User } from "../../core/_models";

type Props = {
  row: Row<User>;
};

const CustomRow: FC<Props> = ({ row }) => {
  // console.log("rows", row);

  const randomId = () => {
    return Math.floor(Math.random() * 90 + 10);
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
            <td {...cell.getCellProps()}>
              <img
                src={`https://picsum.photos/id/${randomId()}/150/100`}
                alt="dummy pics"
              />
            </td>
          );
        } else if (cell.column.id === "role") {
          return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
        } else if (cell.column.id === "last_login") {
          return (
            <td {...cell.getCellProps()}>{"This is Media Description."}</td>
          );
        }
        // else if (cell.column.id === "two_steps") {
        //   return (
        //     <td>
        //       <input type="checkbox" defaultChecked={false} />
        //     </td>
        //   );
        // }
        else if (cell.column.id === "joined_day") {
          return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
        } else if (cell.column.id === "actions") {
          return (
            <td
              {...cell.getCellProps()}
              className={clsx({
                "text-end min-w-100px": cell.column.id === "actions",
              })}
            >
              {cell.render("Cell")}
            </td>
          );
        }
      })}
    </tr>
  );
};

export { CustomRow };
