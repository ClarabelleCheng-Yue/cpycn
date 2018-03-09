import React, { Component } from 'react';
import NavBar from './NavBar';
import { CenteredBody, Title, TextBody } from './styles/about';

export default class Contact extends Component {

  translate(lang) {
    let translation = (
      <Title>
        Contact
        <div>
          <span style={{fontWeight: '500'}}>Mailing Address:</span>
          <span className='sub-title' style={{ fontWeight:'normal', fontSize: '1.5rem' }}> Room 1407, Tower G1. No. 1800, Yizhou Avenue, Chengdu, Sichuan. P.R. China 610041</span>
        </div>
        <div>
          <span style={{ fontWeight: '500' }}>Email:</span> lcheng@cerphy.com.cn<br />
          <span style={{ fontWeight: '500' }}>Cell:</span> 13072863779 // 408-234-3758
        </div>
      </Title>
    );
    if (lang === 'chinese') {
      translation = (
        <Title>
          <div style={{ position: 'relative', display: 'block', fontSize: '3rem' }}>联系</div>
          <div style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'baseline'
          }}>
            <div style={{
              position: 'relative',
              display: 'inline-block',
              fontSize: '2rem',
              padding: '0rem',
              fontWeight: 'bold'
            }}><div/>地址:</div><div style={{
              position: 'relative',
              display: 'inline-block',
              padding: '0rem',
              fontSize: '2rem',
              left: '1rem'
            }}>中国四川省成都市高新区益州大道中段1800号 G1栋1407室 <br />邮编:610041</div>
          </div>
          <div style={{fontSize: '2rem'}}>
            <span style={{
              fontWeight: 'bold'
            }}>电子邮件:</span> lcheng@cerphy.com.cn<br />
            <span style={{
              fontWeight: 'bold'
            }}>手机:</span> 13072863779
          </div>
        </Title>
      );
    }
    return <CenteredBody>{translation}</CenteredBody>;
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

/**
 * Contact


 */