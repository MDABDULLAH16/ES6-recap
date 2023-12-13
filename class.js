class instractor {
  name;
  work = "coding";
  soloGan = "code for career";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  salary(money) {
    console.log(`more code more money ${money}`);
  }
  lifeSupportTime(sesson) {
    console.log(`${sesson} we are connected for Your `);
  }
}
const Jhakar = new instractor("jhankar", "new York");
console.log(Jhakar);
Jhakar.salary(1000);
Jhakar.lifeSupportTime("24 hr");
