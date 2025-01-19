import {Response,Request} from 'express';
import productRepositoryImp from '../../infrastructure/repositories/product.repository';
import ProductDatasorceImp from '../../infrastructure/datasources/typeorm/mysql/productImp.datasource';

const prodcutDatasource = new ProductDatasorceImp();
const productRepository = new productRepositoryImp(prodcutDatasource);


export const update = async (req: Request, res: Response) => {
    try {
        const productDto = req.body ;
        const id = parseInt(req.params.id);
        productRepository.update(id, productDto);
        //TODO: mejorar el update
        res.status(200).json({ message: "product updated" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const save = async (req: Request, res: Response) => {
    try {
        const productDto = req.body ;
        
        const producto = await productRepository.add(productDto);
            
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productRepository.getAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "este es un error de get products" });
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const producto = await productRepository.getProductById(id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

interface queryPaginated {
    page:number;
    limit:number;
}
export const getProductsPaginated = async (req: Request, res: Response) => {
    try {
        const {page, limit} = req.query as unknown as queryPaginated; 
        
      
        const productos = await productRepository.getProductPaginated(page, limit);
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

