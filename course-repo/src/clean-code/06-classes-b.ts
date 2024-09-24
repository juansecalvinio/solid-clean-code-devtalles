(() => {
  // No aplicando el principio de responsabilidad única

  // Refactorizando el código anterior (06-classes-a.ts)

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  const person = new Person({
    name: "John Doe",
    gender: "M",
    birthdate: new Date("1990-01-01"),
  });

  interface UserProps {
    person: Person;
    email: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ person, email, role }: UserProps) {
      super(person);
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  const user = new User({
    person,
    email: "johndoe@email.org",
    role: "admin",
  });

  interface UserSettingsProps {
    user: User;
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ user, workingDirectory, lastOpenFolder }: UserSettingsProps) {
      super({ person, email: user.email, role: user.role });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    user,
    workingDirectory: "/user/home/",
    lastOpenFolder: "/home",
  });

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
