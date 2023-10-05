export default class User {
  avatarUrl: string;
  fullName: string;
  birthDate: string;

  constructor(avatarUrl: string, fullName: string, birthDate: string) {
    this.avatarUrl = avatarUrl;
    this.fullName = fullName;
    this.birthDate = birthDate;
  }
}
