import React from "react";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = ({}) => {
  return <div className="lds-dual-ring"></div>;
};

export default Loader;
