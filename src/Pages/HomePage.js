import React from 'react'
import styled from "styled-components";
import Particle from '../Components/Particles';

function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particle/>
      </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;


`
export default HomePage
