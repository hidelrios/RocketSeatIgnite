import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRespository: ISpecificationRepository) { }


    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRespository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");

        }

        this.specificationRespository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase }