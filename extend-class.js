class TeamMember {
  name;
  work = "Web developer team";
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
class Developer extends TeamMember {
  type;
  constructor(name, location, type) {
    super(name, location, type);
    this.type = type;
  }
  PhoneApps(money) {
    console.log(`more Apps more money ${money}`);
  }
  lifeSupportTime(sesson) {
    console.log(`${sesson} we are connected for Apps `);
  }
}

class JobPlecement extends TeamMember {
  Aria = "all country";
  WorkType;
  constructor(name, location, WorkType) {
    super(name, location);
    this.WorkType = WorkType;
  }
  Time(workTime) {
    console.log(`remote work time ${workTime}`);
  }
  ServiceProvide(time) {
    console.log(`we are service Provide ${time}`);
  }
}

const Alia = new Developer("Alia Bhatt", "india", "mobile");
// console.log(Alia);
// Alia.PhoneApps(100);

const Abdullah = new JobPlecement("Abdullah", "Bangladesh", "remote job");
console.log(Abdullah);
