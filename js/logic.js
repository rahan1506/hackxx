const result = JSON.parse(localStorage.getItem("careerResult"));

if (result) {
  // Render predicted role and readiness
  document.getElementById("output").innerHTML = `
    <h2>Predicted Role</h2>
    <p style="font-size:1.2rem; color:var(--accent); margin-bottom:16px;">${result.role}</p>

    <h3>Readiness Score</h3>
    <p style="font-size:1.1rem; margin-bottom:12px;">${result.readinessScore}%</p>

    <h3>Career Risk</h3>
    <p style="color:var(--muted);">${result.risk}</p>
  `;

  // Skill Gap Simulation
  const studentSkills = ["HTML", "CSS", "Python", "JavaScript"]; // mock student skills
  const requiredSkills = result.requiredSkills || [];
  const missingSkills = requiredSkills.filter(skill => !studentSkills.includes(skill));

  document.getElementById("skillsOutput").innerHTML = `
    <h3>Skills to Develop</h3>
    <p style="color:var(--muted); margin-bottom:8px; font-size:0.95rem;">Essential skills for your role:</p>
    <ul style="padding-left:18px;">
      ${missingSkills.length > 0 ? missingSkills.map(skill => `<li>${skill}</li>`).join("") : "<li>You have the core skills for this role!</li>"}
    </ul>
  `;

  // Readiness meter
  document.getElementById("readiness").value = result.readinessScore;

  // Generate roadmap steps
  const roadmapSteps = [
    "Focus on learning the missing skills: " + (missingSkills.length > 0 ? missingSkills.join(", ") : "none"),
    "Build small projects to apply your skills",
    "Seek internships or part-time projects",
    "Network with professionals in your field",
    "Continuously update skills as technology evolves"
  ];

  document.getElementById("roadmapOutput").innerHTML = `
    <h3>Your Upskilling Roadmap</h3>
    <p style="color:var(--muted); margin-bottom:8px; font-size:0.95rem;">Steps to reach your goal:</p>
    <ul>
      ${roadmapSteps.map(step => `<li>${step}</li>`).join("")}
    </ul>
  `;
} else {
  // No result found
  document.getElementById("output").innerHTML = `
    <p style="color:var(--muted);">No simulation data found. Please <a href="form.html" style="color:var(--accent);">start a simulation</a>.</p>
  `;
}
