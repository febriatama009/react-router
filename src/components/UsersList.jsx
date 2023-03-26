import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const UsersList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActive = searchParams.get("filter") === "active";
  return (
    <>
      <h3>This is Are users Page</h3>
      <br />
      <h4>Filter Users</h4>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active User
      </button>{" "}
      <button onClick={() => setSearchParams({})}>Clear Filter</button>
      <br /> <br />
      <h4>Below are Users List</h4>
      <span>
        <p>Users - 01</p>
        <p>Users - 02</p>
        <p>Users - 03</p>
        <Outlet />
      </span>
      {showActive ? (
        <h4>Above Are Active Users</h4>
      ) : (
        <h4>Above are All Users</h4>
      )}
    </>
  );
};

export default UsersList;
