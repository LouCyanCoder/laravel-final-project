import React, {useState, useEffect, useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { UserContext } from "../../context/context";


const Profile = () => {

    const { user } = useContext(UserContext);
  console.log(user)
  
  
  
  return (
    
    <section className='profile__container'>
          <Avatar
            className='profile_avatar'
            alt="#"
            src="#"
            sx={{ width: 56, height: 56 }}
          />

      <h3>{ user.username }</h3>
          
            <List component="nav" aria-label="profile info">
                <ListItem button>
          <ListItemText primary="Address" secondary={ user. address } />
                </ListItem>
                
                <Divider />
                
                <ListItem button divider>
                    <ListItemText primary="Telephone nr" secondary={ user.phone_number } />
                </ListItem>
                
                <ListItem button>
                    <ListItemText primary="Facebook" secondary={ user.facebook_link } />
                </ListItem>
                
                <Divider light />
                
                <ListItem button>
                    <ListItemText primary="Telegram" secondary={ user.telegram_link } />
                </ListItem>
                
                <Divider light />
                
                <ListItem button>
                    <ListItemText primary="Email" secondary={ user.email } />
                </ListItem>
                
            </List>
    </section>
  )
}

export default Profile