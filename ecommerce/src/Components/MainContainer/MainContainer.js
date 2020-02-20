import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  background: #f4f4f4;
  widrh: 100%;
`;

const MainContainer = props => {
  return <Main>{props.children}</Main>;
};

export default MainContainer;
