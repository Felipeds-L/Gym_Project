export default class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public username: string,
        public birthDate: Date,
        public createdAt: Date,
        public updatedAt: Date
    ) {}
}