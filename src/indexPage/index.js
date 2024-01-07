function openFileInput() {
  document.getElementById("fileInput").click();
}

function handleFileSelect(event) {
  const fileContainer = document.getElementById("fileContainer");

  for (const file of event.target.files) {
    const fileItem = document.createElement("div");
    fileItem.className = "fileItem";

    const fileName = document.createElement("span");
    fileName.textContent = file.name;

    const removeButton = document.createElement("button");
    removeButton.className = "removeFile";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      fileContainer.removeChild(fileItem);
    });

    fileItem.appendChild(fileName);
    fileItem.appendChild(removeButton);
    fileContainer.appendChild(fileItem);
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const locationDisplay = document.getElementById("locationDisplay");

  // Make a request to OpenStreetMap Nominatim for reverse geocoding
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
      const address = data.display_name || "Location not found";
      locationDisplay.textContent = `Location: ${address}`;
    })
    .catch((error) => {
      console.error("Error fetching address:", error);
      locationDisplay.textContent = "Error fetching address";
    });
}

function showError(error) {
  const locationDisplay = document.getElementById("locationDisplay");
  locationDisplay.textContent = `Error getting location: ${error.message}`;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    const locationDisplay = document.getElementById("locationDisplay");
    locationDisplay.textContent =
      "Geolocation is not supported by this browser.";
  }
}

// Automatically get location on page load
window.addEventListener("load", getLocation);
