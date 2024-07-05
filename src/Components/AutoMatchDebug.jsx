import Accordion from "./Accordion";
import SearchForm from "./SeachForm";
import RecordsContainer from "./RecordsContainer";
import Table from "./TableComponent/Table";
import {
  headerRowA,
  headerRowB,
  bodyRowA,
  bodyRowB,
} from "../Scripts/TableValues";
import { useEffect, useRef, useState } from "react";

export default function AutoMatchDebug() {
  const [sortA, setSortA] = useState(null);
  const [sortB, setSortB] = useState(null);
  let bodyA = useRef(null);
  let bodyB = useRef(null);

  function sortRows(a, b, sort) {
    if (sort.order === "desc") {
      if (a[sort.value] > b[sort.value]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (a[sort.value] < b[sort.value]) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  useEffect(() => {
    if (sortA !== null) {
        bodyA.current = bodyRowA.sort((a, b) => sortRows(a, b, sortA)); 
    } else {
      bodyA.current = bodyRowA;
    }
  }, [sortA]);

  useEffect(() => {
    if (sortB !== null) {
        bodyB.current = bodyRowB.sort((a, b) => sortRows(a, b, sortB)); 
    } else {
      bodyB.current = bodyRowB;
    }
  }, [sortB]);

  return (
    <>
      <Accordion title="Search">
        <SearchForm />
      </Accordion>

      <Accordion title="Result">
        <RecordsContainer title="Source Records">
          <Table
            header={headerRowA}
            body={bodyRowA}
            sort={sortA}
            setSort={setSortA}
          />
        </RecordsContainer>
        <RecordsContainer title="Target Records">
          <Table
            header={headerRowB}
            body={bodyRowB}
            sort={sortB}
            setSort={setSortB}
          />
        </RecordsContainer>
      </Accordion>
    </>
  );
}
