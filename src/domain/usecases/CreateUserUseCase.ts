import User from "../entities/User";
import {IUserRepository} from "../repositories/IUserRepository";

interface createUserDTO {
  name: string;
  email: string;
  password: string;
  username: string;
  birthDate: Date;
}

export class createUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(data: createUserDTO): Promise<User> {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = new User(
            crypto.randomUUID(),
            data.name,
            data.email,
            data.password,
            data.username,
            data.birthDate,
            new Date(),
            new Date()
        );

        await this.userRepository.create(user);
    
        return user;
    }
}