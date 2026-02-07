# CareerSim – Career Trajectory Simulator

A web-based simulator that helps students predict long-term career outcomes based on education level, experience, and chosen field. Bridging students from campus to corporate life with data-driven insights.

## Problem Statement

**Career decisions lack long-term insight.** Students often choose careers without understanding how their choices will shape their future, leading to mismatched roles, slow growth, and dissatisfaction.

## Solution

CareerSim simulates future career trajectories and highlights skill gaps, helping students make informed decisions before entering the corporate world.

---

## Features

✅ **Career Simulation** – Input your career path, education, and experience to get a predicted role and readiness score  
✅ **Skill Gap Analysis** – Identifies skills you need to develop for your target role  
✅ **Upskilling Roadmap** – Provides actionable steps to close skill gaps  
✅ **Responsive Design** – Modern glassmorphism UI, works seamlessly on all devices  
✅ **Real-time Feedback** – Instant predictions with risk assessment  

---

## Tech Stack

### Frontend
- **HTML5** – Semantic markup
- **CSS3** – Glassmorphism design, responsive grid/flexbox, CSS variables
- **JavaScript** – DOM manipulation, localStorage for state persistence

### Backend
- **Node.js** – Runtime environment
- **Express.js** – REST API framework
- **CORS** – Cross-Origin Resource Sharing support

---

## Project Structure

```
hackx/
├── index.html              # Home page with hero, trajectory, simulator, impact sections
├── form.html               # Career simulation form
├── stimulation.html        # Results page (prediction, skills, roadmap)
├── css/
│   ├── styles.css          # Main styles (glassmorphism, responsive)
│   └── components.css      # (Reserved for component-specific styles)
├── js/
│   ├── script.js           # Home page quick simulator
│   ├── main.js             # Form submission handler + API integration
│   ├── logic.js            # Results page rendering logic
│   └── data.js             # (Reserved for client-side data)
├── backend/
│   ├── server.js           # Express server entry point
│   ├── package.json        # Backend dependencies
│   ├── routes/
│   │   └── stimulate.js    # /simulate POST endpoint
│   └── data/
│       └── careerdata.json # Career definitions & skills matrix
├── assets/
│   ├── icons/              # (For future use)
│   └── images/             # (For future use)
└── README.md               # This file
```

---

## Setup & Installation

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Start the Backend Server

```bash
npm start
```

Server runs on **http://localhost:5000**

### 3. Open Frontend

- Open `index.html` in your browser, or
- Serve the project using a static server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000` (or your server's port)

---

## Usage

1. **Home Page** (`index.html`)
   - View career trajectories and overview
   - Quick simulation on the home page, or

2. **Start Simulation** (`form.html`)
   - Select a career (Web Development, Data Science, etc.)
   - Choose education level (Diploma, UG, PG)
   - Enter years of experience
   - Click "Simulate"

3. **View Results** (`stimulation.html`)
   - See predicted role based on inputs
   - Check readiness score (readiness meter)
   - Identify skills to develop
   - Follow upskilling roadmap with actionable steps

---

## API Endpoints

### POST /simulate

**Request:**
```json
{
  "career": "Web Development",
  "education": "ug",
  "experience": 2
}
```

**Response:**
```json
{
  "role": "Full Stack Developer",
  "readinessScore": 65,
  "risk": "Technology changes fast. Continuous learning is required.",
  "requiredSkills": ["HTML", "CSS", "JavaScript", "React", "Backend Basics"]
}
```

**Status Codes:**
- `200` – Success
- `400` – Missing input fields
- `404` – Career not found

---

## Career Data

Careers and roles are defined in `backend/data/careerdata.json`:

```json
{
  "Web Development": {
    "skills": ["HTML", "CSS", "JavaScript", "React", "Backend Basics"],
    "roles": {
      "junior": "Junior Web Developer",
      "mid": "Full Stack Developer",
      "senior": "Tech Lead / Architect"
    },
    "risk": "Technology changes fast. Continuous learning is required."
  },
  "Data Science": {
    "skills": ["Python", "Statistics", "Machine Learning", "SQL"],
    "roles": {
      "junior": "Data Analyst",
      "mid": "Data Scientist",
      "senior": "AI/ML Specialist"
    },
    "risk": "Strong math and domain knowledge are essential."
  }
}
```

Add more careers to expand the simulator!

---

## Future Enhancements

🎯 **Short-term:**
- Add more careers (DevOps, Cloud, Mobile, etc.)
- Implement user accounts and progress tracking
- Add skill proficiency levels

🎯 **Medium-term:**
- AI/ML-based career prediction using real-world datasets
- Integration with job portals (LinkedIn, Indeed)
- Personalized learning recommendations

🎯 **Long-term:**
- Corporate mentorship matching
- Real-time labor market trend analysis
- Integration with Coursera, Udemy for skill recommendations
- Interactive career path visualization

---

## Design Philosophy

### UI/UX Theme: Glassmorphism
- **Modern aesthetic** with translucent elements
- **Smooth animations** for interactive feedback
- **Responsive grid layouts** using CSS Grid and Flexbox
- **Dark theme** with cyan (`#00e5ff`) accent for high contrast and readability

### Color Palette
- **Primary Gradient:** Dark blue to teal (`#0f2027` → `#2c5364`)
- **Accent:** Cyan (`#00e5ff`)
- **Accent Hover:** Darker teal (`#00bcd4`)
- **Text:** White with opacity for hierarchy

### Typography
- **Font:** Inter (system fallback: Segoe UI, Roboto)
- **Headings:** Bold, prominent, using CSS clamp() for responsiveness
- **Body:** Regular weight, muted opacity for secondary text

---

## Key Fixes Applied

✅ Backend import path: Fixed `careerData.json` → `careerdata.json`  
✅ Frontend redirect: Fixed `simulation.html` → `stimulation.html`  
✅ HTML structure: Added `.section-panel`, `.section-header`, `.grid` for consistent styling  
✅ Error handling: Added validation in form submission + try-catch for API calls  
✅ Result rendering: Improved `js/logic.js` with fallback UI and proper styling  

---

## Testing

1. **Backend API Test:**
   ```bash
   curl -X POST http://localhost:5000/simulate \
     -H "Content-Type: application/json" \
     -d '{"career":"Web Development","education":"ug","experience":2}'
   ```

2. **Frontend Flow Test:**
   - Open `form.html`
   - Fill the form and submit
   - Verify redirect to `stimulation.html` with results

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid, Flexbox, and Gradient support required
- localStorage API required

---

## License

Open source – feel free to fork and customize!

---

## Team

**Tech Dudes** – Building the bridge from Career to Corporate

---

## Questions & Support

For issues, feature requests, or contributions, feel free to open an issue or contact the team!
