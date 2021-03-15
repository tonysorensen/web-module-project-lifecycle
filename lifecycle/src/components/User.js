// Build out the user card here.
import React from "react";

export default function User(props) {
  return (
    <div className="container">
      <div className="user">
        {props.users.map((item, index) => (
          <div className="userCard" key={index}>
            <div className="avatar">
              <img src={item.avatar} alt="Github user avatar" />
            </div>

            <div className="info">
              <h3 className="name">{item.name}</h3>
              <p className="userName">
                <strong>Github Username</strong>: {item.login}
              </p>
              <br />
              <p className="bio">
                <strong>Bio:</strong> {item.bio}
              </p>
              <br />

              <p className="userLocation">
                <strong>Location:</strong> {item.location}
              </p>

              <a href={item.link} className="link">
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

