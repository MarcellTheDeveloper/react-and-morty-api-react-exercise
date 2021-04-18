import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AddIcon from '@material-ui/icons/Add';
import WcIcon from '@material-ui/icons/Wc';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const theme = createMuiTheme({
  palette: {},
});

export default function CharacterSingleCardt(props) {
  const classes = useStyles();
  const { created, gender, origin, status, type, location } = props;

  return (
    <ThemeProvider theme={theme}>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Created' secondary={created} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WcIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Gender' secondary={gender} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PublicIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Orgin' secondary={origin.name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Location' secondary={location.name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FavoriteIcon color='secondary' />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Status' secondary={status} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessibilityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Type'
            secondary={type === '' ? 'No type found' : type}
          />
        </ListItem>
      </List>
    </ThemeProvider>
  );
}
