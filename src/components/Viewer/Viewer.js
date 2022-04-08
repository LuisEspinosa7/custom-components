import React, { useState } from "react";
import { useTheme } from "styled-components";
import DatatableWrapper from "../DataTable/DataTableWrapper";
import Dropdown from "../microcomponents/Dropdown/Dropdown";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import { StyledCard } from "../styles/containers/Card.styled";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import { StyledGridContainer } from "../styles/containers/GridContainer.styled";
import { StyledSpinner } from "../styles/loaders/Spinner.styled";
import TypingLoader from "../styles/loaders/Typing/TypingLoader";
import { StyledH2Title } from "../styles/typography/H2Title.styled";
import { StyledH3Title } from "../styles/typography/H3Title.styled";
import { StyledParagraph } from "../styles/typography/Paragraph.styled";
import Table from "../Table/Table";
import TableMessage from "../TableMessage/TableMessage";

const Viewer = () => {
  const theme = useTheme();

  /* Dropdown */
  const [selected, setSelected] = useState({});

  const options = [
    {
      key: 1,
      value: "React",
    },
    {
      key: 2,
      value: "Angular",
    },
    {
      key: 3,
      value: "Vue",
    },
  ];

  /* Pagination */
  const itemsPerPage = 5;
  const totalItems = 20;
  const handlePaginate = () => {
    console.log("Paginate....");
  };

  /* Search Bar */
  const handleSearch = (searchValue) => {
    console.log("Searching...." + searchValue);
  };

  /* Table */
  const headers = ["Id", "Name", "Points", "Team"];
  const data = [
    {
      "id": 1,
      "name": "Luis",
      "points": 88.1,
      "team": "Softca"
    },
    {
      "id": 2,
      "name": "Pedro",
      "points": 18.1,
      "team": "Sura"
    },
    {
      "id": 3,
      "name": "Juan",
      "points": 90.1,
      "team": "Gana"
    },
  ]

  return (
    <>
      <StyledGridContainer
        gridTemplateColumns="repeat(6, 1fr)"
        gridTemplateRows="repeat(1, 1fr)"
        bigGridTemplateColumns="repeat(4, 1fr)"
        bigGridTemplateRows="repeat(1, 1fr)"
        mediumGridTemplateColumns="repeat(3, 1fr)"
        mediumGridTemplateRows="repeat(2, 1fr)"
        smallGridTemplateColumns="repeat(1, 1fr)"
        smallGridTemplateRows="repeat(6, 1fr)"
        gridGap="1rem"
        width="100%"
        verticalPadding="1rem"
        horizontalPadding="1rem"
      >
        <StyledCard
          width="200px"
          height="200px"
          backgroundColor={theme.colors.secondary.normal}
          margin="auto"
        >
          <StyledGridContainer
            gridTemplateColumns="1fr"
            gridTemplateRows="repeat(3, 1fr)"
            gridGap="1rem"
            width="100%"
            verticalPadding="0.6rem"
            horizontalPadding="0.6rem"
            alignItems="center"
          >
            <StyledH3Title
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Dropdown
            </StyledH3Title>
            <StyledFlexContainer>
              <Dropdown
                options={options}
                setSelected={setSelected}
                defaultOption="Choose one"
                width="170px"
                color={theme.colors.secondary.normal}
                fontSize="1rem"
                contentPadding="10px"
                hoverColor={theme.colors.gray.hover}
                backgroundColor="#fff"
                verticalMargin="0"
                horizontalMargin="0"
              />
            </StyledFlexContainer>

            <StyledParagraph
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Selected: {selected && selected.value}
            </StyledParagraph>
          </StyledGridContainer>
        </StyledCard>

        <StyledCard
          width="200px"
          height="200px"
          backgroundColor={theme.colors.secondary.normal}
          margin="auto"
        >
          <StyledGridContainer
            gridTemplateColumns="1fr"
            gridTemplateRows="repeat(2, 1fr)"
            gridGap="1rem"
            width="100%"
            verticalPadding="0.6rem"
            horizontalPadding="0.6rem"
            alignItems="center"
          >
            <StyledH3Title
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Spinner
            </StyledH3Title>

            <StyledFlexContainer>
              <StyledSpinner
                borderThickness="5px"
                width="40px"
                height="40px"
                color={theme.colors.primary.normal}
              />
            </StyledFlexContainer>
          </StyledGridContainer>
        </StyledCard>

        <StyledCard
          width="200px"
          height="200px"
          backgroundColor={theme.colors.secondary.normal}
          margin="auto"
        >
          <StyledGridContainer
            gridTemplateColumns="1fr"
            gridTemplateRows="repeat(2, 1fr)"
            gridGap="1rem"
            width="100%"
            verticalPadding="0.6rem"
            horizontalPadding="0.6rem"
            alignItems="center"
          >
            <StyledH3Title
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Pagination
            </StyledH3Title>

            <StyledFlexContainer>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                paginate={handlePaginate}
                verticalPadding="0.5rem"
                horizontalPadding="1rem"
                fontSize="1rem"
                scaleNumber={1.08}
                backgroundColor={theme.colors.secondary.lighter}
                activeColor={theme.colors.primary.normal}
                color={theme.colors.primary.normal}
                selected={1}
                disabled={false}
              />
            </StyledFlexContainer>
          </StyledGridContainer>
        </StyledCard>

        <StyledCard
          width="200px"
          height="200px"
          backgroundColor={theme.colors.secondary.normal}
          margin="auto"
        >
          <StyledGridContainer
            gridTemplateColumns="1fr"
            gridTemplateRows="repeat(2, 1fr)"
            gridGap="1rem"
            width="100%"
            verticalPadding="0.6rem"
            horizontalPadding="0.6rem"
            alignItems="center"
          >
            <StyledH3Title
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Search Bar
            </StyledH3Title>

            <Search
              placeholder="Search..."
              hasSearchButton="true" // Search mode
              maxWidth="180px"
              imageColor={theme.colors.primary.normal}
              handleSearch={handleSearch}
              fontSize="12px"
              verticalPadding="8px"
              horizontalPadding="10px"
              iconWidth="18px"
              iconHeight="18px"
              buttonVerticalMargin="0px"
              buttonHorizontalMargin="5px"
              verticalContainerPadding="2px"
              horizontalContainerPadding="2px"
              textColor={theme.colors.primary.normal}
              placeholderColor={theme.colors.primary.normal}
            />
          </StyledGridContainer>
        </StyledCard>

        <StyledCard
          width="200px"
          height="200px"
          backgroundColor={theme.colors.secondary.normal}
          margin="auto"
        >
          <StyledGridContainer
            gridTemplateColumns="1fr"
            gridTemplateRows="repeat(2, 1fr)"
            gridGap="1rem"
            width="100%"
            verticalPadding="0.6rem"
            horizontalPadding="0.6rem"
            alignItems="center"
          >
            <StyledH3Title
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Not Found
            </StyledH3Title>

            <TableMessage
              iconWidth="30px"
              iconHeight="30px"
              fontSize="1.3rem"
              text="No results!"
              color={theme.colors.primary.normal}
            />
          </StyledGridContainer>
        </StyledCard>

        <StyledCard
          width="200px"
          height="200px"
          backgroundColor={theme.colors.secondary.normal}
          margin="auto"
        >
          <StyledGridContainer
            gridTemplateColumns="1fr"
            gridTemplateRows="repeat(2, 1fr)"
            gridGap="1rem"
            width="100%"
            verticalPadding="0.6rem"
            horizontalPadding="0.6rem"
            alignItems="center"
          >
            <StyledH3Title
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Typing
            </StyledH3Title>

            <TypingLoader
              blickWidth="3px"
              blickColor={theme.colors.primary.normal}
              textColor={theme.colors.primary.normal}
              animationSeconds="3s"
            />
          </StyledGridContainer>
        </StyledCard>
      </StyledGridContainer>



      <StyledGridContainer
        gridTemplateColumns="repeat(1, 1fr)"
        gridTemplateRows="repeat(1, 1fr)"
        gridGap="1rem"
        width="100%"
        verticalPadding="1rem"
        horizontalPadding="1rem">

        <StyledCard
          width="350px"
          height="240px"
          backgroundColor={theme.colors.secondary.normal}
          margin="auto"
        >
          <StyledGridContainer
            gridTemplateColumns="1fr"
            gridTemplateRows="1fr 6fr"
            width="100%"
            verticalPadding="0.6rem"
            horizontalPadding="0.6rem"
            alignItems="center"
          >
            <StyledH3Title
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Simple Table
            </StyledH3Title>
            <StyledFlexContainer>
                <Table headers={headers} data={data} headerColor={theme.colors.secondary.lighter} 
                    colorBottomTable={theme.colors.accent.normal} 
                    hoverColor={theme.colors.accent.normal}
                    colorNormalRow={theme.colors.primary.normal} 
                    colorEvenRow={theme.colors.secondary.normal}
                    verticalMargin="0.6rem"
                    horizontalMargin="0"
                    tableMinWidth="300px"/>
            </StyledFlexContainer>

          </StyledGridContainer>
        </StyledCard>

      </StyledGridContainer>


      <StyledFlexContainer
        background={theme.colors.primary.normal}
        color={theme.colors.secondary.normal}
        flexDirection="column"
        smallMargin="1rem 0">
        <StyledH2Title
          fontWeight="900"
          fontFamily="Beau Rivage"
          color={theme.colors.accent.normal}
          bigFontSize="2rem"> And finally...</StyledH2Title>
      </StyledFlexContainer>


      <StyledGridContainer
        gridTemplateColumns="repeat(1, 1fr)"
        gridTemplateRows="repeat(1, 1fr)"
        gridGap="1rem"
        width="100%"
        verticalPadding="1rem"
        horizontalPadding="1rem"
        >

        <StyledCard
          width="365px"
          height="450px"
          backgroundColor={theme.colors.secondary.normal}
          margin="auto"
        >
          <StyledGridContainer
            gridTemplateColumns="1fr"
            gridTemplateRows="1fr 9fr"
            width="100%"
            verticalPadding="0.6rem"
            horizontalPadding="0.6rem"
            alignItems="center"
          >
            <StyledH3Title
              color={theme.colors.primary.normal}
              textAlign="center"
            >
              Data Table
            </StyledH3Title>
            <StyledFlexContainer>
                <DatatableWrapper />
            </StyledFlexContainer>

          </StyledGridContainer>
        </StyledCard>

      </StyledGridContainer>
    </>
  );
};

export default Viewer;
