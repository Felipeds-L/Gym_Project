import User from "../entities/User";
import {IUserRepository} from "../repositories/IUserRepository";

export class findByIDUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(id: string): Promise<User> {
        const user = await this.userRepository.findById(id);
        
        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
}