(() => {
  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const newPerson = new Person("John Doe", "M", new Date("1990-01-01"));
  console.log({ newPerson });
})();
