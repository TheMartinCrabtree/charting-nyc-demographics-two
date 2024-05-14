import React, { useState } from "react";
import styled from "styled-components";
import BarGraph from "./BarGraph";

const graphTypeOptions = ["BAR_GRAPH", "AREA_GRAPH"];

const LayoutWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const GraphContainer = (props) => {
  return (
    <LayoutWrapper>
      <div>GraphContainer</div>
      <BarGraph />
    </LayoutWrapper>
  );
};

export default GraphContainer;
