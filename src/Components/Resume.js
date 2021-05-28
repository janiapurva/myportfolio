import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import SmallTitle from './SmallTitle'
import Title from './Title'
import SchoolIcon from '@material-ui/icons/School';

function Resume() {
  const school = <SchoolIcon/>
  return (
  
      <ResumeStyled>
        <Title title={"Resume"} span={"Resume"}/>
        <InnerLayout>
<SmallTitle icon={school} title ={"Education"}/>
        </InnerLayout>
      </ResumeStyled>
    
  )
}

const ResumeStyled = styled.section`

`;
export default Resume
