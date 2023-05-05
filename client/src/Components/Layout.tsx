import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Layout;
