import React, { Component } from 'react';
import NavBar from './NavBar';
import { CenteredBody, Title, TextBody } from './styles/about';

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languages: this.props.languages
    }
  }

  translate(lang) {
    let translation = (
      <CenteredBody>
        <Title>
          <div className='title'>Company Name:</div> <span> Cerphy Inc.</span>
        </Title>
        <Title>
          <div className='title'>Address:</div>
      <span> Room 1407, Tower G1. No. 1800, Yizhou Avenue, Chengdu, Sichuan. P.R. China 610041</span>
        </Title>
        <Title style={{ color: 'red' }}><div className='title'>Overview</div></Title>
        <TextBody>
          {
            `CerPhy‘s founders have more than 60 years of combined experience 
        in Analog and Mixed-signal IC design and product development, with 
        specialty in low power and high-speed transceiver products in the USA. 
        The founders have spent 4 years using their own funds to study and 
        research high speed, low power backplane Transceiver SerDes IPs 
        technology. They came up with an innovative architecture containing all 
        Digital PLL, CDR, and robust circuit blocks.`
          }
          <br /><br />
          {
            `Based on market demand, 
        CerPhy utilizes its SerDes technology knowledge foundation to release 
        compliant IPs:  PCIE PHY and GB-Ethernet PHY.`
          }
        </TextBody>
      </CenteredBody>
    );
    if (lang === this.state.languages.chi) {
      translation = (
        <CenteredBody>
          <Title>
            <div className='title'>公司名称:</div> <span> 成都上飞奇道科技有限公司 (简称:上飞科技)</span>
          </Title>
          <Title>
            <div style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'flex-start'
            }}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                fontSize: '2.5rem',
                padding: '0rem',
                fontWeight: '500',
                color: 'red'
              }}>地址: 
              </div>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                padding: '0rem',
                fontSize: '1.75rem',
                top: '0.75rem',
                left: '1rem'
              }}>
              中国四川省成都市高新区益州大道中段1800号 G1栋1407室 <br />邮编:610041
              </div>
            </div>
          </Title>
          <Title><div className='title'>概观</div></Title>
          <TextBody chi={true}>
            上飞科技的创始人在模拟和混合信号IC设计和产品开发领域拥有结合60多年在美国的丰
          富经验，专长于低功耗和高速收发器产品。 他们花了4年时间利用自己的资金研究高速，
          低功耗背板收发器, 串解串(SerDes) 知识产权(IP)技术。 他们想出了一个创新的架构，
          包含全数字化的锁相环 (PLL)，时钟数据恢复(CDR)的创新架构，和其强大,结实的电路块。
          基于市场需求，CerPhy利用其SerDes技术知识基础发布兼容IPs：PCIE PHY 和 GB-Ethernet
          PHY。
          </TextBody>
        </CenteredBody>
      );
    }
    return translation;
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        {
          this.translate(this.props.lang)
        }
      </div>
    );
  }
}