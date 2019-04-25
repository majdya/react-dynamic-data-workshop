import React from "react";

const Header = ({ name, bio, avatarUrl }) => {
  return (
    <div className="header">
      <div>
        <img src={avatarUrl} alt="" className="avatar" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h3>{bio}</h3>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <a href="linkedin.com/majdya">LinkedIn</a>
        <br />
        <a href="github.com/majdya">GitHub</a>
      </div>
    </div>
  );
};

export default Header;
