
<img width="1440" height="814" alt="480048680-275e5f09-b71b-4191-a680-dd589c86f620" src="https://github.com/user-attachments/assets/8202d7aa-9fe8-47c8-91d8-d513aaa60ef7" />


Angular Project - Functional Guide

1. Application Purpose
The goal of the application is to provide a platform for plumbers and construction workers to share advice, solutions, and professional experiences. The website helps users solve work-related problems by allowing them to post and explore practical advice from others in the field.

2. User Roles
- Guest (Not Authenticated User)
- Can view the home page
- Can browse all advice posts
- Can view details of specific posts
- Can search posts using the search bar
- Can register or login

<img width="1440" height="814" alt="480048730-7b91dc42-5058-4f03-b470-b7ebb0cf155f" src="https://github.com/user-attachments/assets/4180aa4b-e5cb-46fa-9237-b72e4397a8c9" />


Authenticated User
Can create new advice posts
Can edit their own posts
Can delete their own posts (currently deletes only the advice, not the entire theme)
Can like posts
Can search posts
Can edit and manage their profile information

<img width="1440" height="812" alt="480049118-905f3f7c-ced4-4fa1-8e75-fe04a84463b6" src="https://github.com/user-attachments/assets/f338d376-e5ec-485f-9725-a43fa682cf32" />

<img width="1440" height="813" alt="480049209-8e930656-315c-4c02-9857-f5657a9a99e8" src="https://github.com/user-attachments/assets/16be668c-1c62-49c8-ae68-e85c4259b625" />

<img width="1440" height="814" alt="480049550-f81de443-e6a5-4827-9366-b374a855c91a" src="https://github.com/user-attachments/assets/cb0c857f-f18c-46ad-bfb2-c4b329cf6403" />




4. Public Features
Home page
Catalog page displaying all advice posts
Details page showing full information about a specific post
Search functionality for filtering posts
Login page
Registration page

5. Main Application Flow
User opens the Home page
User navigates to the Catalog page to browse advice
User searches for specific advice using the search bar (optional)
User selects a post and views its details
User registers or logs in
Authenticated user creates a new advice post
The post appears in the Catalog
User can edit or delete their own posts
User can like other posts and update their profile

6. Data Structure
Advice Post Object
_id
likes
text
userId
themeId
created_at
updatedAt
__v

7. Project Architecture
components/ – UI components (home, catalog, details, login, register, profile, etc.)
services/ – Handles API requests and business logic
models/ – Defines data structures (user, post, etc.)
guards/ – Route protection for authenticated users
shared/ – Reusable components and utilities

8. Technologies Used
Angular
TypeScript
Node.js (REST API)
MongoDB
HTML / CSS

9. How to Run the Project
Clone the repository
Open a terminal and navigate to the project folder:
cd project
Install dependencies:
npm install
Start the Angular application:
ng serve
Open another terminal and navigate to the backend folder:
cd rest-api
Install backend dependencies and start the server:
npm install
npm start
Make sure MongoDB is running
Open the application in your browser:
http://localhost:4200
