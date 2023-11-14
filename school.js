class School {
    constructor(name) {
      this.name = name;
      this.students = [];
      this.courses = [];
    }
  
    addCourse(course) {
      if (!this.courses.includes(course)) {
        this.courses.push(course);
      }
    }
  
    addStudent(student) {
      if (!this.students.includes(student) && student.age() >= 6) {
        student.setId(this.students.length + 1);
        this.students.push(student);
      }
    }
  
    addStudentGrade(student, course, grade) {
      if (this.students.includes(student) && this.courses.includes(course)) {
        course.addGrade(student, grade);
      }
    }
  
    getStudents() {
      return this.students;
    }
  
    getCourses() {
      return this.courses;
    }
  
    getStudentsOrderedByAverageGrade() {
      return this.students.slice().sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }
  }
  
  module.exports = School;
  