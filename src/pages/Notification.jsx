import { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/messaging';

const Notification = () => {
  useEffect(() => {
    const initializeFirebaseMessaging = async () => {
      try {
        const firebaseConfig = {
          // Your Firebase config here
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
