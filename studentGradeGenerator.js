function getStudentGrade(marks) {
    if (marks > 100 || marks < 0) {
      console.log("Please enter a value between 0 and 100.");
    } else if (marks > 79) {
      console.log("Grade: A");
    } else if (marks >= 60) {
      console.log("Grade: B");
    } else if (marks >= 50) {
      console.log("Grade: C");
    } else if (marks >= 40) {
      console.log("Grade: D");
    } else {
      console.log("Grade: E");
    }
  }
  
  // Example usage:
  const studentMarks = 35; // Replace with input from user
  getStudentGrade(studentMarks);  