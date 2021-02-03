# FoodRecipes_Flask

UCOOK
-----

## Introduction

UCOOK is a website for recipes building a community platform for people to share recipe ideas and cooking tips. This site lets you list new recipes, discover some new recipes you did not hear about, and share your ideas with
people from all over the world.

Cooking is fun!. 
Cooking is the key to a happier and healthier life for people, communities and the planet.

## Overview

This app is developed to find and share home cooked recipes. I used Python, flask and SQLITE database to develop this app.
### Features

* Has a LOGIN & SIGNUP functionability
* Anyone can browse all the published recipes without signing up.
* You can SIGNUP to become a USER and access all advantages of the site
* After you sign up, you can CREATE recipes and SHARE them with others.
* CREATING RECIPES includes UPLOADING picture of the recipe, write down THE DURATION, SERVINGS, all the ingredients and steps.
* You can EDIT or DELETE your own recipes.
* Every user has his own profile page which he can UPDATE.
* You can EDIT your profile, UPLOAD a profile picture or CHANGE your password.
* RESPONSIVE DESign to all devices. 

This app is still in the developing phase. I plan to add more features in the near future. You can look forward to the FINAL VERSION. 
I want EVERYONE to ENJOY COOKING. Let's make that happen!

## Tech Stack (Dependencies)

### 1. Backend Dependencies
The tech stack will include the following:
 * **virtualenv** as a tool to create isolated Python environments
 * **SQLITE3** as our database of choice
 * **Python3** and **Flask** as our server language and server framework
You can download and install the dependencies mentioned above using `pip` as:
```
pip install virtualenv
pip install Flask
```
> **Note** - If we do not mention the specific version of a package, then the default latest stable package will be installed. 

### 2. Frontend Dependencies
You must have the **HTML**, **CSS**, and **Javascript** with [Bootstrap 3](https://getbootstrap.com/docs/3.4/customize/) for our website's frontend. Bootstrap can only be installed by Node Package Manager (NPM). Therefore, if not already, download and install the [Node.js](https://nodejs.org/en/download/). Windows users must run the executable as an Administrator, and restart the computer after installation. After successfully installing the Node, verify the installation as shown below.
```
node -v
npm -v
```
Install [Bootstrap 3](https://getbootstrap.com/docs/3.3/getting-started/) for the website's frontend:
```
npm init -y
npm install bootstrap@3
```

## Main Files: Project Structure

  ```
  ├── README.md
  ├── app.py *** the main driver of the app. Includes all the models.
                    "python app.py" to run after installing dependences
  ├── helpers.py *** Login, Error Messages, etc
  ├── foodrecipes.db *** Local DATABASE
  ├── requirements.txt *** The dependencies we need to install with "pip3 install -r requirements.txt"
  ├── static
  │   ├── css 
  │   ├── font
  │   ├── ico
  │   ├── img
  │   └── js
  └── templates
      ├── apology
      ├── create
      ├── edit
      ├── home
      ├── layout
      ├── myrecipes
      ├── recipe
      ├── register
      ├── settings
      ├── profile
      ├── edit profile
      ├── change password
      └── login
    
  ```

Overall:
* Models are located in the `MODELS` section of `app.py`.
* Controllers are also located in `app.py`.
* The web frontend is located in `templates/`, which builds static assets deployed to the web server at `static/`.

## Development Setup
1. **Initialize and activate a virtualenv using:**
```
python -m virtualenv env
source env/bin/activate
```
>**Note** - In Windows, the `env` does not have a `bin` directory. Therefore, you'd use the analogous command shown below:
```
source env/Scripts/activate
```

2. **Install the dependencies:**
```
pip install -r requirements.txt
```

3. **Run the development server:**
```
export FLASK_APP=myapp
export FLASK_ENV=development # enables debug mode
python3 app.py
```

4. **Verify on the Browser**<br>
Navigate to project homepage [http://127.0.0.1:5000/](http://127.0.0.1:5000/) or [http://localhost:5000](http://localhost:5000) 

