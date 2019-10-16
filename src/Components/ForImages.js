import React from "react";
import styled from "styled-components";
import ItemImg from "./ItemImg";

const Wrapper = styled.div`
  width: 50%;
  height: 80vh;
  border: 0.2em solid rgb(70, 68, 68);
  border-right: 0.1em solid rgb(70, 68, 68);
`;
const Title = styled.h2`
  text-align: center;
`;

const PageImg = ({ arr }) => (
  <Wrapper>
    <Title>Images</Title>
    {arr.map(item => (
      <ItemImg key={item} url={item} />
    ))}
  </Wrapper>
);

export default PageImg;
