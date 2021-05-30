import React from "react";
import styled from "styled-components";
import Github from "@material-ui/icons/GitHub";

function Menu({ menuItem }) {
  return (
    <MeniItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                <li>
                  {" "}
                  <a href={item.link}><Github/></a>
                </li>
              </ul>
              </div>
             <h6>{item.title}</h6>
            </div>
          </div>
        );
      })}
    </MeniItemStyled>
  );
}

const MeniItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
.grid-item{
  .portfolio-content{
    display: block;
    position: relative;
    h6{
      font-size: 1.5rem;
    }
    img{
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
    ul{
      display: none;
    }

    }
  }
}
`;
export default Menu;
