import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore} from 'firebase/firestore';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import InfoRounded from '@mui/icons-material/InfoRounded';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function ContactView() {
    const { id } = useParams();
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyB6_twOhogk9QSRWVQQ1QAekLed-cqNVgQ",
 authDomain: "contact-database-9c47b.firebaseapp.com",
  databaseURL: "https://contact-database-9c47b-default-rtdb.firebaseio.com",
  projectId: "contact-database-9c47b",
  storageBucket: "contact-database-9c47b.appspot.com",
  messagingSenderId: "118822537955",
  appId: "1:118822537955:web:3ef795baeadbe37b7293d6",
  measurementId: "G-0WY0798WFC"
    };

    // Initialize Firebase app
    const firebaseApp = initializeApp(firebaseConfig);

    // Get Firestore instance
    const db = getFirestore(firebaseApp);

    const fetchContactData = async () => {
      try {
        const contactRef = collection(db, 'blogs');
        const snapshot = await getDocs(contactRef);
        const contactList = snapshot.docs.map(doc => doc.data());
        setContactData(contactList);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);

  return (
  <div>
  {contactData.map((contact, index) => (
              <div key={index}>
    <Card
    variant="outlined"
    sx={{
      p: 2,
      display: 'flex',
      flexWrap: 'wrap',
      zIndex: 1,
    }}
  >

    <CardMedia
      component="img"
      width="100"
      height="100"
      alt="123 Main St, Phoenix, AZ cover"
      src={contact.image} // 5. Check image path
      sx={{
        borderRadius: '6px',
        width: { xs: '100%', sm: 100 },
      }}
    />
    <Box sx={{ alignSelf: 'center', ml: 2 }}>
      <Typography variant="body2" color="text.secondary" fontWeight="bold">
         {contact.title}
      </Typography>
      <Typography fontWeight="regular" noWrap gutterBottom>
        {contact.subtitle}
      </Typography>
      <Chip
        size="small"
        variant="outlined"
        icon={<InfoRounded />}
        label={contact.tag}
        sx={(theme) => ({ // 4. Ensure access to theme object
          '.MuiChip-icon': { fontSize: 16, ml: '4px', color: 'success.500' },
          bgcolor: 'success.50',
          borderColor: 'success.100',
          color: 'success.900',
        })}
      />
    </Box>
    <Link variant="subtitle2" sx={{ ml: 0.5 }} href={`/posts/${contact.id}`}>
  Read more
</Link>

  </Card>

<Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           .....................
            </Typography>
          </Divider>
  </div>
            ))}


            </div>

  );
}