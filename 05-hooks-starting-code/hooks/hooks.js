// ^ Note: a class is also a unit and can be tested.
export class User {
  constructor(email) {
    this.email = email;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  clearEmail() {
    this.email = '';
  }
}