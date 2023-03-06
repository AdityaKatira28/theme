function share() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check out this page!',
      url: window.location.href
    })
    .then(() => console.log('Shared successfully.'))
    .catch(error => console.log('Error sharing:', error));
  } else {
    alert('Sharing is not supported on your device or browser.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('share-button').addEventListener('click', function() {
    share();
  });
});
