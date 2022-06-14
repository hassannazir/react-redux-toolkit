import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const User = () => {
  const userDetail = useSelector((state) => state.user);
  console.log("----", userDetail);
  const dispatch = useDispatch();
  const userHandler = () => {
    dispatch(fetchUsers());
  };
  //onClick always needs a function, it calls itself that func. thats y we used with out ()
  return (
    <>
      <h2>Users</h2>
      <button onClick={userHandler}>Get Users</button>
      {userDetail.loading ? (
        "Loading...."
      ) : userDetail.users.length ? (
        userDetail.users.map((user) => <p key={user.id}>{user.name}</p>)
      ) : (
        <h3>{userDetail.error}</h3>
      )}
    </>
  );
};

export default User;
