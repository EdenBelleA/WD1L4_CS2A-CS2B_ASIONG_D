// Function that builds and shows the grade equivalent table
function showGradeEquivalent() {

  // Array of student names
  let students = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];

  // Array of student grades (same order as the names)
  let grades = [92, 85, 78, 97, 74];

  // Start building the output table
  let output = "<h2>Grade Equivalents</h2>";
  output += "<table>";
  output += "<tr>";
  output += "<th>Student Name</th>";
  output += "<th>Grade</th>";
  output += "<th>Equivalent</th>";
  output += "<th>Remark</th>";
  output += "<th>Academic Leader</th>";
  output += "</tr>";

  // Loop through each student using the same index in both arrays
  for (let i = 0; i < students.length; i++) {

    // Evaluate the grade of the current student
    let equivalent = getEquivalent(grades[i]);
    let remark = getRemark(grades[i]);
    let leader = getAcademicLeader(equivalent);

    // Add one table row for the current student
    output += "<tr>";
    output += "<td>" + students[i] + "</td>";
    output += "<td>" + grades[i] + "</td>";
    output += "<td>" + equivalent + "</td>";
    output += "<td>" + remark + "</td>";
    output += "<td>" + leader + "</td>";
    output += "</tr>";
  }

  output += "</table>";

  // Show the result inside the div with id "result"
  document.getElementById("result").innerHTML = output;
}

// Function that returns Passed or Failed
function getRemark(grade) {
  // Ternary operator: 75 or higher is Passed, otherwise Failed
  let remark = (grade >= 75) ? "Passed" : "Failed";
  return remark;
}

// Function that converts a numerical grade to its equivalent
function getEquivalent(grade) {
  let equivalent = "";

  // if...else if checks the grade range from highest to lowest
  if (grade >= 97) {
    equivalent = "1.0";
  } else if (grade >= 94) {
    equivalent = "1.25";
  } else if (grade >= 91) {
    equivalent = "1.5";
  } else if (grade >= 88) {
    equivalent = "1.75";
  } else if (grade >= 85) {
    equivalent = "2.0";
  } else if (grade >= 82) {
    equivalent = "2.25";
  } else if (grade >= 79) {
    equivalent = "2.5";
  } else if (grade >= 76) {
    equivalent = "2.75";
  } else if (grade >= 75) {
    equivalent = "3.0";
  } else {
    equivalent = "Failed";
  }
  return equivalent;
}

// Function that gives the Academic Leader class based on the equivalent
function getAcademicLeader(equivalent) {
  let leader = "";

  // switch compares the equivalent value with each case
  switch (equivalent) {
    case "1.0":
    case "1.25":
      leader = "1st Class Academic Leader";
      break;
    case "1.5":
      leader = "2nd Class Academic Leader";
      break;
    case "1.75":
      leader = "3rd Class Academic Leader";
      break;
    default:
      leader = "-";   // does not qualify
  }
  return leader;
}