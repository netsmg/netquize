// Import necessary dependencies
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useAuth } from '../contexts/AuthContext';
import showAlert from './AlertList';

// Define menu options with labels and corresponding icons
const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  {
    label: 'Chat',
    icon: 'eva:chat-fill',
  },
  {
    label: 'Blogs',
    icon: 'eva:book-fill',
  },
  {
    label: 'Contact',
    icon: 'eva:email-fill',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
  },
];

// AccountPopover component
export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  // Function to handle opening popover
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  // Function to handle closing popover
  const handleClose = () => {
    setOpen(null);
  };

  // Function to handle user logout
  const handleLogOut = () => {
    logOut();
    showAlert('success', 'logout-success');
    navigate('/');
  };

  return (
    <>
      {/* IconButton to trigger popover */}
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        {/* Avatar */}
        <Avatar
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        />
      </IconButton>

      {/* Popover component */}
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        {/* Mapping over menu options to render menu items */}
        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={handleClose} component={Link} to={`/${option.label.toLowerCase()}`}>
            {/* Display label and icon for each menu item */}
            <Typography variant="body1">
              
             {option.label}
            </Typography>
          </MenuItem>
        ))}

        {/* Divider */}
        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        {/* Conditional rendering based on user authentication */}
        {currentUser ? (
          // If user is logged in, render logout option
          <MenuItem
            disableRipple
            disableTouchRipple
            onClick={handleLogOut}
            sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
          >
            Logout
          </MenuItem>
        ) : (
          // If user is not logged in, render login option
          <MenuItem
            disableRipple
            disableTouchRipple
            onClick={handleClose}
            component={Link}
            to="/login"
            sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
          >
            Login
          </MenuItem>
        )}
      </Popover>
    </>
  );
}