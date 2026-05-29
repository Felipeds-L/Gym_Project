import User from "../../../domain/entities/User"; 
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { PrismaClient } from "@prisma/client"

export class UserRepository implements IUserRepository {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;   
    }

    async create(user: User): Promise<void> {
        await this.db.user.create({
            data: {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
                birthDate: user.birthDate,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        });
    }

    async findById(id: string): Promise<User | null> {
        const user = await this.db.user.findUnique({
            where: { id }
        });
       
        if (!user) {
            return null;
        }
        
        return new User(
            user.id, 
            user.name, 
            user.username, 
            user.email, 
            user.password, 
            user.birthDate, 
            user.createdAt, 
            user.updatedAt);
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.db.user.findUnique({
            where: { email }
        });
       
        if (!user) {
            return null;
        }
        
        return new User(
            user.id, 
            user.name, 
            user.username, 
            user.email, 
            user.password, 
            user.birthDate, 
            user.createdAt, 
            user.updatedAt );
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = await this.db.user.findUnique({
            where: { username }
        });
       
        if (!user) {
            return null;
        }
        
        return new User(
            user.id, 
            user.name, 
            user.username, 
            user.email, 
            user.password, 
            user.birthDate, 
            user.createdAt, 
            user.updatedAt );
    }
    
    async findAll(): Promise<User[]> {
        const users = await this.db.user.findMany();
        return users.map(user => new User(
            user.id, 
            user.name, 
            user.username, 
            user.email, 
            user.password, 
            user.birthDate, 
            user.createdAt, 
            user.updatedAt ));
    }

    async update(user: User): Promise<void> {
        await this.db.user.update({
            where: { id: user.id },
            data: {
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
                birthDate: user.birthDate,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        });
    }

    async delete(id: string): Promise<void> {
        await this.db.user.delete({
            where: { id }
        });
    }
}
