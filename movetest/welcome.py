
import os
from flask import Flask, jsonify, render_template, request
app = Flask(__name__)

users = []

@app.route('/_insertUser')
def insertUser():
    name = request.args.get('name')
    pwd = request.args.get('pwd')
    age = request.args.get('age')
    email = request.args.get('email')

    user = {'name': name, 'pwd': pwd, 'age': age, 'email': email}

    users.append(user)

    return jsonify(result=name)
    # (name=name, pwd=pwd, age=age, email=email)


@app.route('/')
def index():
    return render_template('index.html')

port = os.getenv('PORT', '5000')
if __name__ == "__main__":
	app.run(host='0.0.0.0', port=int(port))
