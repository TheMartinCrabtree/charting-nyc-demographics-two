import React from "react";
import styled from "styled-components";
import GraphContainer from "./GraphContainer";

// image size 1000x562px
const LayoutWrapper = styled.div`
  max-width: 1000px;
`;

const MainContainer = (props) => {
  return (
    <MainContainer>
      <LayoutWrapper>
        <div>Main Container</div>
        <GraphContainer />
      </LayoutWrapper>
    </MainContainer>
  );
};

export default MainContainer;
