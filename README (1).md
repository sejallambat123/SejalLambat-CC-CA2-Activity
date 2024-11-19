# *FaizanSayani-CC-CA2-Activity*

This project is a *full-stack application* combining a *React.js front-end* and a *Spring Boot-based back-end, split into two modules (Backend-1* and *Backend-2). It manages student information, including details and registration data, using **MongoDB Atlas* as the database.

---

## *Features*

### 1. *Student Details Page*
- Displays student information: *name, **address, and **phone number*.
- Back-end functionality handled by *Backend-1* (deployed to Render).

### 2. *Student Registration Page*
- Enables adding new student data, including fields for *name, **placement status, and **CGPA*.
- Back-end functionality handled by *Backend-2* (deployed to Render).

### 3. *React Front-End (my-app)*
- User-friendly *React.js* front-end for seamless interaction with both features.

---

## *Project Structure*
- *my-app/*: React.js front-end application.
- *Backend-1/*: Spring Boot application managing student details.
- *Backend-2/*: Spring Boot application managing student registration.

---

# Steps to Run
### Clone the Repository
- git clone https://github.com/Faizansayani533/FaizanSayani-CC-CA2-Activity.git
- cd FaizanSayani-CC-CA2-Activity
### Set Up Back-End
- Navigate to Backend-1 and Backend-2 folders.
- Open application.properties in each folder and update the MongoDB Atlas URI with your credentials:
properties
- spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
- Build and run each back-end module:

### Backend-1
- cd Backend-1
./mvnw spring-boot:run
### Backend-2
- cd Backend-2
./mvnw spring-boot:run

## Set Up Front-End

### Navigate to the faizan-app folder:


- cd ../faizan-app
- Install dependencies:
- npm install
- Start the React application:

- npm start
- Access the Application

## *Deployment*

### *Back-End*
- Both *Backend-1* and *Backend-2* are deployed on *Render*.
- Ensure the React app's API endpoints (my-app/src) point to the Render URLs of these back-end modules.

### *Front-End*
- Deploy *my-app* to *Netlify* or any other hosting platform.

---

## *Technologies Used*

- *Front-End*: React.js
- *Back-End*: Spring Boot (Java)
- *Database*: MongoDB Atlas
- *Hosting Platforms*: Render, Netlify (or similar)
