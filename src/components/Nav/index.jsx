import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userData from "../userdata/index";
import "./nav.scss";

function NavComponent(props) {
  return userData.map((user) => {
    if (user.id === 13) {
      let userName = `${user.first_name} ${user.last_name.charAt(0)}.`;
      return (
        <header className="nav">
          <div className="profile">
            <img
              src={user.avatar}
              alt="profile-image"
              className="profile__img"
            />
            <div className="profile__detail">
              <p className="profile__intro">Good Morning!</p>
              <p className="profile__name">{userName}</p>
            </div>
          </div>
          <div className="search">
            <input type="text" className="search__input" />
            <button className="search__icon">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_53)">
                  <path
                    d="M13.125 13.125L10.3212 10.3163M11.875 6.5625C11.875 7.97146 11.3153 9.32272 10.319 10.319C9.32272 11.3153 7.97146 11.875 6.5625 11.875C5.15354 11.875 3.80228 11.3153 2.806 10.319C1.80971 9.32272 1.25 7.97146 1.25 6.5625C1.25 5.15354 1.80971 3.80228 2.806 2.806C3.80228 1.80971 5.15354 1.25 6.5625 1.25C7.97146 1.25 9.32272 1.80971 10.319 2.806C11.3153 3.80228 11.875 5.15354 11.875 6.5625V6.5625Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_53">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </header>
      );
    }
  });
}

export default NavComponent;
