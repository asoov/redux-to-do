import { 
  Grid, 
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import { ReactElement } from "react";

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
            <Button color="inherit">Todo-App</Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  )
}