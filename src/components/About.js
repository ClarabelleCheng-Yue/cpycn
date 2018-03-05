import React, { Component } from 'react';
import NavBar from './NavBar';
import { CenteredBody, Title, TextBody } from './styles/about';

export default class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CenteredBody>
          <Title>
            Company Name:
          <span> Cerphy Inc.</span>
          </Title>
          <Title>
            Address:
          <span> Room 1407, Tower G1. No. 1800, Yizhou Avenue, Chengdu, Sichuan. P.R. China 610041</span>
          </Title>
          <Title>Overview</Title>
          <TextBody>
            CerPhy Inc's founders have combined more than 60 years of Analog and Mixed-signal IC design and product development experience, especially in low power and high-speed transceiver products in the USA. The founders have spent 4 years using their own funds to study and research high speed, low power backplane Transceiver SerDes IPs technology. They came up with an innovative architecture containing all Digital PLL, CDR, and their robust circuit blocks.
We are releasing a compact, high speed, low power consumption ({'<'}5mw/Gbps), high noise immunity, high yield, quick turnaround backplane SerDes IP.
CerPhy’s robust design of the SerDes IPs supports multiple standards and protocols, which simplifies SOC integration for multi-standard applications while also dramatically reducing power consumption, alleviating risk, and providing increased product flexibility.
          </TextBody>
        </CenteredBody>
      </div>
    );
  }
}