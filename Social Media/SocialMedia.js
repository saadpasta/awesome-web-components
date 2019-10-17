import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href="#" class="icon-button github">
        <i class="fa fa-github"></i>
        <span></span>
      </a>
      <a href="#" class="icon-button linkedin">
        <i class="fa fa-linkedin"></i>
        <span></span>
      </a>
      <a href="#" class="icon-button google">
        <i class="fa fa-google"></i>
        <span></span>
      </a>
      <a href="#" class="icon-button gitlab">
        <i class="fa fa-gitlab"></i>
        <span></span>
      </a>
      <a href="#" class="icon-button facebook">
        <i class="fa fa-facebook"></i>
        <span></span>
      </a>
      <a href="#" class="icon-button twitter">
        <i class="fa fa-twitter"></i>
        <span></span>
      </a>
    </div>
  );
}
