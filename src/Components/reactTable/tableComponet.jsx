import {useMemo} from "react";
import { useSortBy, useTable } from 'react-table';
import { IconContext } from "react-icons";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function TableComponent({ values }) {
    const data = useMemo(() => values);
    const columns = useMemo(() => Object.keys(values[0]).map((key)=>({Header: key.toUpperCase(), accessor: key})), []);

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        { columns, data },
        useSortBy,
    );

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                            >
                                {column.render('Header')}
                                <span>
                                    <IconContext.Provider value={{ color: "#4C97DF" }}>
                                        {
                                            column.isSorted ? 
                                                column.isSortedDesc ? <IoMdArrowDropdown /> : <IoMdArrowDropup />
                                                : ''
                                        }
                                    </IconContext.Provider>
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}