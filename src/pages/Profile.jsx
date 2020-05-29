import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import Post from "../components/Post";

const Profile = () => {
  const [user, setUser] = useState();
  const [userEdit, setUserEdit] = useState({
    username: "",
    description: ""
  });

  useEffect(() => {
    fetch("https://api-minireseausocial.mathis-dyk.fr/users/me", {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        setUser(response);
      });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserEdit(userEdit => ({
      ...userEdit,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchModif(userEdit);
  };

  const fetchModif = userEdit => {
    fetch(`https://api-minireseausocial.mathis-dyk.fr/users/${user.id}`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userEdit)
    })
      .then(response => response.json())
      .then(response => {
        setUser(response);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="profile">
      <h1>My profile</h1>
      {user ? (
        <>
          <div className="information">
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.description}</p>
          </div>
          <h4>Modify my profile : </h4>
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={userEdit.username}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="description"
              name="description"
              value={userEdit.description}
              onChange={handleChange}
            />
            <input type="submit" />
          </form>
          <h2>My posts</h2>
          <Post
            url={`https://api-minireseausocial.mathis-dyk.fr/posts?user.id=${user.id}&_sort=created_at:desc`}
          />
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Profile;
