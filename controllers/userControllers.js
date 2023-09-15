const fs = require('fs');
const path = require('path');

// Define the path to the data file
const usersFilePath = path.join(__dirname, '../data', 'data.json');

// Function to get all users
const getAllUsers = (req, res) => {
  // Implement logic to read data from 'data.json'
  // 1. Read the file using fs.readFile()
  // 2. Handle errors: Respond with a 500 status code and an "Internal server error" message
  // 3. Parse the JSON data
  // 4. Respond with a 200 status code and the parsed data
};

// Function to create a new user
const createUser = (req, res) => {
  // Implement logic to create a new user
  // 1. Extract user data (name, email) from the request body (req.body)
  // 2. Read the existing data from 'data.json'
  // 3. Generate a unique user ID
  // 4. Create a new user object
  // 5. Add the new user to the existing data
  // 6. Write the updated data back to 'data.json'
  // 7. Handle errors: Respond with a 500 status code and an "Internal server error" message
  // 8. Respond with a 201 status code and a message indicating "User created" along with the new user data
};

// Function to update a user by ID
const updateUser = (req, res) => {
  // Implement logic to update a user by ID
  // 1. Extract user ID from the request parameters (req.params.id)
  // 2. Extract updated user data (name, email) from the request body (req.body)
  // 3. Read the existing data from 'data.json'
  // 4. Find the user to update by matching the user ID
  // 5. Update the user's data
  // 6. Write the updated data back to 'data.json'
  // 7. Handle errors: Respond with a 500 status code and an "Internal server error" message
  // 8. Handle not found: Respond with a 404 status code and a "User not found" message
  // 9. Respond with a 200 status code and a message indicating "User updated" along with the updated user data
};

// Function to delete a user by ID
const deleteUser = (req, res) => {
  // Implement logic to delete a user by ID
  // 1. Extract user ID from the request parameters (req.params.id)
  // 2. Read the existing data from 'data.json'
  // 3. Find the user to delete by matching the user ID
  // 4. Remove the user from the data
  // 5. Write the updated data back to 'data.json'
  // 6. Handle errors: Respond with a 500 status code and an "Internal server error" message
  // 7. Handle not found: Respond with a 404 status code and a "User not found" message
  // 8. Respond with a 200 status code and a message indicating "User deleted" along with the deleted user data
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
