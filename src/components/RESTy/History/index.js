import React, { useContext } from 'react';
import { RESTyContext } from '../../../context/RESTyContext';

export default function History() {
  const context = useContext(RESTyContext);
  return (
    <>
      <h2>History</h2>
    </>
  );
}
