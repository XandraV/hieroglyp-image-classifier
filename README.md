![commit](https://img.shields.io/github/last-commit/XandraV/hieroglyph-image-classifier?color=cyan)


# Hieroglyph Image Classifier

![typescript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white)
![styled](https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white)
![material-ui](https://img.shields.io/badge/-MaterialUI-0081CB?style=flat-square&logo=material-ui&logoColor=white)
![python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![tensorflow](https://img.shields.io/badge/-Tensorflow-FF6F00?style=flat-square&logo=Tensorflow&logoColor=white)

Image classifier project that combines **React(TypeScript)** frontend with a **Flask(Python)** backend and uses a **predictive model** built in Python with **TensorFlow** to identify hieroglyphs in uploaded images.

![gif](https://general-gif-bucket.s3.eu-west-2.amazonaws.com/hieroglyphs.gif)

## **Folder Structure**
```
hieroglyph-image-classifier
├── backend
|   ├── app.py
|   ├── configurations.py
|   ├── predict.py
│   └── saved_model.h5.js
├── frontend
|   ├──public
│   ├── src
|   |   ├── App.tsx
|   |   ├── data.tsx
|   |   ├── Header.tsx
|   |   ├── HieroglyphPage.tsx
|   |   ├── index.tsx
|   |   ├── PageWrapper.tsx
|   |   ├── react-app-env.d.ts
|   |   └── UploadedImageAnimation.tsx
|   |
│   ├── .gitignore      
│   ├── package.json          
│   └── tsconfig.json
|       
└── ml
    ├── egyptian_hieroglyphs_identifier_cnn.ipynb
    └── model1.h5
```
The code I wrote to generate the model can be found in `ml/egyptian_hieroglyphs_identifier_cnn.ipynb`. To run the fully functional web app you will only need the `frontend` and `backend` folders.

[Here](https://github.com/morrisfranken/glyphreader) :octocat: you can find the data that I used to create the model `saved_model.h5`.

The classifier was trained to recognize hieroglyphs and predict their [Gardiner](https://en.wikipedia.org/wiki/Gardiner%27s_sign_list) labels:

**X1** | **G43**
| - | - |
![x1](https://hieroglyphidentifier.s3.eu-west-2.amazonaws.com/X1.png) | ![g43](https://hieroglyphidentifier.s3.eu-west-2.amazonaws.com/G43.png)

## **Installation**

Clone the master branch and then run the following scripts from the `./frontend` folder:

- `npm install` - to install relevant dependencies

- `npm start` - start the react app

You will need to have the latest version of [Python 3](https://www.python.org/downloads/), [Flask](https://flask.palletsprojects.com/en/1.1.x/installation/) and [Tensorflow](https://www.tensorflow.org/install/) installed on your machine.
You can install the relevant dependencies by running the following script:
- `pip install Flask flask-cors pillow tensorflow tensorflow-hub` - to install relevant dependencies

- `python app.py` - to start the flask server from the `./backend` folder

## Resources

| Description                                                        | Link                                                                      |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------ |
| Material-UI components - a popular React UI framework              | [Material-UI docs](https://material-ui.com/getting-started/installation/) |
| Library that utilises tagged template literals to style components | [styled components](https://styled-components.com/)                       |
| Flask web application framework                                    | [Flask](https://flask.palletsprojects.com/en/1.1.x/)                      |
| React - JavaScript library for building user interfaces            | [create-react-app](https://github.com/facebook/create-react-app)          |
|TensorFlow - open source library to develop and train ML models| [TensorFlow](https://www.tensorflow.org/) 

