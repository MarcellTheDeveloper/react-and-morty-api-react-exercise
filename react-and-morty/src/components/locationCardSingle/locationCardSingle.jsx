import React, { useState } from 'react';
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
import AddIcon from '@material-ui/icons/Add';
import WcIcon from '@material-ui/icons/Wc';
import Button from '@material-ui/core/Button';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  resid: {
    marginTop: '10px',
    color: 'white',
    backgroundColor: '#bdbdbd',
  },
  resIcon: {
    marginLeft: '-10px',
    marginRight: '5px',
  },
}));

const theme = createMuiTheme({
  palette: {},
});

export default function LocationSingleCard(props) {
  const classes = useStyles();
  const { created, dimension, residents } = props;
  const [desc, setDesc] = useState([]);

  let urls = residents;
  async function fetchAll() {
    let results = await Promise.all(
      urls.map((url) => fetch(url).then((r) => r.json()))
    );
    const items = await results;
    setDesc(items);
  }
  console.log(desc.length === 0 ? 'sorry' : desc);

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
          <ListItemText
            primary='Dimension'
            secondary={
              dimension === 'unknown' ? 'Dimension is unknown' : dimension
            }
          />
        </ListItem>
        <ListItem>
          <Button
            variant='contained'
            onClick={fetchAll}
            className={classes.resid}
          >
            <AccessibilityIcon className={classes.resIcon} /> Fetch Residents
          </Button>
        </ListItem>
      </List>
      {desc.length === 0 ? '' : desc.map((item) => <div>{item.name}</div>)}
    </ThemeProvider>
  );
}
