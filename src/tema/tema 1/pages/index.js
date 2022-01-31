import React from 'react';
import UtamaTema1 from './UtamaTema1';
import Profile from './Profile';
import Akad from './Akad';
import styled from 'styled-components';
import { Bingkai } from '../assets/images';
import Galeri from './Galeri';
import Music from '../components/Music'
import Lagu from '../assets/music/denny.mp3'
import LiveStream from './LiveStream';
import Amplop from './Amplop';
import FormUcapan from './FormUcapan';
import Navbar from '../components/Navbar';

const Background = styled.div`
  background-image: url(${Bingkai});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const index = () => {
  return (
      <Background>
          <Navbar/>
          <Music url={Lagu} />
          <UtamaTema1 id="home" />
          <Profile id="profile"/>
          <Akad/>
          <Galeri id="galeri"/>
          <LiveStream/>
          <Amplop/>
          <FormUcapan id="ucapan"/>
      </Background>
  );
};

export default index;
