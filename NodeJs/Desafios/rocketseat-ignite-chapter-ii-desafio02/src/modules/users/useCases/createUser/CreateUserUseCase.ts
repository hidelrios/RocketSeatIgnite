import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const userAlredyExists = this.usersRepository.findByEmail(email);

    if (userAlredyExists) {
      throw new Error("User alredy exists!");
    }
    else{
      const new_user = this.usersRepository.create({ email, name });
      return new_user;
    }

  }
}

export { CreateUserUseCase };
