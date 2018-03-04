import React, { Component } from 'react';
import NavBar from './NavBar';
import { CenteredBody, Title, TextBody } from './styles/about';

export default class Careers extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CenteredBody>
          <Title>
            Careers
            <br/>
            <span> CerPhy focuses in high speed low power SerDes IPs and IC related product developments. We provide competitive salary, good benefits, and stock options to all our employees and new hires. </span>
          </Title>
          <Title>
            Openings
            <br/>
            <span className='sub-title'> I. Circuit Design Position</span>
            <ul className='points'>
              <li>Willing relocate to work in Chengdu</li>
              <li>Require MSEE with 4 to 5 Yrs.  of work experience in Analog and Mixed signal circuit design back ground, PHDEE is preferred.</li>
              <li>Familiar IC chip design flow, EDA tools, understand the IC block’s specifications, use Analog and Mixed signal circuit design knowledge technique to implement an Integrated Circuit blocks included the design, simulations, post layout simulations.</li>
              <li>Have experience in writing Verilog A models and use Cadence design environment to verify the model’s functions and timings.</li>
              <li>Guide layout engineers to have an optimum layout block, take care of the analog circuit matching, symmetrical and critical paths to completely release the IC block to tap-out.</li>
              <li>Understand the AMS design flow. Perform the Mixed mode simulations and verifications.</li>
              <li>Guide the PCB design, know how to perform the lab set-up and test the IC designed block related to completely have the IC block tested, verified its performance and characterization.</li>
              <li>Serious and responsible work, good communication skills and team spirit</li>
            </ul>
            <span className='sub-title'> II. Layout IC Design Position</span>
            <ul className='points'>
              <li>Willing relocate to work in Chengdu</li>
              <li>Require 4 to 5 Yrs.  of Microelectronics related professional, college education.</li>
              <li>Require work experience in 55nm, 28nm geometries is plus with number of successful tape-outs </li>
              <li>Have knowledge in Perl Language able to write script files for various layouts applications, such as: modify the foundry process documents.</li>
              <li>Familiar with the various foundries supplied parameters and design rules</li>
              <li>Have knowledge of semiconductor device and process knowledge with some semiconductor theory.</li>
              <li>Have knowledge of basic working principle of Analog circuit design key points: matching, shielding, Interconnects, metal widths, parasitic, latency, latch-up and ESD protections to ensure quality, good floorplan and working IPs </li>
              <li>Master the design/layout verification flow in blocks and in chip level including verification DRC, LVS, ERC, Metal Densities and the like.</li>
              <li>Master in after tape-out layout forms and backup files release, such as release layout output data forms to foundry and data backup to server.</li>
              <li>Preferred who has master in information technology (IT), focus on all aspects of the company's management and processing of information, computer, storage, networking, e-mail, and other physical devices, security and various forms of electronic data exchange.</li>
              <li>Have the spirit of teamwork and good communication skills, proactive, with a high sense of responsibility.</li>
            </ul>
          </Title>
        </CenteredBody>
      </div>
    );
  }
}