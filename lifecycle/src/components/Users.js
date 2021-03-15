// This will render the individual user cards.

import React, { Component } from "react";
import axios from "../Github";
import User from "./User";

export default class Users extends Component {
  state = {
    users: [],
    followers: [],
    getFollowers: false,
    userName: "",
  };

  componentDidMount() {
    const githubUsers = [
      "tonysorensen",
      "LoganSorensen",
      "LukeSmithxyz",
      "dylanaraps",
    ];
    githubUsers.forEach((user) => {
      let newName = user;
      axios.get(`https://api.github.com/users/${newName}`).then((response) => {
        // console.log("users response", response);
        this.setState({
          users: [
            ...this.state.users,
            {
              name: response.data.name,
              avatar: response.data.avatar_url,
              login: response.data.login,
              location: response.data.location,
              link: response.data.html_url,
              bio: response.data.bio,
            },
          ],
        });
      });
    }, []);
  }

  componentDidUpdate() {
    if (this.state.getFollowers) {
      this.setState({
        getFollowers: false,
      });
      axios
        .get(`https://api.github.com/users/${this.state.userName}/followers`)
        .then((response) => {
          console.log("followers response", response.data);
          this.setState({ followers: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      getFollowers: true,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="search">
          <h3 className="searchTitle">
            See who follows your favorite Github User:
          </h3>
          <input
            value={this.state.login}
            onChange={this.handleChange}
            placeholder="Enter Github UserName"
          />
          <button onClick={this.onSubmit}>See Followers</button>
          <div className="followers">
            {this.state.followers.map((item, index) => (
              <div className="followerCard" key={index}>
                <p>{item.login}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="users">
          <User users={this.state.users} />
        </div>
      </div>
    );
  }
}
