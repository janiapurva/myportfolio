import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particles";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Apurva Jani</span>
        </h1>
        <p>
          Full Stack Developer
        </p>
        <div className="icons">
          <a href="https://twitter.com/janiapurva" className="icon i-twitter">
            <TwitterIcon />
          </a>
          <a href="https://github.com/janiapurva" className="icon i-github">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/apurva-jani-19b72428/"
            className="icon i-linkedin"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-twitter{
        :hover{
          border: 2px solid #00acee;
          color: #00acee;
        }
      }
      .i-github{
        :hover{
          border: 2px solid green;
          color: green;
        }
      }
      .i-linkedin{
        :hover{
          border: 2px solid #0e76a8;
          color: #0e76a8;
        }
      }

    }
  }
`;
export default HomePage;
