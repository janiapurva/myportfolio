import React from "react";
import styled from "styled-components";
import SecondPic from "../img/SecondPic.JPG";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={SecondPic} alt="resume image" />
      </div>
      <div className="right-content">
        <h4>
          I'm <span>Apurva Jani</span>
        </h4>

        <p className="paragraph">
          Full stack developer with extensive background in various coding
          languages. Experience building and developing applications to align
          with project and user requirements. Specializes in
          JavaScript, TypeScript, ReactJS, NodeJS and Express. Professional
          strengths include creative problem-solving, leadership, teamwork and
          time management. Detail-oriented mindset from 5+ years of experience
          in senior roles within the Hospitality industry.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Languages</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>:Apurva Jani</p>
            <p>:English, Hindi, Gujarati</p>
            <p>:Toronto,Canada</p>
          </div>
        </div>
      </div>
    </ImageSectionStyled>
  );
}
const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  .left-content {
    width: 100%;
    img {
      width: 90%;
    }
  }
  .right-content {
    h4{
      font-size: 2rem;
      color: var(--white-color);
      span{
        font-size: 2rem;
      }
    }
    .paragraph{
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      .info-title, .info{
p{
  padding: 1rem 0;
}
      }
    }
  }
`;

export default ImageSection;
