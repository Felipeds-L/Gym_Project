import User from "../entities/User";
import {IUserRepository} from "../repositories/IUserRepository";

export class deleteUserUseCase {
    constructor(private userRepository: IUserRepository) {}
    
    async execute(id: string): Promise<void> {
        const existingUser = await this.userRepository.findById(id); 

        if (!existingUser) {
            throw new Error("User not found");
        }

        await this.userRepository.delete(id);
    }
}