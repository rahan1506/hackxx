const express = require("express");
const router = express.Router();
const careerData = require("../data/careerdata.json");

router.post("/", (req, res) => {
  const { career, education, experience } = req.body;

  if (!career || !education || experience === undefined) {
    return res.status(400).json({ error: "Missing input fields" });
  }

  const selectedCareer = careerData[career];

  if (!selectedCareer) {
    return res.status(404).json({ error: "Career not found" });
  }

  let level = "junior";
  let readinessScore = 40;

  if (experience >= 4) {
    level = "senior";
    readinessScore = 85;
  } else if (experience >= 2) {
    level = "mid";
    readinessScore = 65;
  }

  // Education boost
  if (education === "pg") readinessScore += 10;
  if (education === "diploma") readinessScore -= 5;

  const response = {
    role: selectedCareer.roles[level],
    readinessScore,
    risk: selectedCareer.risk,
    requiredSkills: selectedCareer.skills
  };

  res.json(response);
});

module.exports = router;
