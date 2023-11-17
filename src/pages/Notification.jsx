import { useEffect } from 'react';

import 'firebase/messaging';

const Notification = () => {
  useEffect(() => {
    const initializeFirebaseMessaging = async () => {
      try {
        const firebaseConfig = {
          apiKey: "AIzaSyBzzaSTr42firr3fx5YcdXhDzB4iBLVBOM",
  authDomain: "contact-database-9c47b.firebaseapp.com",
  databaseURL: "https://contact-database-9c47b-default-rtdb.firebaseio.com",
  projectId: "contact-database-9c47b",
  storageBucket: "contact-database-9c47b.appspot.com",
  messagingSenderId: "118822537955",
  appId: "1:118822537955:web:3ef795baeadbe37b7293d6",
  measurementId: "G-0WY0798WFC"
          
        };

        firebase.initializeApp(firebaseConfig);

        const messaging = firebase.messaging();

        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('FCM Token:', token);

        messaging.onMessage((payload) => {
          console.log('Message received:', payload);
          // Handle the notification payload and display it to the user
        });
      } catch (error) {
        console.error('Error initializing Firebase Messaging:', error);
      }
    };

    initializeFirebaseMessaging();
  }, []);

  return (
    <div>
      {/* You can customize the UI for notifications here */}
      {/* For example, display a notification message when a new message is received */}
    </div>
  );
};

export default Notification;
