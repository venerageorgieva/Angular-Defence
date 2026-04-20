
<img width="1440" height="814" alt="480048680-275e5f09-b71b-4191-a680-dd589c86f620" src="https://github.com/user-attachments/assets/8202d7aa-9fe8-47c8-91d8-d513aaa60ef7" />

<br>
Angular Project - Functional Guide
<br>
<br>1. Application Purpose
<br>The goal of the application is to provide a platform for plumbers and construction workers to share advice, solutions, and professional experiences. The website helps users solve work-related problems by allowing them to post and explore practical advice from others in the field.
<br>
<br>2. User Roles
<br> Guest (Not Authenticated User)
<br> Can view the home page
<br> Can browse all advice posts
<br> Can view details of specific posts
<br> Can search posts using the search bar
<br> Can register or login
<br>
<img width="1440" height="814" alt="480048730-7b91dc42-5058-4f03-b470-b7ebb0cf155f" src="https://github.com/user-attachments/assets/4180aa4b-e5cb-46fa-9237-b72e4397a8c9" />

<br>
Authenticated User
<br> Can create new advice posts
<br> Can edit their own posts
<br> Can delete their own posts and themes 
<br> Can like posts
<br> Can search posts
<br> Can edit and manage their profile information
<br> Can see latest posts section on the home page
<br>
<img width="1366" height="470" alt="Screenshot 2026-04-20 at 19 50 53" src="https://github.com/user-attachments/assets/bbfdcce0-a4ad-49a7-a0d3-6c47bd5490e1" />
<br>
<img width="1440" height="812" alt="480049118-905f3f7c-ced4-4fa1-8e75-fe04a84463b6" src="https://github.com/user-attachments/assets/f338d376-e5ec-485f-9725-a43fa682cf32" />
<br>
<img width="1440" height="813" alt="480049209-8e930656-315c-4c02-9857-f5657a9a99e8" src="https://github.com/user-attachments/assets/16be668c-1c62-49c8-ae68-e85c4259b625" />
<br>
<img width="1440" height="814" alt="480049550-f81de443-e6a5-4827-9366-b374a855c91a" src="https://github.com/user-attachments/assets/cb0c857f-f18c-46ad-bfb2-c4b329cf6403" />



<br>
<br>3. Public Features
<br> Home page
<br> Catalog page displaying all advice posts
<br> Details page showing full information about a specific post
<br> Search functionality for filtering posts
<br> Login page
<br> Registration page
<br>
<br>4. Main Application Flow
<br> User opens the Home page
<br> User navigates to the Catalog page to browse advice
<br> User searches for specific advice using the search bar (optional)
<br> User selects a post and views its details
<br> User registers or logs in
<br> Authenticated user creates a new advice post
<br> The post appears in the Catalog
<br> User can edit or delete their own posts
<br> User can like other posts and update their profile
<br>
<br>5. Data Structure
<br> Advice Post Object
<br>_id
<br>likes
<br>text
<br>userId
<br>themeId
<br>created_at
<br>updatedAt
<br>__v
<br>
<br>6. Project Architecture
<br> components/ – UI components (home, catalog, details, login, register, profile, etc.)
<br> services/ – Handles API requests and business logic
<br> models/ – Defines data structures (user, post, etc.)
<br> guards/ – Route protection for authenticated users
<br> shared/ – Reusable components and utilities
<br>
<br>7. Technologies Used
<br> Angular
<br> TypeScript
<br> Node.js (REST API)
<br> MongoDB
<br> HTML / CSS
<br>
<br>8. How to Run the Project
<br> Clone the repository
<br> Open a terminal and navigate to the project folder:
<br> cd project
<br> Install dependencies:
<br> npm install
Start the Angular application:
<br> ng serve
<br> Open another terminal and navigate to the backend folder:
<br>cd rest-api
Install backend dependencies and start the server:
<br>npm install
<br>npm start
<br>Make sure MongoDB is running
<br>Open the application in your browser:
<br>http://localhost:4200
