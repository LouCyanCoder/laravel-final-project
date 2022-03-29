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

      <div className='profile__avatar'>

          <Avatar
            alt="avatar picture"
            src="../../images/user_avatar.png"
            sx={{ width: 100, height: 100 }}
          />

          <p>{ user.username }</p>
      
      </div>
      
        <div className='profile__list'>
              <List component="nav" aria-label="profile info">
                  <ListItem button>
            <ListItemText primary="Address" secondary={ user.address } />
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
          </div>
    </section>
  )
}

export default Profile