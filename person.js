class Person {
    constructor(name) {
      this.name = name;
      this.birthYear = null;
    }
  
    setDateOfBirth(year) {
      this.birthYear = year;
    }
  
    getDateOfBirth() {
      return this.birthYear;
    }
  
    age() {
      if (!this.birthYear) {
        return null;
      }
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    getName() {
      return this.name;
    }
  
    description() {
      return `${this.name} is a person.`;
    }
  }
  
  module.exports = Person;
  