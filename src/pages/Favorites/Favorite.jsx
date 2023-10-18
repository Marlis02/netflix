import { Button } from "@mui/material";
import { render } from "@testing-library/react";
import React, { useState } from "react";

const Favorite = () => {
  const { title, setTitle } = useState("");
  const a = localStorage.getItem("title");
  console.log(a);

  const onDelete = () => {
    localStorage.removeItem("title");
    window.location.reload();
  };

  return (
    <div>
      <h3>Favorites</h3>
      <p>{a}</p>
      <Button variant="contained" color="success" onClick={onDelete}>
        delete
      </Button>
    </div>
  );
};

export default Favorite;
