interface IUser {
  name: string;
  age: number;
}

class User implements IUser {
  name: string;
  age: number;
  constructor({ name, age }: IUser) {
    this.name = name;
    this.age = age;
  }
  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
  public presentation(): string {
    return `Olá, ${this.getName()}, sua idade é: ${this.getAge()}`;
  }
}

export default User;
