import React from "react";

const SuperHost = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default SuperHost;
