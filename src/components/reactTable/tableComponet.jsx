import { useMemo } from "react";
import { useExpanded, useGroupBy, useSortBy, useTable } from "react-table";
import { IconContext } from "react-icons";
import { BsArrowRight , BsArrow90DegDown  } from "react-icons/bs";
import { RxDotsVertical } from "react-icons/rx";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowDropright,
} from "react-icons/io";
import "../styles/reactTable.css";

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
      textAlign: "left",
      margin: "none",
      border: "1px solid #DDD",
    },
    tableHeaderColumnText: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 16px",
    },
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { groupBy, expanded },
  } = useTable({ columns, data }, useGroupBy, useSortBy, useExpanded);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={"headerGroup" + i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <th
                tabIndex={1}
                key={"column" + i}
                style={ tableStyle.tableHeder}
                {...column.getHeaderProps()}
                className={(column.isGrouped || column.isSorted) && ("activeTableHeader")}
              >
                <IconContext.Provider value={{ color: "#333" }}>
                  <div>
                    {column.canGroupBy ? (
                      // If the column can be grouped, let's add a toggle
                      <span {...column.getGroupByToggleProps()}>
                        {column.isGrouped ? (
                          <BsArrowRight />
                        ) : (
                          <BsArrow90DegDown /> 
                        )}
                      </span>
                    ) : null}

                    <div
                      {...column.getSortByToggleProps()}
                      style={tableStyle.tableHeaderColumnText}
                    >
                      <div
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {column.render("Header")}
                      </div>
                      <div>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <IoMdArrowDropdown />
                          ) : (
                            <IoMdArrowDropup />
                          )
                        ) : (
                          <RxDotsVertical />
                        )}
                      </div>
                    </div>
                  </div>
                </IconContext.Provider>
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
                    {cell.isGrouped ? (
                      // If it's a grouped cell, add an expander and row count
                      <>
                        <span {...row.getToggleRowExpandedProps()}>
                          {row.isExpanded ? (
                            <IoMdArrowDropright />
                          ) : (
                            <IoMdArrowDropdown />
                          )}
                        </span>{" "}
                        {cell.render("Cell")} ({row.subRows.length})
                      </>
                    ) : cell.isAggregated ? (
                      // If the cell is aggregated, use the Aggregated
                      // renderer for cell
                      cell.render("Aggregated")
                    ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                      // Otherwise, just render the regular cell
                      cell.render("Cell")
                    )}
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
