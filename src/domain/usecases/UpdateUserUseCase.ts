import User from "../entities/User";
import {IUserRepository} from "../repositories/IUserRepository";

export class updateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(user: User): Promise<void> {
        const existingUser = await this.userRepository.findById(user.id);

        if (!existingUser) {
            throw new Error("User not found");
        }

        await this.userRepository.update(user);
    }
}