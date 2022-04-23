import { FooterComponent, FooterText } from '../styled_components/footerStyles';
import FooterLinks from './FooterLinks';
import React from 'react';

export default function Footer() {
  return (
    <FooterComponent>
      <FooterLinks />
      <FooterText>
       Redesigned by Prince Charles <a href="https://github.com/prince-hope1975">Github</a>
      </FooterText>
    </FooterComponent>
  );
}
