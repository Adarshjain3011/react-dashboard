
const mongoose = require('mongoose');
const Project = require('../models/Project');

const createProject = async (req, res) => {

    try {

        const { title, description, language, author, image, status } = await req.body;

        if (!title || !description || !language || !author || !image || !status) {

            return res.status(400).json({ msg: 'Please fill all fields' });

        }

        const newProject = await Project.create({

            title,
            description,
            language,
            author,
            image,
            status

        })

        return res.status(200).json({

            message: "project created successfully",
            data: newProject,
            error: null,

        })


    } catch (e) {

        return res.status(200).json({

            message: "some error occured while creating project",
            data: null,
            error: e.message,

        })

    }
}



const getAllProjects = async (req, res) => {

    try {


        const allProjects = await Project.find({});

        if (allProjects.length == 0) {

            return res.status(400).json({

                message: "No projects found",
                data: null,
                error: null,
            })
        }
        return res.status(200).json({

            message: "Projects fetched successfully",
            data: allProjects,
            error: null,
        })

    } catch (e) {

        return res.status(200).json({

            message: "some error occured while getting project",
            data: null,
            error: e.message,

        })

    }
}



const getSpecificProject = async (req, res) => {

    try {

        const { status } = req.params;

        if (!status) {

            return res.status(400).json({ msg: 'Please provide a title' });

        }

        const project = await Project.find({ status: status });

        if (!project) {

            return res.status(400).json({

                message: "No project found with this title",
                data: null,
                error: null,

            })
        }

        return res.status(200).json({

            message: "Project fetched successfully",
            data: project,
            error: null,

        })


    } catch (e) {

        console.log(e);

        return res.status(400).json({

            message: "some error occured while getting single project",
            data: null,
            error: null,
        })

    }
}



module.exports = {createProject,getAllProjects,getSpecificProject};


