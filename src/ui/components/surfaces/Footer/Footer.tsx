import React from 'react';
import Image from 'next/image'
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }} color="white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, temporibus sapiente.
            Fugiat ipsam quia, cumque, dolorem nobis culpa illum quidem alias libero vitae eos
            voluptates fuga asperiores pariatur reiciendis cupiditate.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={"noopener noreferrer"}
              >
                <img
                  src={'./img/logos/app-store.png'}
                  alt={'App Store'}
                />
              </a>
            </li>
            <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={"noopener noreferrer"}
              >
                <img
                  src={'./img/logos/google-play.png'}
                  alt={'Google Play'}
                />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
