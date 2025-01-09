import {Response,Request} from 'express';
import UserRepositoryImp from '../../infrastructure/repositories/user.repository';
import UserDatasorceImp from '../../infrastructure/datasources/typeorm/mysql/userImp.datasource';
import { UserDto } from '../dtos/user.dto';
import { userDtoToUser, userToUserDto } from '../dtos/mappers/userDtoToUser';
const personDatasource = new UserDatasorceImp();
const personRepository = new UserRepositoryImp(personDatasource);


export const save = async (req: Request, res: Response) => {
    try {
        const userDto = req.body as UserDto;
        const personEntity = userDtoToUser(userDto);
        const person = await personRepository.add(personEntity);
            
        res.status(200).json(userToUserDto(person));
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await personRepository.getAll();
        res.status(200).json(users.map(userToUserDto));
    } catch (error) {
        res.status(500).json({ message: "este es un error de get users" });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const user = await personRepository.getUserById(id);
        res.status(200).json(userToUserDto(user));
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
interface query {
    email?:string;
}
export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const {email} = (req.query) as unknown as query;
        console.log('este es el email: ',email);
        
         if(!email){
            throw new Error("User not found");
        }
        
        const user = await personRepository.getUserByEmail(email);
        res.status(200).json(userToUserDto(user));
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
export const saveList = async (req: Request, res: Response) => {
    try {
        const usersDto = req.body as UserDto[];
        const users = usersDto.map(userDtoToUser);
        console.log(users);
        
        for (const user of users) {
            await personRepository.add(user);
        } 
        
        res.status(200).json({message: 'Users saved'});
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

interface queryPaginated {
    page:number;
    limit:number;
}
export const getUsersPaginated = async (req: Request, res: Response) => {
    try {
        const {page, limit} = req.query as unknown as queryPaginated; 
        
      
        const users = await personRepository.getUserPaginated(page, limit);
        res.status(200).json(users.map(userToUserDto));
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const signIn = async (req: Request, res: Response) => {
    try {
       const {username, password} = req.body;
       const user = await personRepository.signin(username, password);
       res.status(200).json(user);
    } catch (error) {
        if(error instanceof Error)
            res.status(401).json({ message: error.message});
       
    }
}