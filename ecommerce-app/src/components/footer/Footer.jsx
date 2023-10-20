import React from 'react';

function Footer() {
  return (
    <div className="Footer h-1/4 bg-black text-white flex justify-center items-center flex-col gap-4">
      <div className="Footer-Policy flex gap-8">
        <span>Privacy Policy</span>
        <span>TERMS & CONDITIONS</span>
        <span>TERMS OF USE</span>
      </div>
      <div className="flex gap-4 text-xs">
        <span>© 2023 | Cricket weapon, All Rights Reserved.</span>
        <span>|Built by @Chirag</span>
      </div>
    </div>
  );
}

export default Footer;
