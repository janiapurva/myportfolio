import React from "react";
import styled from "styled-components";

function Menu({ menuItem }) {
  return (
    <MeniItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.img} alt="" />;
              </div>
              <ul>
                <li>
                  {" "}
                  <a href={item.link}></a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </MeniItemStyled>
  );
}

const MeniItemStyled = styled.div``;
export default Menu;
