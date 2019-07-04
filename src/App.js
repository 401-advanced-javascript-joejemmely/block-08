/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

import Footer from './components/styles/Footer';
import Header from './components/styles/Header';
import RESTy from './components/RESTy';
import reset from './lib/reset.css';

function App() {
  return (
    <div
      css={css`
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
      `}
    >
      <Global
        styles={css`
          ${reset}
          html {
            height: 100%;
          }

          body {
            background: #eee;
            height: 100%;
            flex-direction: column;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          }

          #root {
            height: 100%;
          }

          h2 {
            font-weight: 700;
            margin-bottom: 0.5em;
          }
        `}
      />
      <Header>
        <h1>RESTy</h1>
      </Header>
      <RESTy />
      <Footer>
        <p>©2019 Code Fellows</p>
      </Footer>
    </div>
  );
}

export default App;
