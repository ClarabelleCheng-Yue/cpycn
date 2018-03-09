import * as React from 'react';
import styled from 'styled-components';

const LangSwitch = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  font-family: Verdana;
  font-size: 2em;
  color: grey;
  left: 80%;
  z-index: 15;

  button {
    font-size: 1.5rem;
  }
`;

export default class LanguageSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('event: ', e, 'target', e.target.innerHTML, 'value: ', e.value);
    const { lang, changeLang } = this.props;
    const selectedLanguage = e.target.innerHTML;
    if (selectedLanguage === '中文' && lang !== 'chinese') {
      changeLang('chinese');
    } else if (selectedLanguage === 'English' && lang !== 'english') {
      changeLang('english');
    }
  }

  render() {
    return (
      <LangSwitch>
        {
          ['中文', 'English'].map(
            (lang, i) => <button key={i} onClick={this.handleClick}>{ lang }</button>
          )
        }
      </LangSwitch>
    );
  }
}