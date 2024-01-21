import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from "react-router-dom";

const Header = ({t,changeLanguage}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Button component={RouterLink} to={"/"} color='inherit'>
          {t("home")}
          </Button>
          <Button component={RouterLink} to={"/about"} color='inherit'>
            {t("about")}
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/>
          <Button onClick={()=>(changeLanguage("fi"))} color='inherit'>FI</Button>
          <Button onClick={()=>(changeLanguage("en"))}color='inherit'>EN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header