(() => {
  // Aplicando el principio de responsabilidad única

  // Refactorizando el código anterior (06-classes-b.ts)

  // NOTE: Hay que intentar evitar las extenciones de clases
  // Priorizar la composición frente a la herencia

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

  // El usuario no necesita los datos de una persona
  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  const user = new User({
    email: "johndoe@email.org",
    role: "admin",
  });

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const settings = new Settings({
    workingDirectory: "/user/home/",
    lastOpenFolder: "/home",
  });

  // UserSettings va a ser una composición entre User y Settings, pero no una herencia
  interface UserSettingsProps {
    name: string;
    gender: Gender;
    birthdate: Date;
    email: string;
    role: string;
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    name: person.name,
    birthdate: person.birthdate,
    gender: person.gender,
    email: user.email,
    role: user.role,
    lastOpenFolder: settings.lastOpenFolder,
    workingDirectory: settings.workingDirectory,
  });

  console.log({
    userSettings,
  });
})();
