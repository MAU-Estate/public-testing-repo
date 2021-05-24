import React from "react";

import Footer from "./Footer";

const Layout = ({ children, className = null, location }) => {
  const isHome = location.pathname === "/";
  const pathname = isHome ? "home" : location.pathname.slice(1);
  const cleanedPathname = pathname.replace(/\//i, "");

  return (
    <div className={`overflow-x-hidden page-${cleanedPathname}`}>
      <main className={`${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
