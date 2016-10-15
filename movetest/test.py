import os
from flask import Flask, jsonify, render_template, request

counter = 0

name = "fabs"
pwd = 'fabbb'
age = '25'
email = "fabs@fabs"

user1 = {'name': 'hahaha', 'pwd': pwd, 'age': age, 'email': email}
user2 = {'name': "heheh", 'pwd': pwd, 'age': age, 'email': email}
user3 = {'name': 'hihihi', 'pwd': pwd, 'age': age, 'email': email}

users = []

users.append(user1)
users.append(user2)
users.append(user3)

print users
