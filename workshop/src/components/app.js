import React from "react";
import { accessToken } from "../../token";
import Header from "./header";
import Main from "./main";
import "./header.css";
import "./main.css";

export default class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    user: {}
  };

  componentDidMount() {
    let user = "majdya";
    fetch(`https://api.github.com/users/${user}?access_token=${accessToken}`)
      .then(res => res.json())
      .then(result => {
        this.setState({ isLoaded: true, user: result });
      });
    // this.setState({ user });
  }
  render() {
    const { error, isLoaded, user } = this.state;
    // console.log(user);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header
            avatarUrl={this.state.user.avatar_url}
            name={this.state.user.name}
            bio={this.state.user.bio}
          />
          <hr />
          <Main reposUrl={this.state.user.repos_url} />
        </>
      );
    }
  }
}
