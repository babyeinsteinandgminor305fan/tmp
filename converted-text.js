(function() {
  // 1. Define the direct image URL from File Garden
  const imageUrl = "https://file.garden/aZbEJDTndHWJA2uA/img.png";

  // 2. Create the style element to hold the CSS rules
  const cdnStyle = document.createElement('style');
  cdnStyle.type = 'text/css';
  cdnStyle.innerHTML = `
    body {
      background-image: url("${imageUrl}");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
      margin: 0;
      min-height: 100vh;
    }
  `;

  // 3. Append the style block into the document head safely
  // Ensure the document head exists before appending
  if (document.head) {
    document.head.appendChild(cdnStyle);
  } else {
    // If document.head is not available yet, wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      document.head.appendChild(cdnStyle);
    });
  }

  console.log("CDN Script Loaded: File Garden image background applied.");
})();