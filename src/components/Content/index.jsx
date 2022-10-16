import React from "react";
import { useEffect } from "react";
import "./content.scss";

function ContentComponent({ showData }) {
  return (
    <div className="messenger">
      {showData?.map((user) => {
        if (user.id !== 13) {
          return (
            <div className="messenger__box" key={user.id}>
              <img
                src={user.avatar}
                alt="user-image"
                className="messenger__img"
              />
              <div className="messenger__details">
                <p className="messenger__username">
                  {user.first_name} {user.last_name}
                </p>
                <p className="messenger__demo">New Message!</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ContentComponent;
