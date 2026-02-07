// Career Simulator

class CareerSimulator {
    constructor() {
        this.careers = [];
    }

    addCareer(name, salary, description) {
        const career = { name, salary, description };
        this.careers.push(career);
    }

    simulateCareerGrowth(careerName, years) {
        const career = this.careers.find(c => c.name === careerName);
        if (career) {
            const growth = career.salary * 0.05 * years;
            return `In ${years} years, you could earn ${career.salary + growth} as a ${career.name}.`;
        }
        return 'Career not found.';
    }

    listCareers() {
        return this.careers;
    }
}

// Example Usage
const simulator = new CareerSimulator();
simulator.addCareer('Software Developer', 80000, 'Develop and maintain software applications.');
simulator.addCareer('Data Scientist', 90000, 'Analyze and interpret complex data sets.');

console.log(simulator.listCareers());
console.log(simulator.simulateCareerGrowth('Software Developer', 5));