function share() {
  // Get the current URL of the page or application
  var currentUrl = window.location.href;
  
  // Create the share URL with the current URL as a parameter
  var shareUrl = "https://sckad.com/share?url=" + encodeURIComponent(currentUrl);
  
  // Open a new window with the share URL
  window.open(shareUrl, "_blank");
}
