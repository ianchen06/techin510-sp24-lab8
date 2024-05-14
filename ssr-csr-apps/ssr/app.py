from flask import Flask, render_template, session, request, redirect, url_for

app = Flask(__name__)
app.secret_key = "super secret key"


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        session["counter"] = session.get("counter", 0) + 1
        return redirect(url_for("index"))
    return render_template("index.html", counter=session.get("counter", 0))
