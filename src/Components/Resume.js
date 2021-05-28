import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

function Resume() {
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className="small-title">
        <SmallTitle icon={school} title={"Education"} />

        </div>
        <div className="resume-content">
          <ResumeItem year={"2021 - 2021"} title={"Diploma in Web Development"}
          subTitle={"Lighthouse Labs"}
          // text={"ssssfdsffsfsfs"}
          />
        </div>
        <ResumeItem year={"2013 - 2015"} title={"Post-Graduate in Hospitality Management"}
          subTitle={"Lambton College"}
          // text={"ssssfdsffsfsfs"}
          />
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
.small-title{
  padding-bottom: 3rem;
}
.resume-content{
  border-left:  2px solid var(--border-color);
}
`;
export default Resume;
