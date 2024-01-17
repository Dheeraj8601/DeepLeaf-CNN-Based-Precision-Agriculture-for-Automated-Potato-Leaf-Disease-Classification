# DeepLeaf: CNN-Based Precision Agriculture for Automated Potato Leaf Disease Classification

## 1. training.ipynb (Jupyter Notebook)
- **Technologies Used:** TensorFlow, Keras
- **IDE Used:** Jupyter Notebook
- Utilizes TensorFlow and Keras for CNN-based image classification.
- Dataset: PlantVillage.
- Data preprocessing, augmentation, and model training.
- Evaluation and visualization of training/validation metrics.
- Model saving and conversion to TensorFlow Lite format.

## 2. PlantVillage Dataset
- PlantVillage dataset used for training the CNN model.

Note: Detailed code and data storage specifics are available in the Jupyter Notebook (training.ipynb).

## 3. Front End: Potato Disease Classification

### index.html:
- Main webpage for Potato Disease Classification.
- User-friendly interface for image upload and classification results.
- Responsive design with style customization.

### style.css:
- **Technologies Used:** HTML, CSS
- CSS styling for the front end, enhancing visual appeal and responsiveness.
- Defines layout, colors, and animations for a seamless user experience.

### script.js:
- **Technologies Used:** JavaScript
- JavaScript file handling user interactions.
- Enables image upload, displays a preview, and triggers API calls for disease classification.

## 4. Additional HTML Pages: Disease Information and Contact

## 5. FastAPI Backend and Android App Integration:

### main.py (FastAPI Backend):
- **Technologies Used:** FastAPI, TensorFlow
- **IDE Used:** PyCharm
- Utilizes FastAPI to create an API for potato disease classification.
- Allows CORS for specified frontend URLs.
- Loads a pre-trained TensorFlow model for disease classification.
- Exposes an endpoint "/ping" for a basic health check.
- Exposes an endpoint "/predict" to receive images for classification.
- Returns the predicted class and confidence.

### Android App (PotatoPathoGuard in Android Studio):
- **Technologies Used:** Android Studio, TensorFlow Lite
- Developed using Android Studio.
- Utilizes a TensorFlow Lite (tflite) model produced in the training.ipynb notebook.
- Incorporates functionality to capture or select an image.
- Sends the image to the FastAPI backend "/predict" endpoint for classification.
- Displays the predicted class obtained from the backend.
- Provides a user-friendly interface for interacting with the potato disease classification system.

