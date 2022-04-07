import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import DataTable from "./DataTable";

const DatatableWrapper = () => {
  const theme = useTheme();
  const [checkedList, setCheckedList] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      if(res.status >= 400) {
        throw new Error("Server responds with error!");
      }
      return res.json();
    })
    .then(data => {
      setDataError(false);
      setData(data);
      setLoading(false);
    })
    .catch(error => {
      console.log('ERROR EN API');
      console.log(error);
      setDataError(true);
      setData([]);
      setLoading(false);
    })
  }, []);

  const handleItemSelected = (element) => {
    console.log(element);

    if (checkedList.length > 0) {
        let found = checkedList.find((elem) => {
            return elem.id === element.id
        })

        console.log('Found:');
        console.log(found);

        if (!found) {
            setCheckedList(checkedList => [...checkedList, element]);
        } else {
            setCheckedList(checkedList.filter(item => item.id !== element.id));
        }

    } else {
        setCheckedList(checkedList => [...checkedList, element]);
    }
  };

  return (
    <>
      <DataTable
        headers={headers}
        data={data}
        handleItemSelected={handleItemSelected}
        checkedList={checkedList}
        loading={loading}
        selectionMode="unique"
        dataFields={dataFields}
        searchableColumns={searchableColumns}
        rowsPerPageList={rowsPerPageList}
        dataError={dataError}
        theme={theme}
      />
    </>
  );
};


/* Table configurations */
const headers = ["Id", "Name", "Username", "Email"];
const dataFields = ["id", "name", "username", "email"];
const searchableColumns = ["name", "username", "email"];

const rowsPerPageList = [
  {
    key: 1,
    value: 3,
  },
  {
    key: 2,
    value: 6,
  },
  {
    key: 3,
    value: 10,
  },
];

export default DatatableWrapper;
