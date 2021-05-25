import React from "react";
import styled from "styled-components";

function Title({ title, span }) {
  return (
    <TitleStyled>
      <h2>
        {title}
        <span>{span}</span>
      </h2>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  position: relative;
  h2{
    color:var(--white-color);
    font-size:3.8rem;
    font-weight:600;
  }
`;

export default Title;
