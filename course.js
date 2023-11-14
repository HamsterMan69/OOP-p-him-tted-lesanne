class Course {
    constructor(name) {
      this.name = name;
      this.grades = [];
    }
  
    getGrades() {
      return this.grades;
    }
  
    addGrade(student, grade) {
      this.grades.push({ student, grade });
      student.addGrade(this, grade);
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return -1;
      }
  
      const totalGrades = this.grades.reduce((sum, { grade }) => sum + grade, 0);
      return totalGrades / this.grades.length;
    }
  
    description() {
      return `Course: ${this.name}`;
    }
  }
  
  module.exports = Course;
  