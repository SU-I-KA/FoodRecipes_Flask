import os

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session, url_for
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

from werkzeug.utils import secure_filename

from helpers import apology, login_required, usd

# Configure application
app = Flask(__name__)

# Upload images
UPLOAD_FOLDER = ''
ALLOWED_EXTENSIONS = {'bitmap', 'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///foodrecipes.db")


@app.route("/")
def index():
    """Show all the recipes"""
    row = db.execute("SELECT * FROM recipes")

    return render_template("home.html", row=row)



@app.route("/myrecipes/<int:id>")
@login_required
def MyRecipes(id):
    """Show all my recipes"""
    chef_id = str(id)
    row = db.execute("SELECT * FROM recipes WHERE user_id = :id",
                          id=chef_id)

    return render_template("myrecipes.html", row=row)



def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route("/create", methods=["GET", "POST"])
@login_required
def create_recipe():
    """Create Recipes"""
    if request.method == "GET":
        return render_template("create.html")

    if request.method == "POST":

        title= request.form.get("title")
        story = request.form.get("story")
        serving = request.form.get("serving")
        cook_time = request.form.get("cooking-time")
        ingredients = request.form.get("ingredients")
        steps = request.form.get("steps")


        if not request.files['file']:
            flash("No Image Uploaded")
            return redirect(request.url)
        else:
            f = request.files['file']
            #f.save(os.path.join(app.config['UPLOAD_FOLDER'],secure_filename(f.filename)))

            f.save(os.path.join(app.root_path, 'static/uploads', secure_filename(f.filename)))
            path = os.path.join('/static/uploads', secure_filename(f.filename))


        if not title:
            flash("Missing title")
            return redirect(request.url)

        if not serving:
            flash("Missing the number of serving people")
            return redirect(request.url)
        if not cook_time:
            flash("Missing the cooking time")
            return redirect(request.url)
        if not ingredients:
            flash("Missing the ingredients of your recipe")
            return redirect(request.url)
        if not steps:
            flash("Missing the directions of your recipe")
            return redirect(request.url)

        db.execute("INSERT INTO recipes (user_id, title, story, serving, cook_time, ingredients, steps, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                                    (session["user_id"], title, story, serving, cook_time, ingredients, steps, path))

        flash('Published')
        return redirect("/")


@app.route("/edit/<int:id>", methods=["GET", "POST"])
@login_required
def edit_recipe(id):
    """Edit Recipes"""
    recipe_id = str(id)
    if request.method == "GET":
        recipes = db.execute("SELECT * FROM recipes WHERE user_id = :user_id AND id = :recipe_id",
                            {'user_id': session["user_id"],'recipe_id': recipe_id})
        return render_template("edit.html", recipes=recipes)

    if request.method == "POST":

        title = request.form.get("title")
        story = request.form.get("story")
        serving = request.form.get("serving")
        cook_time = request.form.get("cooking-time")
        ingredients = request.form.get("ingredients")
        steps = request.form.get("steps")

        if not request.files['file']:
            db.execute(
                "UPDATE recipes SET title=?, story=?, serving=?, cook_time=?, ingredients=?, steps=? WHERE id =?",
                (title, story, serving, cook_time, ingredients, steps, recipe_id))
            idnum = int(recipe_id)
            flash('Saved')
            return redirect(url_for("show_recipe", id=idnum))
        else:
            f = request.files['file']
            f.save(os.path.join(app.root_path, 'static/uploads', secure_filename(f.filename)))
            path = os.path.join('/static/uploads', secure_filename(f.filename))

            db.execute("UPDATE recipes SET title=?, story=?, serving=?, cook_time=?, ingredients=?, steps=?,image=? WHERE id =?",
                        (title, story, serving, cook_time, ingredients, steps, path,recipe_id))
            idnum = int(recipe_id)
            flash('Saved')
            return redirect(url_for("show_recipe", id=idnum))


@app.route("/cancel/<int:id>")
@login_required
def cancel(id):
    """Cancel all changes done to the recipe submitted by user"""
    recipe_id = str(id)
    #recipes = db.execute("SELECT * FROM recipes WHERE id = :id",
    #                     id=recipe_id)
    idnum = int(recipe_id)
    return redirect(url_for("show_recipe", id=idnum))


@app.route("/delete_recipe/<int:id>")
@login_required
def delete_recipe(id):
    """Cancel all changes done to the recipe submitted by user"""
    recipe_id = str(id)
    """"
    row = db.execute("SELECT * FROM recipes WHERE id = :id",
                         id=recipe_id)
    path = row[0]["image"]
    os.remove('/static/uploads/02.jpg')
    """
    db.execute("DELETE FROM recipes WHERE id = :id",
                         id=recipe_id)
    flash("DELETED")
    idnum = session["user_id"]
    return redirect(url_for("MyRecipes", id=idnum))


@app.route("/recipes/<int:id>")
def show_recipe(id):
    """Show all recipes submitted by users"""
    recipe_id = str(id)
    #row = db.execute("SELECT * FROM recipes WHERE id = :recipe_id AND user_id = :userid" ,
     #                      {'recipe_id': recipe_id , 'userid': session["user_id"]})

    row = db.execute("SELECT * FROM recipes WHERE id = ?",
                     (recipe_id))
    name_id = db.execute("SELECT user_id FROM recipes WHERE id = ?",
                     (recipe_id))
    name = db.execute("SELECT username FROM users WHERE id = ?",
                     (name_id[0]["user_id"]))
    ingredients=row[0]["ingredients"]
    ingre_buffer = ingredients.split("- ")

    steps = row[0]["steps"]
    step_buffer = steps.split("1. ")

    if session:
        userid= session["user_id"]
    else:
        userid='guest'

    return render_template("recipe.html", name=name,name_id=name_id, userid=userid, row=row, ingre_buffer=ingre_buffer, step_buffer=step_buffer)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)
            #return redirect(request.url)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)
            #return redirect(request.url)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = :username",
                          username=request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("invalid username and/or password", 401)
            #return redirect(request.url)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]
        session["username"] = rows[0]["username"]

        # Redirect user to home page
        flash("WELCOME BACK")
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")



@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Matching passwords
        elif request.form.get("password") != request.form.get("confirm-password"):
            return apology("Passwords don't match", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = :username",
                          username=request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) >= 1:
            return apology("Username is already registered", 403)

        # Inserting the values into the database
        db.execute("INSERT INTO users (username, hash) VALUES (?, ?)",
                       (request.form.get("username"), generate_password_hash(request.form.get("password"))))


        # Redirect user to home page
        flash("SUCCESSFULLY REGISTERED")
        return redirect("/login")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("register.html")


@app.route("/settings", methods=["GET", "POST"])
@login_required
def settings():
    """Change Your Password"""
    if request.method == "GET":
        return render_template("settings.html")

    # Query database for username
    rows = db.execute("SELECT * FROM users WHERE id = :id",
                            id=session["user_id"])

    if request.method == "POST":
        if not request.form.get("old-password"):
            return apology("Enter your old password", 403)

        # Ensure password was submitted
        elif not request.form.get("new-password"):
            return apology("Enter your new password", 403)

        # Ensure password was confirmed
        elif not request.form.get("confirm-password"):
            return apology("confirm your new password", 403)

        # Matching passwords
        elif request.form.get("new-password") != request.form.get("confirm-password"):
            return apology("Passwords don't match", 403)

        # Ensure username exists and password is correct
        if not check_password_hash(rows[0]["hash"], request.form.get("old-password")):
            return apology("invalid password", 403)

        else:
            db.execute("UPDATE users SET hash=? WHERE id =?", (generate_password_hash(request.form.get("new-password")), session["user_id"]))

            flash('Password Changed')
            return redirect("/")


def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


# Listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
