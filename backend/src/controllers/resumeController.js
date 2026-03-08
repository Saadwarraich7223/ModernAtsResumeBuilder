const Resume = require("../models/Resume");

// @desc    Get all resumes for logged in user
// @route   GET /api/resumes
// @access  Private
const getResumes = async (req, res) => {
  const resumes = await Resume.find({ userId: req.user.id });
  res.status(200).json(resumes);
};

// @desc    Get single resume
// @route   GET /api/resumes/:id
// @access  Private
const getResumeById = async (req, res) => {
  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    return res.status(404).json({ message: "Resume not found" });
  }

  // Check if resume belongs to user
  if (resume.userId.toString() !== req.user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  res.status(200).json(resume);
};

// @desc    Create new resume
// @route   POST /api/resumes
// @access  Private
const createResume = async (req, res) => {
  const { title, data, templateId, settings } = req.body;

  const resume = await Resume.create({
    userId: req.user.id,
    title: title || "Untitled Resume",
    data: data || {},
    templateId: templateId || "minimal-1",
    settings: settings || {},
  });

  res.status(201).json(resume);
};

// @desc    Update resume
// @route   PUT /api/resumes/:id
// @access  Private
const updateResume = async (req, res) => {
  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    return res.status(404).json({ message: "Resume not found" });
  }

  // Check if resume belongs to user
  if (resume.userId.toString() !== req.user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const updatedResume = await Resume.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );

  res.status(200).json(updatedResume);
};

// @desc    Delete resume
// @route   DELETE /api/resumes/:id
// @access  Private
const deleteResume = async (req, res) => {
  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    return res.status(404).json({ message: "Resume not found" });
  }

  // Check if resume belongs to user
  if (resume.userId.toString() !== req.user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  await resume.deleteOne();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getResumes,
  getResumeById,
  createResume,
  updateResume,
  deleteResume,
};
