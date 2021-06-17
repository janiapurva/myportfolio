import React from "react";
import styled from "styled-components";
import { InnerLayout} from "../styles/Layout";
import Title from "./Title";
import ProgressBar from "../Components/ProgressBar";
function Skills() {
  return (
    <SkillsStyled>
      
        <Title title={"My Skills"} span={"My Skills"} />
        <InnerLayout>
          <div className="skills">
            <ProgressBar title={"JAVASCRIPT"} width={"90%"} text={"90%"} />
            <ProgressBar title={"JAVA"} width={"75%"} text={"75%"} />
            <ProgressBar title={"TYPESCRIPT"} width={"70%"} text={"70%"} />
            <ProgressBar title={"NODE JS"} width={"85%"} text={"85%"} />
            <ProgressBar title={"REACT JS"} width={"85%"} text={"85%"} />
            <ProgressBar title={"REDUX"} width={"80%"} text={"80%"} />
            <ProgressBar title={"EXPRESS JS"} width={"80%"} text={"80%"} />
            <ProgressBar title={"SPRINGBOOT"} width={"75%"} text={"75%"} />
            <ProgressBar title={"POSTGRESQL"} width={"80%"} text={"80%"} />
            <ProgressBar title={"RUBY ON RAILS"} width={"70%"} text={"70%"} />
            <ProgressBar title={"JQUERY"} width={"75%"} text={"75%"} />
            <ProgressBar
              title={"STYLED-COMPONENTS"}
              width={"80%"}
              text={"80%"}
            />
            <ProgressBar title={"SCSS"} width={"75%"} text={"75%"} />
            <ProgressBar title={"HTML5"} width={"80%"} text={"80%"} />
            <ProgressBar title={"CSS"} width={"80%"} text={"80%"} />
            <ProgressBar title={"CHAI"} width={"80%"} text={"80%"} />
            <ProgressBar title={"MOCHA"} width={"85%"} text={"85%"} />
            <ProgressBar title={"STORYBOOK"} width={"75%"} text={"75%"} />
            <ProgressBar title={"JEST"} width={"85%"} text={"85%"} />
            <ProgressBar title={"CYPRESS"} width={"80%"} text={"80%"} />
          </div>
        </InnerLayout>
  
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns:repeat(2 ,1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px){
      grid-template-columns:repeat(1 ,1fr);

    }
  }
`;
export default Skills;
