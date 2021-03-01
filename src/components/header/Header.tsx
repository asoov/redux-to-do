import { 
  Grid, 
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  styled
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
    color: 'grey'
  }
})

export const Header: React.FC = (): ReactElement => {
  return (
    <Grid container justify='center'>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Frontend Café
            </Typography>
            <StyledLink to='/todo'>
              <Button color="inherit">Todo-App</Button>
            </StyledLink>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  )
}