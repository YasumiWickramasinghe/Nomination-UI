import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import MainMenu from 'components/MainMenu/MainMenu';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "300px",
    marginTop: "50px",
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function getItems() {
  var json = {
    list: [
      {
        id: 1,
        name: "Colombo",
        icon: "android",
        subitems: [
          {
            id: 1,
            name: "Green Party",
            icon: "accessible"
          },

          {
            id: 2,
            name: "Independence Party",
            icon: "accessible_forward"
          },
          
        ]
      },

      {
        id: 2,
        name: "Kandy",
        icon: "android",
        subitems: [
          {
            id: 1,
            name: "Radical Liberal Party",
            icon: "accessible"
          },

          {
            id: 2,
            name: "United League",
            icon: "accessible_forward"
          },

          {
            id: 3,
            name: "Central Alliance",
            icon: "accessible"
          },
          
        ]
      },

      {
        id: 3,
        name: "Anuradhapura",
        icon: "favorite",
        subitems: [
          {
            id: 1,
            name: "Communist League",
            icon: "pets"
          },
          {
            id: 2,
            name: "Democratic Party",
            icon: "receipt"
          },

          {
            id: 3,
            name: "Revolutionary Party",
            
            icon: "receipt"
            
          
          },
          {
            id: 2,
            name: "People's Action Party",
            icon: "verified_user"
          }
        ]
      }
    ]
  };
  return json;
}

class NestedList extends React.Component {
  state = {};

  handleClick = e => {
    this.setState({ [e]: !this.state[e] });
  };

  render() {
    const items = getItems();
    const { classes } = this.props;

    return ( 



      <List
        component="nav"
        
        className={classes.root}
      >
        {items.list.map(list => {
          return (
            <div key={list.id}>

<MainMenu title="Elections Commission of Sri Lanka"></MainMenu>
            

              <ListItem button onClick={this.handleClick.bind(this, list.id)}>
                <ListItemIcon>
                <FolderIcon />
                </ListItemIcon>
                <ListItemText inset primary={list.name} />
                {this.state[list.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={this.state[list.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {list.subitems.map(subitem => {
                    return (
                      <ListItem
                        key={subitem.id}
                        button
                        className={classes.nested}
                      >
                        <ListItemIcon>
                        <FolderIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={subitem.name} />

                        <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
                        View Nomination
                      </Button>

                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </div>
          );
        })}
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
