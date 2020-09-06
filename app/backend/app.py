from flask import Flask, request, jsonify
from PIL import Image
from flask_cors import CORS
from predict import predict_image
app = Flask(__name__)
CORS(app)

@app.route('/prediction', methods=["POST"])
def get_prediction():
    file = request.files['file']
    im = Image.open(file).convert('RGB')
    res = predict_image(im)
    return {'prediction': str(res)}

if __name__ == "__main__":

    # Load this config object for development mode
    app.config.from_object('configurations.DevelopmentConfig')
    app.run()
