

# 🍲 Recipes App API

A complete CRUD (Create, Read, Update, Delete) RESTful API for managing recipes. This backend application is built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**, following the **MVC (Model-View-Controller)** architectural pattern.

## 🚀 Live Demo & Repository
- **GitHub Repository:** [https://github.com/Velmuruganvaradharaj1122/Recipes_app](https://github.com/Velmuruganvaradharaj1122/Recipes_app)
- **Live Server (Render):** [Paste your Render URL here after deployment]

---

## 🛠️ Tech Stack
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the API routes and server logic.
- **MongoDB (Atlas)**: Cloud NoSQL database for storing recipes.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB validation and schema management.
- **Postman**: Used for API testing and documentation.

---

## 📂 Project Structure (MVC)
The project follows the MVC pattern to ensure clean and organized code:

```text
recipes-app/
│
├── config/
│   └── db.js           # MongoDB connection logic
├── controllers/
│   └── recipeController.js # Logic for CRUD operations (The 'Brain')
├── models/
│   └── Recipe.js       # Mongoose Schema & Model (The 'Data Blueprint')
├── routes/
│   └── recipeRoutes.js # API Routes mapping URL paths to Controllers
├── .env                # Environment variables (PORT, MONGO_URI)
├── server.js           # Main entry point of the application
└── package.json        # Dependencies and scripts
⚙️ Local Setup & Installation
Follow these steps to run the project locally on your machine:

Clone the repository:

Bash

git clone [https://github.com/Velmuruganvaradharaj1122/Recipes_app.git](https://github.com/Velmuruganvaradharaj1122/Recipes_app.git)
cd recipes-app
Install dependencies:

Bash

npm install
Set up Environment Variables: Create a .env file in the root directory and add the following:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_connection_string
(Note: Replace your_mongodb_connection_string with your actual MongoDB Atlas connection string).

Run the server:

Bash

npm run dev
The server should start on http://localhost:5000.

📡 API Endpoints & Documentation
Here are the details for the 5 CRUD operations implemented in this API.

1. Create a New Recipe
Endpoint: POST /api/recipes

Description: Creates a new recipe in the database.

Request Body (JSON):

JSON

{
    "title": "Spicy Chicken Curry",
    "ingredients": ["Chicken", "Onions", "Tomatoes", "Spices"],
    "instructions": "Fry onions, add tomatoes and spices, cook chicken until tender.",
    "cookingTime": 45,
    "difficulty": "Medium"
}
Response (201 Created):

JSON

{
    "_id": "651a...",
    "title": "Spicy Chicken Curry",
    "ingredients": ["Chicken", "Onions", "Tomatoes", "Spices"],
    ...
}
2. Get All Recipes
Endpoint: GET /api/recipes

Description: Retrieves a list of all recipes stored in the database.

Response (200 OK):

JSON

[
    {
        "_id": "651a...",
        "title": "Spicy Chicken Curry",
        ...
    },
    {
        "_id": "651b...",
        "title": "Pancakes",
        ...
    }
]
3. Get Recipe by ID
Endpoint: GET /api/recipes/:id

Description: Retrieves the details of a single recipe using its unique ID.

Example URL: /api/recipes/651a...

Response (200 OK):

JSON

{
    "_id": "651a...",
    "title": "Spicy Chicken Curry",
    "cookingTime": 45,
    ...
}
4. Update a Recipe
Endpoint: PUT /api/recipes/:id

Description: Updates specific fields of an existing recipe.

Request Body (JSON):

JSON

{
    "cookingTime": 60,
    "difficulty": "Hard"
}
Response (200 OK):

JSON

{
    "_id": "651a...",
    "title": "Spicy Chicken Curry",
    "cookingTime": 60, 
    "difficulty": "Hard",
    ...
}
5. Delete a Recipe
Endpoint: DELETE /api/recipes/:id

Description: Permanently removes a recipe from the database.

Response (200 OK):

JSON

{
    "message": "Recipe deleted successfully"
}
🚀 Deployment Instructions (Render)
Push your code to GitHub.

Log in to Render.com.

Click New + and select Web Service.

Connect your GitHub repository.

In the configuration settings:

Build Command: npm install

Start Command: node server.js

Environment Variables: Add your MONGO_URI key and value here.

Click Create Web Service.

👤 Author
Velmurugan V Full Stack Developer
