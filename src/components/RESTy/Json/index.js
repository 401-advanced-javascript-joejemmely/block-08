/** @jsx jsx */
import React, { useContext } from 'react';
import { RESTyContext } from '../../../context/RESTyContext';
import { jsx, css } from '@emotion/core';

import ReactJson from 'react-json-view';

export default function Json() {
  const context = useContext(RESTyContext);
  return (
    <div
      css={css`
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        display: flex;
        flex-flow: column nowrap;
        padding: 1em;
        overflow: scroll;
        flex-grow: 1;
      `}
    >
      <ReactJson
        src={context.state.response ? context.state.response.header : {}}
        name={'Headers'}
        enableClipboard={false}
      />
      <ReactJson
        src={context.state.response ? context.state.response.body : {}}
        name={'Response'}
        enableClipboard={false}
      />
    </div>
  );
}
