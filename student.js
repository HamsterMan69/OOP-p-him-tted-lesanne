const Person = require('./person');

class Student extends Person {
  constructor(name) {
    super(name);
    this.id = null;
    this.grades = [];
  }

  setId(id) {
    if (this.id === null) {
      this.id = id;
    }
  }

  getId() {
    return this.id;
  }

  getGrades() {
    return this.grades;
  }

  addGrade(course, grade) {
    this.grades.push({ course, grade });
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return -1;
    }

    const totalGrades = this.grades.reduce((sum, { grade }) => sum + grade, 0);
    return totalGrades / this.grades.length;
  }

  description() {
    return `${this.name} is a student.`;
  }
}

module.exports = Student;
