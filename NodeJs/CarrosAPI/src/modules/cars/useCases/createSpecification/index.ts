import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRespository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRespository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);


export { createSpecificationController }