import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="box1 text-center">

      <div className="p-4 mt-3 text-center">
        <h2>Hello Welcome </h2><br />
       <h3> {user && user.email}</h3>
      </div>
      <div className="d-grid text-center gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
    </>
  );
};

export default Home;
