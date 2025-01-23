import React, { useState } from "react";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    taskName: "",
    category: "Other",
    description: "",
    priority: "Medium",
    startDate: "",
    endDate: "",
    status: "Not Started",
    subtasks: [{ title: "", status: "Not Started" }],
    resources: [""],
    timeEstimate: "",
    assignedTo: "",
    progressNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubtaskChange = (index, field, value) => {
    const updatedSubtasks = [...formData.subtasks];
    updatedSubtasks[index][field] = value;
    setFormData({ ...formData, subtasks: updatedSubtasks });
  };

  const addSubtask = () => {
    setFormData({
      ...formData,
      subtasks: [...formData.subtasks, { title: "", status: "Not Started" }],
    });
  };

  const handleResourceChange = (index, value) => {
    const updatedResources = [...formData.resources];
    updatedResources[index] = value;
    setFormData({ ...formData, resources: updatedResources });
  };

  const addResource = () => {
    setFormData({
      ...formData,
      resources: [...formData.resources, ""],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create Task</h2>

      <div className="mb-4">
        <label htmlFor="taskName" className="block text-gray-700 font-medium mb-2">
          Task Name
        </label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          value={formData.taskName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="Fitness">Fitness</option>
          <option value="Diet">Diet</option>
          <option value="Work">Work</option>
          <option value="Learning">Learning</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 font-medium mb-2">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-gray-700 font-medium mb-2">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="On Hold">On Hold</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Subtasks</label>
        {formData.subtasks.map((subtask, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Subtask Title"
              value={subtask.title}
              onChange={(e) => handleSubtaskChange(index, "title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            <select
              value={subtask.status}
              onChange={(e) => handleSubtaskChange(index, "status", e.target.value)}
              className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        ))}
        <button
          type="button"
          onClick={addSubtask}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Subtask
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Resources</label>
        {formData.resources.map((resource, index) => (
          <input
            key={index}
            type="text"
            placeholder="Resource Link"
            value={resource}
            onChange={(e) => handleResourceChange(index, e.target.value)}
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        ))}
        <button
          type="button"
          onClick={addResource}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Resource
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="timeEstimate" className="block text-gray-700 font-medium mb-2">
          Time Estimate
        </label>
        <input
          type="text"
          id="timeEstimate"
          name="timeEstimate"
          value={formData.timeEstimate}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="assignedTo" className="block text-gray-700 font-medium mb-2">
          Assigned To
        </label>
        <input
          type="text"
          id="assignedTo"
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="progressNotes" className="block text-gray-700 font-medium mb-2">
          Progress Notes
        </label>
        <textarea
          id="progressNotes"
          name="progressNotes"
          value={formData.progressNotes}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600"
      >
        Submit Task
      </button>
    </form>
  );
};

export default TaskForm;
