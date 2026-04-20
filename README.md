<img width="1440" height="814" alt="480048680-275e5f09-b71b-4191-a680-dd589c86f620" src="https://github.com/user-attachments/assets/e4964e9b-944d-4346-849a-b9591dce6153" />

Angular Project - Functional Guide

1. Application Purpose
The goal of the application is to provide a platform for plumbers and construction workers to share advice, solutions, and professional experiences. The website helps users solve work-related problems by allowing them to post and explore practical advice from others in the field.

2. User Roles
Guest (Not Authenticated User)
Can view the home page
Can browse all advice posts
Can view details of specific posts
Can search posts using the search bar
Can register or login
Authenticated User
Can create new advice posts
Can edit their own posts
Can delete their own posts (currently deletes only the advice, not the entire theme)
Can like posts
Can search posts
Can edit and manage their profile information

<img width="1440" height="814" alt="480048994-96627605-5ab1-4ddd-b24a-88ad4943ba62" src="https://github.com/user-attachments/assets/72a0f01a-ec26-44a6-9097-17a1e3cf8ce0" />


4. Public Features
Home page
Catalog page displaying all advice posts
Details page showing full information about a specific post
Search functionality for filtering posts
Login page
Registration page

<img width="1440" height="814" alt="480049550-f81de443-e6a5-4827-9366-b374a855c91a" src="https://github.com/user-attachments/assets/e66d313b-b24d-4730-9fd2-9dad5d0d25db" />


6. Main Application Flow
User opens the Home page
User navigates to the Catalog page to browse advice
User searches for specific advice using the search bar (optional)
User selects a post and views its details
User registers or logs in
Authenticated user creates a new advice post
The post appears in the Catalog
User can edit or delete their own posts
User can like other posts and update their profile

7. Data Structure

Advice Post Object
_id
likes
text
userId
themeId
created_at
updatedAt
__v

8. Project Architecture
components/ – UI components (home, catalog, details, login, register, profile, etc.)
services/ – Handles API requests and business logic
models/ – Defines data structures (user, post, etc.)
guards/ – Route protection for authenticated users
shared/ – Reusable components and utilities

9. Technologies Used
Angular
TypeScript
Node.js (REST API)
MongoDB
HTML / CSS


<img width="1440" height="814" alt="480048680-275e5f09-b71b-4191-a680-dd589c86f620" src="https://github.com/user-attachments/assets/050d0408-2e70-4658-8917-5c727b8ad525" />


8. How to Run the Project
Clone the repository
Open a terminal and navigate to the project folder:
cd project
Install dependencies:
npm install
Start the Angular application:
ng serve
Open another terminal and navigate to the backend folder:
cd rest-api
Start the backend server:
npm install
npm start
Make sure MongoDB is running
Open the application in your browser:
http://localhost:4200
