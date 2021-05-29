import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ResumeItem from "./ResumeItem";

function Resume() {
  const school = <SchoolIcon />;
  const briefCase = <BusinessCenterIcon/>
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
          <div className="u-margin-bottom">
          <ResumeItem year={"2013 - 2015"} title={"Post-Graduate in Hospitality Management"}
          subTitle={"Lambton College"}
          // text={"ssssfdsffsfsfs"}
          />

          </div>
          
        </div>
        <div className="small-title">
        <SmallTitle icon={briefCase} title={"Working Experience"} />

        </div>
        <div className="resume-content">
          <ResumeItem year={"2017 - Present"} title={"Lead Front Desk Agent"}
          subTitle={"Hilton Garden Inn Toronto"}
          // text={"ssssfdsffsfsfs"}
          /> 
           <ResumeItem year={"2016 - 2017"} title={"Housekeeping Supervisor"}
          subTitle={"Hilton Garden Inn Toronto"}
          // text={"ssssfdsffsfsfs"}
          />

        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
.small-title{
  padding-bottom: 3rem;
}
.resume-content{
  border-left:  2px  solid var(--border-color);
  
}
`;
export default Resume;
