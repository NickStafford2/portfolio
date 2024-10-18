import time

from flask import Flask, send_from_directory


def create_app():
    app = Flask(__name__)

    app = Flask(__name__, static_folder="../../dist/", static_url_path="/")

    @app.route("/")
    def index():
        return app.send_static_file("index.html")

    @app.route("/time")
    def get_current_time():
        return {"time": time.time()}

    return app
