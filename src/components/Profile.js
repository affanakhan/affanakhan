// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { isAuthenticated, logout, loading, user } = useAuth0();
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }



  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {isAuthenticated && (<button onClick={() => logout()}>Log out</button>)}

      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  );
};

export default Profile;