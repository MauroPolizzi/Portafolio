"use client"
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from "next/image";

// Importa el SVG del logo de C#
import CSharpLogo from '../../../../../assets/images/icons/csharp.webp';

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  scale: 0.7;
  position: absolute;
  bottom:-20%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${rotateAnimation} 20s ease-in-out infinite;
  @media screen and (max-width: 1600px) {
    bottom: 10%;
    left: 10%;
    scale: 0.5;
  }
  @media screen and (max-width: 1279px) {
    bottom: -10%;
    left: 5%;
    scale: 0.5;
  }
  @media screen and (max-width: 1023px) {
    bottom: 28%;
    left: 5%;
    scale: 0.5;
  }
  @media screen and (max-width: 990px) {
    bottom: 0%;
    left: 0%;
    scale: 0.5;
  }
  @media screen and (max-width: 875px) {
    display: none
  }
`;

const CSharpIcon = () => {
  return (
    <Wrapper>
      <Image src={CSharpLogo} alt="C Sharp Logo"  height={150}/>
    </Wrapper>
  );
};

export default CSharpIcon;
