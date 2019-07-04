import React, { useReducer } from 'react';

export const RESTyContext = React.createContext();

const initialState = {};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'change':
      return { ...state, ...payload };
    case 'submit':
      return { ...state, response: payload.response };
    default:
      throw new Error('action not supported');
  }
};

export default function RESTyContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <RESTyContext.Provider value={{ state, dispatch }} {...props} />;
}
