import Accordion from "../accordion";
import SearchForm from "../seachForm";
import {
  bodyRowA,
  bodyRowB,
} from "../../scripts/tableValues";
import TableComponent from "../reactTable/tableComponet";

export default function AutoMatchDebug() {
  const localStyle = {
    tableContainer: {
      padding: "4px",
    },
  }

  return (
    <Accordion title="Search">
      <div style={{border: "solid 1px var(--accentColorE)", margin: "1px", marginBottom: "16px"}}>
        <SearchForm />
      </div>

      <Accordion title="Result">
        <div style={localStyle.tableContainer}>
          <h3>Source Records</h3>
          <TableComponent values={bodyRowA} />
        </div>

        <div style={localStyle.tableContainer}>
          <h3>Target Records</h3>
          <TableComponent values={bodyRowB} />
        </div>
      </Accordion>
    </Accordion>
  );
}
