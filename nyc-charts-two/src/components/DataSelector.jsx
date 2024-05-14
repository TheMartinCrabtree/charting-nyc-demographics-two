import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div``;
const DropdownTitle = styled.div``;

const DataSelector = (props) => {
  const handleOptionChange = (event) => {
    console.log("updated");
  };
  // const renderOptions = () => {
  //   return state.zipcodeKey.map((neighborhood) => {
  //     const [name, zipcode] = neighborhood;
  //     return (
  //       <option key={name + zipcode[0]} value={name}>
  //         {name}
  //       </option>
  //     );
  //   });
  // };
  return (
    <LayoutWrapper>
      <DropdownTitle>Select A Neighborhood</DropdownTitle>

      <select value={"temp"} onChange={handleOptionChange}>
        {/* {state && state.zipcodeKey && renderOptions()} */}
      </select>
    </LayoutWrapper>
  );
};

export default DataSelector;
