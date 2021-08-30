import React from "react";

interface GenericFormStatusMessageProps {
  color: string;
}

const GenericFormStatusMessage: React.FC<GenericFormStatusMessageProps> = ({
  color,
  children,
}) => {
  return <small style={{ color: color }}>{children}</small>;
};

export default GenericFormStatusMessage;
