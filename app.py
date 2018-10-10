#NOTE: GUIDELINES FOR CODING
#   use '' for logical statements, refering to functions and everything in general/
#   use "" for sentences and explicit strings and for html coding
#   comment above the code, avoid uneecessary commets. Make sure it makes sense for others to understand in less than 3 seconds.
#   use space above the comments

# Prerequisites
from flask import Flask, render_template

# Initialize app
app = Flask(__name__)

# Index
@app.route('/',methods=['GET'])
def homepage():
    return render_template('home/homepage.html')

# Run
if __name__ == '__main__':
    app.run(port="5000",debug = True)
