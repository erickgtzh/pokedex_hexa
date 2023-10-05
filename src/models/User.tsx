class User {
  id: string;
  fullName: string;
  birthDate: string;
  avatarUrl: string;

  constructor(
    id: string,
    fullName: string,
    birthDate: string,
    avatarUrl: string = '',
  ) {
    this.id = id;
    this.fullName = fullName;
    this.birthDate = birthDate;
    this.avatarUrl = avatarUrl;
  }
}

export default User;
