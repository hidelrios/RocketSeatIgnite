import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;
      const user_admin = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).json(user_admin).send();
      
    } catch (error) {
      return response.status(404).json({error: error.message})
      
    }


  }
}

export { TurnUserAdminController };
