import time

from flask import Flask


def create_app():
    app = Flask(__name__)

    @app.route("/time")
    def get_current_time():
        return {"time": time.time()}

    return app
