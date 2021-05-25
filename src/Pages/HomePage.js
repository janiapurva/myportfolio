import React from 'react'
import styled from "styled-components";
import Particle from '../Components/Particles';
import TwitterIcon from '@material-ui/icons/Twitter'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'

function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particle/>
      </div>
      <div className="typography">
      <h1>Hi I am Apurva Jani<span>
        Loream Ipsam</span></h1>
        <p>
          loream 20 dollar sananslkdnfansflanflnannfsfnsalk
        </p>
        <div className="icons">
          <div className="i-twitter"><TwitterIcon/></div>
          <div className="i-github"><GithubIcon/></div>
          <div className="i-linkedin"><LinkedinIcon/></div>

        </div>
    </div>
    </HomePageStyled>
    
  )
}

const HomePageStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;
.p-particles-js{
  position: absolute;
  top:0;
  left: 0;
}


`
export default HomePage
