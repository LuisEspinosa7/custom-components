import React, { useEffect, useState } from "react";
import { StyledDataTableContainer } from "./DataTable.styled";
import TableRow from "../TableRow/TableRow";
import TableHeader from "../TableHeader/TableHeader";
import { StyledThreeElementsContainer } from "../styles/containers/ThreeElementsContainer.styled";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import Dropdown from "../microcomponents/Dropdown/Dropdown";
import Search from "../Search/Search";
import { StyledSpinner } from "../styles/loaders/Spinner.styled";
import TableMessage from "../TableMessage/TableMessage"; 
import Pagination from '../Pagination/Pagination';

const Datatable = ({
  headers,
  data,
  handleItemSelected,
  checkedList,
  loading,
  selectionMode,
  dataFields,
  searchableColumns,
  rowsPerPageList,
  dataError,
  theme,
  minWidth
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageList[0].value);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalRows, setTotalRows] = useState(0);

  const [currentRows, setCurrentRows] = useState([]);

  useEffect(() => {
    
    const filteredTotalRows = () => {
      return data.filter((item) => {
        for (var column of searchableColumns) {
          console.log("Column: " + column);
          if (item[`${column}`].toString().includes(searchTerm)) {
            return true;
          }
        }
        return false;
      }).length;
    };
    

    const filteredCurrentRows = (indexOfLastRow, indexOfFirstRow) => {
      return data
        .filter((item) => {
          for (var column of searchableColumns) {
            console.log("Column: " + column);
            if (item[`${column}`].toString().includes(searchTerm)) {
              return true;
            }
          }
          return false;
        })
        .slice(indexOfFirstRow, indexOfLastRow);
    };

    // Only if it is not loading and it has no error, all parameters will be calculated
    if(!loading && !dataError) {
      console.log('NO HAY ERROR');
      // Get current rows
      const indexOfLastRow = currentPage * rowsPerPage;
      const indexOfFirstRow = indexOfLastRow - rowsPerPage;
      console.log("Filtered rows: " + filteredTotalRows());
      setTotalRows(filteredTotalRows());
      console.log(filteredCurrentRows(indexOfLastRow, indexOfFirstRow));
      setCurrentRows(filteredCurrentRows(indexOfLastRow, indexOfFirstRow));
    } else if(!loading && dataError) {
      console.log('HAY UN ERROR');
    }
    
  }, [data, currentPage, rowsPerPage, searchTerm, searchableColumns, dataError, loading]);


  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  const handleRowsPerPageChange = (option) => {
    setCurrentPage(1);
    setRowsPerPage(option.value);
  };

  const handleSearch = (searchValue) => {
    setCurrentPage(1);
    setSearchTerm(searchValue);
  };

  const validateData = () => {
    return (
      <>
        {dataError
          ? renderDataError()
          : validateRenderTableBody()}
      </>
    );
  };


  const renderDataError = () => {
    return (
      <tr>
        <td colSpan={headers.length + 1}>
          <TableMessage
            iconWidth="30px"
            iconHeight="30px"
            fontSize="1.3rem"
            text="Error loading the data!"
          />
        </td>
      </tr>
    );
  };

  const validateRenderTableBody = () => {
    return (
      <>
        {currentRows.length > 0
          ? renderTableWithResults()
          : renderTableNoResults()}
      </>
    );
  };

  const renderTableWithResults = () => {
    return (
      <>
        {currentRows.map((element) => (
          <TableRow
            colorBottomTable={theme.colors.accent.normal} 
            hoverColor={theme.colors.accent.normal}
            colorNormalRow={theme.colors.primary.normal} 
            colorEvenRow={theme.colors.secondary.normal}
            key={element[`${dataFields[0]}`]}
            element={element}
            handleItemSelected={handleItemSelected}
            checked={
              checkedList.find(
                (elem) =>
                  elem[`${dataFields[0]}`] === element[`${dataFields[0]}`]
              )
                ? true
                : false
            }
            checkboxDisabled={
              selectionMode === "unique" &&
              checkedList.find(
                (elem) =>
                  elem[`${dataFields[0]}`] !== element[`${dataFields[0]}`]
              )
            }
            rowColumns={dataFields}
          />
        ))}
      </>
    );
  };

  const renderTableNoResults = () => {
    return (
      <tr>
        <td colSpan={headers.length + 1}>
          <TableMessage
            iconWidth="30px"
            iconHeight="30px"
            fontSize="1.3rem"
            text="No results!"
            color={theme.colors.primary.normal}
          />
        </td>
      </tr>
    );
  };

  const renderTableLoading = () => {
    return (
      <>
        <tr>
          <td colSpan={headers.length + 1}>
            <StyledFlexContainer>
              <StyledSpinner
                borderThickness="5px"
                width="50px"
                height="50px"
                color={theme.colors.primary.normal}
              />
            </StyledFlexContainer>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <StyledThreeElementsContainer
        firstFraction="0.7fr"
        secondFraction="4fr"
        thirdFraction="0.8fr"
        gap="1rem"
      >
        <StyledFlexContainer
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
        >
          <Dropdown
            options={rowsPerPageList}
            setSelected={handleRowsPerPageChange}
            defaultOption={rowsPerPageList[0].value}
            width="80px"
            color={theme.colors.secondary.normal}
            fontSize="1rem"
            contentPadding="10px"
            hoverColor={theme.colors.gray.hover}
            backgroundColor="#fff"
            verticalMargin="0"
            horizontalMargin="0"
            disabled={loading || dataError}
          />
          <div>
            <Search
              placeholder="Search..."
              hasSearchButton="false"
              maxWidth="300px"
              imageColor={theme.colors.primary.normal}
              handleSearch={handleSearch}
              disabled={loading || dataError}
              colorDisabled="linear-gradient(90deg, rgba(209,209,209,1) 0%, rgba(205,205,205,1) 33%, rgba(181,181,181,1) 100%)"
              textColor={theme.colors.primary.normal}
              placeholderColor={theme.colors.primary.normal}
            />
          </div>
        </StyledFlexContainer>
        <StyledDataTableContainer margin="0px"
          minWidth={minWidth}>
          <TableHeader headers={headers} theme={theme} />

          <tbody>
            {!loading ? validateData() : renderTableLoading()}
          </tbody>
        </StyledDataTableContainer>
        <StyledFlexContainer
          direction="row"
          alignItems="center"
          justifyContent="start"
          gap="1rem"
        >
          <Pagination
            itemsPerPage={rowsPerPage}
            totalItems={totalRows}
            paginate={handlePagination}
            verticalPadding="0.5rem"
            horizontalPadding="1rem"
            fontSize="1rem"
            selected={currentPage}
            disabled={loading || dataError}
            scaleNumber={1.08}
            backgroundColor={theme.colors.secondary.lighter}
            activeColor={theme.colors.primary.normal}
            color={theme.colors.primary.normal}
          />
        </StyledFlexContainer>
      </StyledThreeElementsContainer>
    </>
  );
};


export default Datatable;
