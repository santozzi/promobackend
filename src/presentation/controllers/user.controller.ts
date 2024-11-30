import UserEntity from "../../domain/entities/users/user.entity";
import { Request, Response } from "express";
import UserMysqlTypeormImpDatasource from "../../infrastructure/datasources/userMysqlTypeormImp.datasource";
import { UserModel } from "../../infrastructure/models/user/user.model";
import UserRepository from "../../infrastructure/repositories/user.repository";

interface UserInterface {
  name?: string;
  lastName?: string;
  dni?: string;
  email?: string;
  phone?: string;
  password?: string;
}

const userRepository = new UserRepository(new UserMysqlTypeormImpDatasource());

export const createUser = async (req: Request, res: Response) => {
  console.log(req.body);

  const { name, lastName, dni, email, password, phone } =
    req.body as UserInterface;

  try {
    if (!name || !lastName || !dni || !email || !password || !phone) {
      res.status(400).json({ message: "All fields are required" });
    } else {
      const user = new UserEntity(name, lastName, dni, email, password, phone);

      const userCreated = await userRepository.addUser(user);


      res.status(201).json(userCreated);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};





