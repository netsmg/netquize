import  { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


import firebaseApp from '../firebase'; 

export default function ContactView() {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');


  const handleSendMessage = async () => {
    const db = getFirestore();
// Check if any of the input fields is empty
  if (!name || !email || !message) {
    setError('Please fill out all the fields.');
    return;
  }
    try {
      // Add a new document with a generated ID
      await addDoc(collection(db, 'kcontact'), {
        name,
        email,
        message
      });
      setSuccessMessage('Message sent successfully!');
      // Clear input fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      setError('Error sending message. Please try again later.');
    }
  };

  return (
    <Box>
      
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card sx={{ p: 5, width: 1, maxWidth: 420 }}>
          <Typography variant="h4">Contact Us</Typography>

          <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            required/>
            <TextField
              fullWidth
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            required/>
            <TextField
              fullWidth
              multiline
              minRows={4}
              maxRows={8}
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            required/>
          </Stack>

          {error && <Typography variant="body2" color="error">{error}</Typography>}
          {successMessage && <Typography variant="body2" color="primary">{successMessage}</Typography>}

          <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ mt: 3 }}>
            <Button variant="contained" onClick={handleSendMessage}>
              Send Message
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}