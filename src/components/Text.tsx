import React from "react";

type Props = {
  children: JSX.Element | string;
};

const Text: React.FC<Props> = ({ children }) => {
  return <div style={{ backgroundColor: "red" }}>{children}</div>;
};

export default Text;
