import React from "react";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerDiv'>
        <p className='copyright'>
          {" "}
          &copy; <span className='year'></span>{" "}
          <a href='#aboutme'>Seun Ogundele</a> <br /> All Rights Reserved
        </p>
        <p
          className='designer'
          href='https://scriptsandtags.com'
          rel='noopener'
          target='blank'
          aria-hidden='true'
        >
          <a href='www.scriptsandtags.com' className='designerp'>
            Design by scriptsandtags
          </a>
        </p>
      </div>
    </div>
  );
}
