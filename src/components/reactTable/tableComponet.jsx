import { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import { IconContext } from "react-icons";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function TableComponent({ values }) {
  const data = useMemo(() => values, [values]);
  const columns = useMemo(
    () =>
      Object.keys(values[0]).map((key) => ({
        Header: key.toUpperCase(),
        accessor: key,
      })),
    [values],
  );

  const tableStyle = {
    tableHeder: {
      width: "150px",
      fontWeight: "normal",
      backgroundImage: "linear-gradient(#F0FBFF, #B7D5FD)", //"linear-gradient(#F0FBFF, #E4E4E4)",
      textAlign: "left",
      margin: "none",
      border: "1px solid #DDD",
    },
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={"headerGroup" + i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <th
                tabIndex={1}
                key={"column" + i}
                style={tableStyle.tableHeder}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
                <span>
                  <IconContext.Provider value={{ color: "#4C97DF" }}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <IoMdArrowDropdown />
                      ) : (
                        <IoMdArrowDropup />
                      )
                    ) : (
                      ""
                    )}
                  </IconContext.Provider>
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr tabIndex={1} key={"row" + i} {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                return (
                  <td key={"cell" + i} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
