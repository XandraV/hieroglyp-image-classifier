import tensorflow_hub as hub
import tensorflow as tf
import numpy as np

def predict_image(im):
    model = tf.keras.models.load_model('saved_model.h5', custom_objects={'KerasLayer': hub.KerasLayer})
    #im = tf.io.read_file('../../data/test/M17/390082_M17.png')
    #im=tf.io.decode_png(im, channels=3)
    im = np.asarray(im)
    image = tf.image.resize(im, (75, 50))
    image = tf.expand_dims(image, axis=0)
    #image = image.numpy()
   
    preds = model.predict(image)
    probs, class_idx = tf.math.top_k(preds, k=1) #change to top 1 and get the exact result
    class_names = ['G43', 'M17', 'S29']
    classes=[]
    for i in class_idx.numpy()[0]:
        classes.append(class_names[i])
    return classes[0]