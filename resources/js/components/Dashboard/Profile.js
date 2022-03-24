import React from 'react'
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Profile = () => {
  return (
    <section className='profile__container'>
          <Avatar
            className='profile_avatar'
            alt="#"
            src="#"
            sx={{ width: 56, height: 56 }}
          />

          <h3>{username}</h3>
          
            <List sx={style} component="nav" aria-label="profile info">
                <ListItem button>
                    <ListItemText primary="Address" secondary="" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Telephone nr" secondary="" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Facebook" secondary="" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Telegram" secondary="" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Email" secondary="" />
                </ListItem>
            </List>
    </section>
  )
}

export default Profile