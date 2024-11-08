from flask import Flask, jsonify, request
from flask_cors import CORS

from db import *
from model_pred import load_model

app = Flask(__name__)
CORS(app)

@app.route('/gender')
def get_gender():
    return jsonify(list_gender)

@app.route('/education')
def get_education():
    return jsonify(list_education)

@app.route('/activity')
def get_activity():
    return jsonify(list_Preferred_Activities)

@app.route('/location')
def get_location():
    return jsonify(list_location)

@app.route('/season')
def get_season():
    return jsonify(list_favorite_season)

@app.route('/confi')
def get_confi():
    return jsonify(list_confi)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        age = int(data['age'])
        income = int(data['income'])
        frequency = int(data['frequency'])
        budget = int(data['budget'])
        prox_mountains = int(data['prox_mountains'])
        prox_beach = int(data['prox_beach'])
        pets = int(data['pets'])
        concerns = int(data['concerns'])
        gender = int(data['gender'])
        education = int(data['education'])
        activity = int(data['activity'])
        location = int(data['location'])
        season = int(data['season'])

        list_item = [age, income, frequency, budget, prox_mountains, prox_beach, pets, concerns, gender, education, activity, location, season]

        predict = load_model(list_item)
        
        if predict == 0:
            predict = 'Praia'
        else:
            predict = 'Montanha'


        return jsonify({'preference': predict})

    except KeyError as err:
        print(err)
        return jsonify({'err': 'Ocorreu um erro por favor tente mais tarde'})

if __name__ == '__main__':
    app.run(debug=True)