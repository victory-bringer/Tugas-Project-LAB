import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Me = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={"me-wrapper"}>
      <p>Hi, my name is {user.name}</p>
      <p>You can contact me through {user.email}</p>
    </div>
  );
};

export default Me;
