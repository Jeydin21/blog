import React from 'react';

const Border = ({ children }) => {
  const style = {
    borderBottom: '1px solid red',
    padding: '10px',
  };

  return <div style={style}>{children}</div>;
};

export default Border;