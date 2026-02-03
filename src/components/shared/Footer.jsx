import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-primary/10 p-4 text-primary font-semibold">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Care
          Nest Ltd.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
