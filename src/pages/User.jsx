import React from "react";
import UsersList from "../components/UsersList";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div>
      <UsersList />
      <Outlet />
    </div>
  );
};

export default User;
