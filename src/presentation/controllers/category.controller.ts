import {Response,Request} from 'express';
import categoryRepositoryImp from '../../infrastructure/repositories/category.repository';
import categoryDatasorceImp from '../../infrastructure/datasources/typeorm/mysql/categoryImp.datasource';
//import { categoryDto } from '../dtos/category.dto';
//import { categoryDtoTocategory, categoryTocategoryDto } from '../dtos/mappers/categoryDtoTocategory';
const categoryDatasource = new categoryDatasorceImp();
const categoryRepository = new categoryRepositoryImp(categoryDatasource);
export const update = async (req: Request, res: Response) => {
    try {
        const categoryDto = req.body ;
        const id = parseInt(req.params.id);
        categoryRepository.update(id, categoryDto);
        //TODO: mejorar el update
        res.status(200).json({ message: "category updated" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const save = async (req: Request, res: Response) => {
    try {
        const categoryDto = req.body ;
        
        const person = await categoryRepository.add(categoryDto);
            
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
export const getcategories = async (req: Request, res: Response) => {
    try {
        const categorys = await categoryRepository.getAll();
        res.status(200).json(categorys);
    } catch (error) {
        res.status(500).json({ message: "este es un error de get categorys" });
    }
}

export const getcategoryById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const category = await categoryRepository.getCategoryById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
interface query {
    email?:string;
}



interface queryPaginated {
    page:number;
    limit:number;
}
export const getCategoriesPaginated = async (req: Request, res: Response) => {
    try {
        const {page, limit} = req.query as unknown as queryPaginated; 
        
      
        const categorys = await categoryRepository.getCategoryPaginated(page, limit);
        res.status(200).json(categorys

        );
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

