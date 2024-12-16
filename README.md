
![image](https://github.com/user-attachments/assets/1f8ee48b-f483-4dd5-b388-e17580e6a3c2)

for mobile view 

![image](https://github.com/user-attachments/assets/2ed6a60e-c10d-4f89-b9f3-edc2b64ac725)



# React + Vite + Express Full Stack Setup

This README provides detailed steps to set up and deploy a full-stack application with a React frontend built using Vite and an Express backend. The build files are configured to be placed in a `build` folder at the root level.

## Project Structure

```
root/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   └── package.json
├── build/  (Generated after build)
├── package.json (Root-level scripts)
└── README.md
```

## Prerequisites

- Node.js installed
- NPM or Yarn installed

## Setup Instructions

### 1. Install Dependencies

#### Frontend
Navigate to the `frontend` directory and install the required dependencies:

cd frontend
npm install
npm run dev 

open another terminal 

#### Backend
Navigate to the `backend` directory and install the required dependencies:


cd ../backend
npm install

npm run dev 


or you can run the project locally after running npm i command in both the folders(frontend,backend) and now in the root directory you have to just run the command npm run dev 
so both frontend and backend run concurrently 

