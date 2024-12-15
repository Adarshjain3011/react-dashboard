const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    language: {
        type: String,
    },
    author: {
        type: String, // Consolidated to one 'author' field
    },
    image: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Project", "Saved", "Shared", "Achievement"], // Restricts to specific values
        required: true, // Ensures status is always provided
    },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

module.exports = mongoose.model("Project", projectSchema);


