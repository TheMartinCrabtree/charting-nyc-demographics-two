import React, { useState } from "react";
import styled from "styled-components";
// import GraphContainer from "./GraphContainer";
import DataSelector from "./DataSelector";
import rawData from "../data";
import zipcodeKeys from "../zipcodes";

const combinedData = {
  data: rawData,
  zips: zipcodeKeys,
};

// image size 1000x562px
const LayoutWrapper = styled.div`
  max-width: 1000px;
`;

const MainContainer = (props) => {
  const [allData, setAllData] = useState(combinedData);
  console.log("allData", allData);

  return (
    <MainContainer>
      <LayoutWrapper>
        <div>Main Container</div>
        {/* <GraphContainer /> */}
        <DataSelector />
      </LayoutWrapper>
    </MainContainer>
  );
};

export default MainContainer;
