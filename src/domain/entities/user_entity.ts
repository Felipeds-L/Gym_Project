export class User{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public username: string,
        public birth_date: Date,
        public created_at: Date,
        public updated_at: Date
    ){}
}