import React, { Component } from 'react';
import NavBar from './NavBar';
import { CenteredBody, Title, TextBody } from './styles/about';

export default class Careers extends Component {

  translate(lang) {
    let translation = (
      <CenteredBody>
        <Title>
          <div className='title'>Careers</div>
            <br />
          <span> CerPhy focuses in high speed low power SerDes IPs and IC related product developments. We provide competitive salary, good benefits, and stock options to all our employees and new hires. </span>
        </Title>
        <Title>
          <div className='title'>Openings</div>
            <br />
          <span className='sub-title blue'> I. Circuit Design Position</span>
          <ul className='points eng'>
            <li>Willing relocate to work in Chengdu</li>
            <li>Require MSEE with 4 to 5 Yrs.  of work experience in Analog and Mixed signal circuit design back ground, PHDEE is preferred.</li>
            <li>Familiar IC chip design flow, EDA tools, understand the IC block’s specifications, use Analog and Mixed signal circuit design knowledge technique to implement an Integrated Circuit blocks included the design, simulations, post layout simulations.</li>
            <li>Have experience in writing Verilog A models and use Cadence design environment to verify the model’s functions and timings.</li>
            <li>Guide layout engineers to have an optimum layout block, take care of the analog circuit matching, symmetrical and critical paths to completely release the IC block to tap-out.</li>
            <li>Understand the AMS design flow. Perform the Mixed mode simulations and verifications.</li>
            <li>Guide PCB designers, know how to perform the lab set-up and test IC designed blocks, and completely verify their performance and characterization.</li>
            <li>Serious and responsible work, good communication skills and team spirit</li>
          </ul>
          <span className='sub-title blue'> II. Layout IC Design Position</span>
          <ul className='points eng'>
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
    );

    if (lang === this.props.languages.chi) {
      translation = (
        <CenteredBody>
        <Title>
          <div className='title'>职业招聘</div>
            <br />
          <span className='chi'>上飞科技焦点专注于高速低功耗的SerDes IPs和有相关的集成芯片,IC,产品开发。我们提供有竞争力的薪酬，良好的福利和股票期权给我们所有的员工和新员工。</span>
        </Title>
        <Title>
          <div className='title'>招聘职位</div>
            <br />
          <span className='sub-title chi blue'> I. 模拟IC设计工程师</span>
          <ol className='points chi'>
            <div>职位描述</div>
            <li>愿意移居到成都工作</li>
            <li>参与模拟IC规格制定，负责电路设计和仿真，编写电路设计文档与仿真文档.</li>
            <li>熟悉芯片的设计流程，可以独立地、较完善地完成模块的设计和验证工作，并确保输出可以达到芯片设计的整合要求。</li>
            <li>有编写Verilog A模型和使用Cadence设计环境来验证模型的功能和时序的经验。</li>
            <li>了解AMS设计流程。执行混合模式的模拟和验证。</li>
            <li>指导版图设计工程师完成模拟电路版图设计。</li>
            <li>协助测试工程师制定测试方案，完成芯片测试。</li>
          </ol>
          <ol className='points chi'>
            <div>职位要求</div>
            <li>微电子、电子工程硕士学位, 有4至5年以上在模拟和混合信号IC电路设计工作经验，优先给电子工程博士学位。</li>
            <li>熟练模拟IC设计流程EDA工具 (Cadence IC design Tools) 和VerilogA编码。</li>
            <li>有AMS设计流程经验, 执行混合模式的模拟和验证。</li>
            <li>有高速数据接口, PLL, 高速低功耗接收器和传送器, 等设计开发经验者优先。</li>
            <li>具有良好的英语读写能力。</li>
          </ol>
          <span className='sub-title chi blue'> II. 版图设计工程师</span>
          <ol className='points chi'>
            <div>职责描述</div>
            <li>愿意移居到成都工作</li>
            <li>熟练掌握版图设计、验证和交付的全部流程工作，有多次成功流片的经验。</li>
            <li>熟悉各个代工厂提供的工艺参数以及设计规则, 能够根据需要修改foundry工艺文件，能够使用Perl语言等编制应用相关的脚本文件。</li>
            <li>具备半导体器件和工艺的知识，掌握基本电路的工作原理,设计关键点，保证质量并完成相应工作，做好Floorplan。</li>
            <li>根据电路设计工程师的要求进行版图设计工作，包括验证DRC, LVS, ERC, Metal Densities 等。</li>
            <li>有高速SerDes（5 Gbps以上）和，锁相环电路布局的经验</li>
            <li>认真填写版图输出数据及表格，并备份好制版数据。</li>
            <li>优先具有信息技术 (IT), 关注公司各方面的管理和处理信息，计算机，存储，网络，邮件和其他物理设备，安全和交换各种形式的电子数据.</li>
          </ol>
          <ol className='points chi'>
            <div>职位要求</div>
            <li>微电子相关专业，大专以上学历。</li>
            <li>3-4年以上版图设计经验，能独立完成整个CHIP的绘制。有深压微米: 55nm, 28nm版图设计经验者优先。</li>
            <li>熟练掌握主流后端工具（cadence）等EDA设计工具</li>
            <li>熟悉集成电路工艺制造相关知识及流程，具备一定的半导体理论。</li>
            <li>熟悉模拟电路设计要点基本工作原理知识：匹配，屏蔽，互连，金属宽度，寄生，延迟，Latch-up以及ESD保护. 保证质量，良好的IP布局平面图。</li>
            <li>有高速SerDes（5 Gbps以上）和，锁相环电路布局的经验</li>
            <li>优先具有信息技术 (IT) 经验</li>
            <li>具有团队协作精神和良好的沟通能力，工作积极主动，有高度的责任感。</li>
          </ol>
        </Title>
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