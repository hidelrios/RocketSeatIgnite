import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepositoty implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name)
        return null
    }
    list(): Category[] {
        return null
    }
    create({name, description}:ICreateCategoryDTO): void {
        console.log(name, description)

    }

}
export {PostgresCategoriesRepositoty}