import React from "react";
import styled from "styled-components";
import ItemVideo from "./ItemVideo";

const Wrapper = styled.div`
  width: 50%;
  height: 80vh;
  border: 0.2em solid rgb(70, 68, 68);
  border-left: 0.1em solid rgb(70, 68, 68);
`;

const PageVideo = ({ arr }) => (
  <Wrapper>
    {arr.map(item => (
      <ItemVideo key={item.url} obj={item} />
    ))}
  </Wrapper>
);

export default PageVideo;
