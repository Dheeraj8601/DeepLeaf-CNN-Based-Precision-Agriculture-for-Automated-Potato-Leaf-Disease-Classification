const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const labelElement = document.getElementById('label');
const confidenceElement = document.getElementById('confidence');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const objectUrl = URL.createObjectURL(file);
    preview.src = objectUrl;
    performApiCall(file);
  }
});

function performApiCall(file) {
  const apiUrl = 'http://localhost:8080/predict'; // Replace with your actual API URL

  const formData = new FormData();
  formData.append('file', file);

  fetch(apiUrl, {
    method: 'POST',
    body: formData,
    mode: 'cors', // Add this to enable CORS
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      labelElement.innerHTML = `Label: ${data.class}`;
      confidenceElement.innerHTML = `Confidence: ${(data.confidence * 100).toFixed(2)}%`;
    })
    .catch(error => {
      console.error('Error fetching data from the API:', error);
    });
}
