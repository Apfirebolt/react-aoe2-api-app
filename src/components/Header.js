import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Typography from '@mui/material/Typography';

const HeaderComponent = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        bgcolor: "#cfe8fc", 
        height: "auto", 
        padding: "1rem", 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
        }}>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Typography variant="h4" gutterBottom component="div">
        Age of Empires 2 API
      </Typography>
              <Button variant="contained" {...bindTrigger(popupState)}>
                Menu
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to="/civilizations">Civilizations</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to="/units">Units</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to="/technologies">Technologies</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to="/structures">Structures</Link>
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </Box>
    </Container>
  );
};

export default HeaderComponent;
