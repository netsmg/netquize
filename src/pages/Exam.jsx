import React from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as dbRef, push } from 'firebase/database';

export default {
  setup() {
    const video = ref({
      title: '',
      link: '',
    });

    const submitForm = () => {
      saveToFirebase(video.value);
    };

    const saveToFirebase = (videoData) => {
      // Replace this with your Firebase config
      const firebaseConfig = {
        // Your Firebase config here
      };

      const firebaseApp = initializeApp(firebaseConfig);
      const database = getDatabase(firebaseApp);
      const videosRef = dbRef(database, 'videos');

      // Push the video data to the "videos" node
      push(videosRef, videoData);

      // Clear the form after submission
      video.value = { title: '', link: '' };

      // Optional: Log success message or perform other actions
      console.log('Data saved to Firebase!');
    };

    return {
      video,
      submitForm,
    };
  },
};
