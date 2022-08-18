import React from "react";
import avatarImg from "../../assets/images/avatar.jpg";
import css from "./Avatar.module.scss";


function Avatar() {

  return (
    <svg 
     className={css.svg}
     version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
    x="0px" y="0px"
	width="47px" height="47px" viewBox="0 0 47 47"
     >
    <defs>
        <pattern id="img1" patternUnits="userSpaceOnUse" width="600" height="450">
            <image href={avatarImg} x="0" y="0"
                width="47" height="47" />
        </pattern>
    </defs>
    <path d="M23,0,44.874299874788534,15.89260912937621,36.519060802726884,41.60739087062379,9.48093919727312,41.60739087062379,1.1257001252114698,15.892609129376202Z"
          fill="url(#img1)" />
        
</svg>
  );
}

export default Avatar;
