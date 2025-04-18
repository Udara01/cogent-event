<h1>Cogent Event - Setup Guide</h1>

<p>This project is a simple web application built with Next.js, Tailwind CSS, Express.js, Node.js, and MySQL.</p>

<h2>🖥️ Frontend Technologies</h2>
<ul>
  <li>Next.js (React-based framework)</li>
  <li>Tailwind CSS (Utility-first CSS framework)</li>
</ul>

<h2>🗄️ Backend Technologies</h2>
<ul>
  <li>Express.js (Node.js framework for building APIs)</li>
  <li>Node.js</li>
  <li>MySQL (Relational database)</li>
</ul>

<h2>📁 Folder Structure</h2>
<pre>
cogent-event
├── cogent-backend-server      # Express.js handles the backend and database logic
├── cogent-frontend            # Next.js handles the frontend
</pre>

<h2>⚙️ Backend Setup</h2>

<h3>1. Create the MySQL Database</h3>
<ul>
  <li>Create a database named <code>cogentdb</code> in MySQL.</li>
  <li>Create a table named <code>registered_users</code>.</li>
  <li>You can find the table structure in <code>cogent-backend-server/database/cogentdb.sql</code>.</li>
</ul>

<h3>2. Configure Database (optional)</h3>
<p>If you want to make any changes to the database configuration, you can update the <code>db.js</code> file located in <code>cogent-backend-server/config/db.js</code>.</p>

<h3>3. Start the Backend Server</h3>
<pre>
# Open a terminal and navigate to the backend folder:
cd cogent-backend-server

# Install the necessary dependencies if you haven't already:
npm install

# Start the backend server using nodemon:
nodemon index.js
</pre>
<p>The backend server will now be running, and it will handle API requests and interact with the database.</p>

<h2>🌐 Frontend Setup</h2>

<h3>1. Install Frontend Dependencies</h3>
<pre>
# Open a terminal and navigate to the frontend folder:
cd cogent-frontend

# Install the required dependencies:
npm install
</pre>

<h3>2. Start the Frontend Development Server</h3>
<pre>
npm run dev
</pre>
<p>This will start the Next.js development server, and you should see the application running locally.</p>

<h2>🌍 Access the Application</h2>
<ul>
  <li><a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> - This will show the landing page.</li>
  <li><a href="http://localhost:3000/Landing" target="_blank">http://localhost:3000/Landing</a> - Alternatively, you can access the landing page directly.</li>
</ul>

<h2>💡 Additional Information</h2>
<ul>
  <li>Make sure to have MySQL installed and running on your local machine.</li>
  <li>You can use Postman or any API testing tool to test backend API endpoints.</li>
</ul>
