import os
from flask_frozen import Freezer
from app import create_app

app = create_app("production")
# Configure Frozen-Flask to output to the "build" directory
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_RELATIVE_URLS'] = True

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()
