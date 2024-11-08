import joblib


def load_model(list):
    model = joblib.load('modelo_preferencia.pkl')
    pred = model.predict([list])
    return pred[0]


if __name__ == '__main__':
    print(load_model([56, 71477, 9, 2477, 175, 267, 0, 1, 1, 0, 1, 2, 2]))