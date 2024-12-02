import {Response,Request} from 'express';
import UserRepositoryImp from '../../infrastructure/repositories/user.repository';
import UserDatasorceImp from '../../infrastructure/datasources/user/typeorm/mysql/UserImp.datasource';
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
        res.status(500).json({ message: error });
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