import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layout";
import Title from "./Title";
import ProgressBar from "../Components/ProgressBar";
function Skills() {
  return (
    <SkillsStyled>
      <MainLayout>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
          <div className="skills">
            <ProgressBar title={"JavaScript"} width={"90%"} text={"90%"} />
            <ProgressBar title={"Node.js"} width={"80%"} text={"80%"} />
            <ProgressBar title={"React"} width={"85%"} text={"85%"} />
            <ProgressBar title={"Express.js"} width={"80%"} text={"80%"} />
            <ProgressBar title={"TypeScript"} width={"70%"} text={"70%"} />
            <ProgressBar title={"PostgreSQL"} width={"75%"} text={"75%"} />
            <ProgressBar title={"Ruby on Rails"} width={"70%"} text={"70%"} />

            <ProgressBar title={"HTML5"} width={"80%"} text={"80%"} />
            <ProgressBar title={"CSS"} width={"80%"} text={"80%"} />
            <ProgressBar title={"Chai"} width={"75%"} text={"75%"} />
            <ProgressBar title={"Mocha"} width={"85%"} text={"85%"} />
            <ProgressBar title={"StoryBook"} width={"75%"} text={"75%"} />
            <ProgressBar title={"Jest"} width={"85%"} text={"85%"} />
            <ProgressBar title={"Cypress"} width={"80%"} text={"80%"} />
          </div>
        </InnerLayout>
      </MainLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section``;
export default Skills;
