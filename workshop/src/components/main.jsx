import React, { Component } from "react";

class Main extends Component {
  state = {
    error: null,
    isLoaded: false,
    repos: {}
  };

  componentDidMount() {
    console.log("HERE");

    console.log("2 fetch", this.props.reposUrl);
    fetch(this.props.reposUrl)
      .then(res => res.json())
      .then(result => {
        this.setState({ isLoaded: true, repos: result });
      });
    // this.setState({ repos });
  }

  render() {
    console.log("here 1");
    console.log(this.state);

    if (!this.state.isLoaded) return <p>Loading</p>;
    else
      return (
        <div className="main">
          {this.state.repos.map(r => (
            <div className="repo" key={r.name}>
              <h3>{r.name}</h3>
              <a href={r.html_url}>Github repo</a>
              <p>{r.descreption}</p>
              <p>{r.stargazers_count}</p>
            </div>
          ))}
        </div>
      );
  }
}

export default Main;
