import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui

    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not exists!");

    } else {
      if (user.admin == true) {
        return this.usersRepository.list();
      }
      else {
        throw new Error("User is not admin!");
      }
    }


  }
}

export { ListAllUsersUseCase };
