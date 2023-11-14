// Add this in your script.js or main JavaScript file

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Optionally, notify the user that your app can be installed.
  // Show a button or similar UI element to trigger the prompt.
  installButton.style.display = 'block';
});

installButton.addEventListener('click', () => {
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    // Clear the deferred prompt variable
    deferredPrompt = null;
  });
});
