function simulateCareer() {
  const skill = document.getElementById("skill").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const resultDiv = document.getElementById("result");

  if (skill === "" || education === "" || experience === "") {
    resultDiv.innerHTML = "<p style='color:#ff6b6b; font-weight:600;'>⚠️ Please fill in all fields.</p>";
    return;
  }

  let outcome = "";

  if (experience >= 4) {
    outcome = `With strong experience in ${skill}, you can reach a Senior or Lead role with high growth potential.`;
  } else if (experience >= 2) {
    outcome = `Your ${skill} skills can land you a mid-level role with steady career growth in 3–5 years.`;
  } else {
    outcome = `Start with internships and junior roles in ${skill}. Consistent learning can fast-track your career.`;
  }

  resultDiv.innerHTML = `
    <h3>Career Prediction</h3>
    <p>${outcome}</p>
    <h4>Future Risk</h4>
    <p style="color:var(--muted);">Without continuous upskilling, your growth may slow in 2–3 years.</p>
    <h4>Smart Advice</h4>
    <p style="color:var(--accent);">Focus on certifications, real-world projects, and networking to stay ahead.</p>
  `;
}
