const ProjectModel = require("../Model/ProjectModel");

// Get all projects
const getPR = async (req, res) => {
    try {
        const data = await ProjectModel.find({});
        data 
            ? res.status(200).json({ msg: data }) 
            : res.status(400).json({ msg: "Data not found!" });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

// Create a new project
const createPR = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(404).json({ msg: "Image not found." });
        }

        // Process image path
        let image = req.file.path.replace(/\\/g, "/");
        req.body.image = image;

        const data = await ProjectModel.create(req.body);

        data 
            ? res.status(201).json({ msg: "Project created successfully." }) 
            : res.status(400).json({ msg: "Project creation failed." });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

// Edit (Get a single project by ID)
const editPR = async (req, res) => {
    try {
        const data = await ProjectModel.findById(req.params.id);

        data 
            ? res.status(200).json({ msg: data }) 
            : res.status(404).json({ msg: "Project not found." });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

// Update an existing project
const updatePR = async (req, res) => {
    try {
        if (req.file) {
            // Process image path if updated
            let image = req.file.path.replace(/\\/g, "/");
            req.body.image = image;
        }

        const data = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation rules are applied
        });

        data 
            ? res.status(200).json({ msg: "Project updated successfully.", data }) 
            : res.status(404).json({ msg: "Project not found." });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

// Delete a project
const deletePR = async (req, res) => {
    try {
        const data = await ProjectModel.findByIdAndDelete(req.params.id);

        data 
            ? res.status(200).json({ msg: "Project deleted successfully." }) 
            : res.status(404).json({ msg: "Project not found." });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

module.exports = {
    getPR,
    createPR,
    editPR,
    updatePR,
    deletePR,
};
