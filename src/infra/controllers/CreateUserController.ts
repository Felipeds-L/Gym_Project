import { CreateUserUseCase } from "../../domain/usecases/CreateUserUseCase";


export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {
    }
    
    async handle(request: any): Promise<any> {
        const {name, username, email, password, birthDate} = request.body;
        try {
            const user = await this.createUserUseCase.execute({
                name,
                username,
                email,
                password,
                birthDate
            });
            return {
                status: 201,
                data: user
            };
        } catch (error: any) {
            return {
                status: 400,
                error: error.message
            };
        }
    }
}
