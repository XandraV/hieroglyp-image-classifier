# Glyph Image Classifier

Image classifier project that combines **React(TypeScript)** frontend with a **Flask(Python)** backend that allows the user to upload and identify a hieroglyph. The **predictive model** was built by using Python and **TensorFlow**.

![app](https://hieroglyphidentifier.s3.eu-west-2.amazonaws.com/hieroglyph.gif)

Frontend source code can be found [here](https://github.com/XandraV/hieroglyp-image-classifier/tree/master/app/hieroglyph-react).

Backend source code can be found [here](https://github.com/XandraV/hieroglyp-image-classifier/tree/master/app/backend/).

[Data folder](https://github.com/XandraV/hieroglyp-image-classifier/tree/master/data) contains the data that was used in `hieroglyp_identifier.ipynb` to create the model in `saved_model.h5`.

## Installation

Clone the master branch and then run the following scripts from the hieroglyph-react folder:

- `npm install` - to install relevant dependencies

- `npm start` - start the react app

You will need to have the latest version of [Python 3](https://www.python.org/downloads/), [Flask](https://flask.palletsprojects.com/en/1.1.x/installation/) and [Tensorflow](https://www.tensorflow.org/install/) installed on your machine.

You can install the relevant dependencies by running the following scripts:
- `pip install Flask` - to install Flask

- `pip3 install pillow` - to install PIL(Python Imaging Library)

- `pip install flask-cors` - to install a Flask extension for handling Cross Origin Resource Sharing

- `pip install tensorflow` - to install TensorFlow

- `pip install tensorflow-hub` - to install TensorFlow Hub

- `python app.py` - to start the flask server from app/backend folder

## Resources

| Description                                                        | Link                                                                      |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------ |
| Material-UI components - a popular React UI framework              | [Material-UI docs](https://material-ui.com/getting-started/installation/) |
| Library that utilises tagged template literals to style components | [styled components](https://styled-components.com/)                       |
| Flask web application framework                                    | [Flask](https://flask.palletsprojects.com/en/1.1.x/)                      |
| React - JavaScript library for building user interfaces            | [create-react-app](https://github.com/facebook/create-react-app)          |
|TensorFlow - open source library to develop and train ML models| [TensorFlow](https://www.tensorflow.org/) 
