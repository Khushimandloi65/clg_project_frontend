import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../../routes/constant";
import { Box, Typography } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(HOME_PAGE);
  };

  return (
    <Box padding={4}>
      {" "}
      <Typography
        color="#373737"
        sx={{
          fontSize: "24px",
        }}
        fontWeight="bold"
        onClick={() => handleHome()}
      >
        Jawaharlal Institute Of Technology Borawan
      </Typography>
    </Box>
  );
}

export default Header;
