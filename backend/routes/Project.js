
const express = require('express');

const router = express.Router();


const {createProject,getAllProjects,getSpecificProject} = require('../controller/ProjectController');



router.post("/createProject",createProject);

// router.get("/getAllProjects",getAllProjects);

router.get("/getSpecificStatusTypeProject/:status",getSpecificProject);



module.exports = router;


