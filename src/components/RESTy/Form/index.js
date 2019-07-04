/** @jsx jsx */
import React, { useContext } from 'react';
import { css, jsx } from '@emotion/core';
import superagent from 'superagent';

import { RESTyContext } from '../../../context/RESTyContext';

export default function Form() {
  const { state, dispatch } = useContext(RESTyContext);

  function handleChange(event) {
    dispatch({
      type: 'change',
      payload: { [event.target.name]: event.target.value }
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let response;

    switch (state.method) {
      case 'get':
        response = await superagent.get(state.URL);
        break;
      case 'post':
        response = await superagent
          .post(state.URL)
          .send(JSON.parse(state.requestBody.replace(/\s+/g, '')));
        break;
      case 'put':
        response = await superagent
          .put(state.URL)
          .send(JSON.parse(state.requestBody.replace(/\s+/g, '')));
        break;
      case 'patch':
        response = await superagent
          .patch(state.URL)
          .send(JSON.parse(state.requestBody.replace(/\s+/g, '')));
        break;
      case 'delete':
        response = await superagent.delete(state.URL);
        break;
      default:
        console.log('action not supported');
    }

    dispatch({ type: 'submit', payload: { response } });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <input
            type="text"
            placeholder="URL"
            name="URL"
            value={state.url}
            onChange={handleChange}
            css={css`
              width: 100%;
            `}
          />
          <div
            id="methods"
            css={css`
              display: flex;
              flex-flow: row nowrap;
              justify-content: left;
              margin: 1em 0;

              label {
                cursor: pointer;
                margin-right: 1em;
                @media (max-width: 420px) {
                  font-size: 0.5;
                  margin: 0;
                }

                span {
                  padding: 0.25em 1em;
                  &:hover {
                    background: #ddd;
                  }
                }
                input {
                  display: none;

                  &[type='radio']:checked + span {
                    background: #2d5986;
                    color: #eee;
                    border: 1px groove #ccc;
                  }
                }
              }
            `}
          >
            <label>
              <input
                type="radio"
                name="method"
                value="get"
                onChange={handleChange}
              />
              <span>GET</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="post"
                onChange={handleChange}
              />
              <span>POST</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="put"
                onChange={handleChange}
              />
              <span>PUT</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="patch"
                onChange={handleChange}
              />
              <span>PATCH</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="delete"
                onChange={handleChange}
              />
              <span>DELETE</span>
            </label>
            <label>
              <button type="submit">Go!</button>
            </label>
          </div>
        </section>
        <section
          css={css`
            display: flex;
            flex-flow: row nowrap;
            margin: 1em 0;
          `}
        >
          <textarea
            placeholder="Raw JSON Body"
            name="requestBody"
            value={state.requestBody}
            onChange={handleChange}
            disabled={state.method === 'get' || state.method === 'delete'}
            css={css`
              height: 10em;
              flex-grow: 1;
              margin-right: 1em;

              &[disabled] {
                background: #ccc;
              }
            `}
          />
          <div
            css={css`
              display: flex;
              flex-flow: column nowrap;
              flex: 1 1;
            `}
          >
            <button>Headers</button>
            <div>
              <h2>Basic Authorization</h2>
              <input name="authusername" placeholder="Username" />
              <input
                name="authpassword"
                type="authpassword"
                placeholder="Password"
              />
            </div>
            <div>
              <h2>Bearer Token</h2>
              <input type="text" name="authtoken" placeholder="Bearer Token" />
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
