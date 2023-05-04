import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/home">HOME</Link>
      <>----------------------</>
      <Link to="/create">Form</Link>
    </div>
  );
}
