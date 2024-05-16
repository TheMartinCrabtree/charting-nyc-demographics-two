import React, { useState } from "react";
import styled from "styled-components";
// import GraphContainer from "./GraphContainer";
import DataSelector from "./DataSelector";
import rawData from "../data";
import zipcodeKeys from "../zipcodes";

const testData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
        <GraphContainer />
        {/* <DataSelector /> */}
      </LayoutWrapper>
    </MainContainer>
  );
};

export default MainContainer;
