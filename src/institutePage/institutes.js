// Sample data for branches, subjects, modules, and professors
const branchData = {
  RNS: [
    "AIML",
    "Computer Science Engineering",
    "Civil Engineering",
    "Electronics and Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
  ],
  DSCE: [
    "AIML",
    "Computer Science Engineering",
    "Civil Engineering",
    "Data Science",
    "Electrical Engineering",
    "Mechanical Engineering",
  ],
  JSSATE: [
    "AIML",
    "Computer Science Engineering",
    "Civil Engineering",
    "CyberSecurity",
    "Electrical Engineering",
    "Mechanical Engineering",
  ],
  other: [
    "AIML",
    "Computer Science Engineering",
    "Civil Engineering",
    "Data Science",
    "Electrical Engineering",
    "Mechanical Engineering",
  ],
};

const subjectData = {
  AIML: ["Operating System", "Software Engineering", "Embedded System"],
  "Mechanical Engineering": [
    "Solid Mechanics",
    "Thermodynamics",
    "Engineering Metallurgy",
    "Fluid Mechanics",
    "Strength of Materials",
    "Mechanical Measurement",
    "Manufacturing Processes",
    "Numerical Analysis",
    "Heat Transfer",
    "Kinematics and Dynamics of Machines",
    "Machine Design",
    "CAD and Finite Element Analysis",
  ],
  "Electrical Engineering": [
    "Electrical Machines",
    "Power Systems",
    "Control Systems",
    "Signals and Systems",
    "Microprocessors",
    "Semiconductor Devices",
    "Electric Power Quality",
    "Fibre Optic Sensors",
    "Electric Drives",
    "Smart Grid Technology",
    "Computer Vision",
  ],
  "Civil Engineering": [
    "Solid Mechanics",
    "Water Supply Engineering",
    "Geometrics Engineering-I",
    "Fluid Mechanics",
    "Structural Analysis-I",
    "Highway and Traffic Engineering",
    "Soil Mechanics",
    "Construction Planning and Management",
    "Building Materials and Construction Technology",
  ],
  // ... add more subjects for other branches
};

const moduleData = {
  "Operating System": [
    "Module-1 (OS)",
    "Module-2 (OS)",
    "Module-3 (OS)",
    "Module-4 (OS)",
    "Module-5 (OS)",
  ],
  "Software Engineering": [
    "Module-1 (SE)",
    "Module-2 (SE)",
    "Module-3 (SE)",
    "Module-4 (SE)",
    "Module-5 (SE)",
  ],
  "Embedded System": [
    "Module-1 (ES)",
    "Module-2 (ES)",
    "Module-3 (ES)",
    "Module-4 (ES)",
    "Module-5 (ES)",
  ],
  // ... add more modules for other subjects
};

const professorData = {
  "Module-1 (OS)": ["Lakshmi V", "Suresh Gowda", "Hemanth S"],
  "Module-2 (OS)": ["Lakshmi V", "Raghu K", "Hemanth S"],
  "Module-3 (OS)": ["Lakshmi V", "Virendra M"],
  "Module-4 (OS)": ["Lakshmi V", "Suresh Gowda"],
  "Module-5 (OS)": ["Lakshmi V", "Hemanth S"],

  "Module-1 (SE)": ["Lakshmi V", "Suresh Gowda", "Hemanth S"],
  "Module-2 (SE)": ["Lakshmi V", "Raghu K", "Hemanth S"],
  "Module-3 (SE)": ["Lakshmi V", "Virendra M"],
  "Module-4 (SE)": ["Lakshmi V", "Suresh Gowda"],
  "Module-5 (SE)": ["Lakshmi V", "Hemanth S"],

  "Module-1 (ES)": ["Lakshmi V", "Suresh Gowda", "Hemanth S"],
  "Module-2 (ES)": ["Lakshmi V", "Raghu K", "Hemanth S"],
  "Module-3 (ES)": ["Lakshmi V", "Virendra M"],
  "Module-4 (ES)": ["Lakshmi V", "Suresh Gowda"],
  "Module-5 (ES)": ["Lakshmi V", "Hemanth S"],
  // ... add more professors for other modules
};

function updateBranches() {
  const collegeSelect = document.getElementById("college");
  const branchSelect = document.getElementById("branch");
  const selectedCollege = collegeSelect.value;

  // Clear previous options
  branchSelect.innerHTML =
    '<option value="" disabled selected>Select a branch</option>';

  // Add new options based on the selected college
  if (selectedCollege && branchData[selectedCollege]) {
    branchData[selectedCollege].forEach((branch) => {
      const option = document.createElement("option");
      option.value = branch;
      option.text = branch;
      branchSelect.add(option);
    });
  }

  // Reset dependent dropdowns
  document.getElementById("subject").innerHTML =
    '<option value="" disabled selected>Select a subject</option>';
  document.getElementById("moduleNo").innerHTML =
    '<option value="" disabled selected>Select a module number</option>';
  document.getElementById("professor").innerHTML =
    '<option value="" disabled selected>Select a professor</option>';
}

function updateSubjects() {
  const branchSelect = document.getElementById("branch");
  const subjectSelect = document.getElementById("subject");
  const selectedBranch = branchSelect.value;

  // Clear previous options
  subjectSelect.innerHTML =
    '<option value="" disabled selected>Select a subject</option>';

  // Add new options based on the selected branch
  if (selectedBranch && subjectData[selectedBranch]) {
    subjectData[selectedBranch].forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.text = subject;
      subjectSelect.add(option);
    });
  }

  // Reset dependent dropdowns
  document.getElementById("moduleNo").innerHTML =
    '<option value="" disabled selected>Select a module number</option>';
  document.getElementById("professor").innerHTML =
    '<option value="" disabled selected>Select a professor</option>';
}

function updateModules() {
  const subjectSelect = document.getElementById("subject");
  const moduleSelect = document.getElementById("moduleNo");
  const selectedSubject = subjectSelect.value;

  // Clear previous options
  moduleSelect.innerHTML =
    '<option value="" disabled selected>Select a module number</option>';

  // Add new options based on the selected subject
  if (selectedSubject && moduleData[selectedSubject]) {
    moduleData[selectedSubject].forEach((moduleNo) => {
      const option = document.createElement("option");
      option.value = moduleNo;
      option.text = moduleNo;
      moduleSelect.add(option);
    });
  }

  // Reset dependent dropdown
  document.getElementById("professor").innerHTML =
    '<option value="" disabled selected>Select a professor</option>';
}

function updateProfessors() {
  const moduleSelect = document.getElementById("moduleNo");
  const professorSelect = document.getElementById("professor");
  const selectedModule = moduleSelect.value;

  // Clear previous options
  professorSelect.innerHTML =
    '<option value="" disabled selected>Select a professor</option>';

  // Add new options based on the selected module
  if (selectedModule && professorData[selectedModule]) {
    professorData[selectedModule].forEach((professor) => {
      const option = document.createElement("option");
      option.value = professor;
      option.text = professor;
      professorSelect.add(option);
    });
  }
}
