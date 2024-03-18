import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import InfoRounded from '@mui/icons-material/InfoRounded';

export default function ContactView() {
  const { id } = useParams();
  const [contactData, setContactData] = useState(null);

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
        const contactList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const selectedContact = contactList.find(contact => contact.id === id);
        setContactData(selectedContact);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, [id]);

  return (
    <div>
      {contactData && (
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
            src={contactData.image} // Check image path
            sx={{
              borderRadius: '6px',
              width: { xs: '100%', sm: 100 },
            }}
          />
          <Box sx={{ alignSelf: 'center', ml: 2 }}>
            <Typography variant="body2" color="text.secondary" fontWeight="bold">
              {contactData.title}
            </Typography>
            <Typography fontWeight="regular" noWrap gutterBottom>
              {contactData.subtitle}
            </Typography>
            <Chip
              size="small"
              variant="outlined"
              icon={<InfoRounded />}
              label={contactData.tag}
              sx={(theme) => ({
                '.MuiChip-icon': { fontSize: 16, ml: '4px', color: 'success.500' },
                bgcolor: 'success.50',
                borderColor: 'success.100',
                color: 'success.900',
              })}
            />
          </Box>
          {/* Render HTML content */}
          <Typography
            component="div"
            fontWeight="regular"
            noWrap
            gutterBottom
            sx={{ '& p': { marginBottom: '8px' } }}
            dangerouslySetInnerHTML={{ __html: contactData.content }}
          />
        </Card>
      )}
    </div>
  );
}