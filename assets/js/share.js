function share() {
  // Check if the navigator.share() method is available
  if (navigator.share) {
    // Call the navigator.share() method with the share data
    navigator.share({
      title: 'SCKad',
      text: 'Engineering Design Services.',
      url: 'https://www.sckad.com'
    })
      .then(() => console.log('Shared successfully.'))
      .catch(error => console.log('Error sharing:', error));
  } else {
    // If the navigator.share() method is not available, show an error message
    alert('Sharing is not supported on your device or browser.');
  }
}
