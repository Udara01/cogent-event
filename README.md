Cogent Event - Setup Guide
This project is a simple web application built with Next.js, Tailwind CSS, Express.js, Node.js, and MySQL.

🖥️ Frontend Technologies
Next.js (React-based framework)

Tailwind CSS (Utility-first CSS framework)

🗄️ Backend Technologies
Express.js (Node.js framework for building APIs)

Node.js

MySQL (Relational database)

Folder Structure

cogent-event
├── cogent-backend-server      # Express.js handles the backend and database logic
├── cogent-frontend            # Next.js handles the frontend


⚙️ Backend Setup
1. Create the MySQL Database
Create a database named cogentdb in MySQL.

Create a table named registered_users.

You can find the table structure in the cogent-backend-server/database/cogentdb.sql file.

2. Configure Database (optional)
If you want to make any changes to the database configuration, you can update the db.js file located in cogent-backend-server/config/db.js.

3. Start the Backend Server
Open a terminal and navigate to the cogent-backend-server folder:
    cd cogent-backend-server

Install the necessary dependencies if you haven't already:
    npm install

Start the backend server using nodemon (make sure nodemon is installed globally, or use npx):
    nodemon index.js

The backend server will now be running, and it will handle API requests and interact with the database.


🌐 Frontend Setup
1. Install Frontend Dependencies
Open a terminal and navigate to the cogent-frontend folder:
    cd cogent-frontend

Install the required dependencies, including Next.js and Tailwind CSS:
    npm install

2. Start the Frontend Development Server
After the installation is complete, run the following command to start the Next.js development server:
    npm run dev

This will start the frontend server, and you should see the application running locally.



🌍 Access the Application
Once both the frontend and backend servers are running, open your browser and visit:

http://localhost:3000/ - This will show the landing page.

http://localhost:3000/Landing - Alternatively, you can access the landing page directly.


💡 Additional Information
Make sure to have MySQL installed and running on your local machine.

You can use Postman or any API testing tool to test backend API endpoints.

