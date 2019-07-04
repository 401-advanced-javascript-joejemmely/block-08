/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import RESTyContextProvider from '../../context/RESTyContext';
import History from './History';
import Form from './Form';
import Json from './Json';

export default function RESTy(props) {
  return (
    <RESTyContextProvider>
      <main
        css={css`
          display: flex;
          flex-grow: 1;
          margin: 1em;
        `}
      >
        <aside
          css={css`
            width: 25%;
            margin-right: 1em;
          `}
        >
          <History />
        </aside>
        <section
          css={css`
            display: flex;
            flex-flow: column nowrap;
            flex: 1 1;
          `}
        >
          <Form />
          <Json />
        </section>
      </main>
    </RESTyContextProvider>
  );
}
