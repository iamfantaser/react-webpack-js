import React from "react";
import { Typography } from "antd";


interface ExternalLinkProps {
  to: string,
  target?: undefined | "_blank" | "_self" | "_parent" | "_top",
  children?: React.ReactNode,
}

const ExternalLink: React.FC<React.PropsWithChildren<ExternalLinkProps>> = (props) => {
  return (
    <>
      <Typography.Link href={props.to} target={props.target} rel="noopener noreferrer">
        {props.children}
      </Typography.Link>
    </>
    );
}

export default ExternalLink;