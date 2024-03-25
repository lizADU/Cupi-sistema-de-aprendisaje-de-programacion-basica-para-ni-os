from flask import Flask,render_template,redirect,Response,url_for
from Gesture_Controller import *

app = Flask(__name__,template_folder="template",static_folder="static")


@app.route('/')
def index():
    return render_template('login2.html')
@app.route('/compilador')
def compilador():
    
    return render_template('index.html')
    
@app.route('/camara')
def camara():
    
    return render_template('camara.html')
@app.route('/videoCamara')
def videoCamara():
    live=GestureController()    
    live.start()
    return redirect(url_for('camara'))

if __name__=="__main__":
    app.run(host="127.0.0.1",port="5501",debug=True)