document.getElementById("careerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const career = document.getElementById("career").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;

  if (!career || !education || !experience) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/simulate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        career,
        education,
        experience: parseInt(experience)
      })
    });

    if (!response.ok) {
      alert(`Error: ${response.statusText}`);
      return;
    }

    const data = await response.json();

    localStorage.setItem("careerResult", JSON.stringify(data));
    window.location.href = "stimulation.html";
  } catch (error) {
    alert("Failed to connect to server. Make sure the backend is running on http://localhost:5000");
    console.error(error);
  }
}
