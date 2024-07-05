
import { TableBody, TableHeader } from "./Pieces";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export default function Table({ header, body, sort, setSort }) {
  


  return (
    <table style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {header.map((value, i) => {
            if (sort !== null && sort.value === value) {
              let icon;
              if (sort.order === "desc") icon = <IoMdArrowDropdown />;
              else icon = <IoMdArrowDropup />;

              return (
                <TableHeader
                  key={"tableHeader" + i}
                  value={value}
                  icon={icon}
                  sort={sort}
                  setSort={setSort}
                />
              );
            }
            return (
              <TableHeader
                key={"tableHeader" + i}
                value={value}
                sort={sort}
                setSort={setSort}
              />
            );
          })}
        </tr>
      </thead>
      <tbody>
        {body.map((row, i) => {
          return (
            <tr tabIndex="1" key={"tableRow" + i}>
              {Object.values(row).map((value, i) => {
                return <TableBody key={"tableBody" + i} value={value} />;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
