import "./profilemenudrop.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";


const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img src
        className="profile-pic dropbtn"
        src={logo}
        alt="profile" 
      />
      <div className="profile-hightlight-dropdown">
        <p> Portfolio Website </p>
        <p> Faizol Ama </p>
        <p> faizollama11@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src={logo}
            alt="profile"
          />
          <p className="detail-text"> Faizol Ama </p>
          <p className="detail-text"> faizollama11@gmail.com </p>
          <a href="https://www.linkedin.com/in/faizol-ama-955a13195/"> View Another Website Design </a>
        </div>
        <Link className="second-detail" to="/about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </Link>
        <div className="third-detail">
          <a href="https://github.com/izolama"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/izolama?tab=repositories"> View code </a> <span> • </span>
          <Link to="/blog"> Open Source </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
