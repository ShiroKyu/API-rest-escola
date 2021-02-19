import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz Otavio',
      email: 'luiz@teste.com',
      idade: 40,
      peso: 90,
      altura: 1.8,
    });

    return res.json(novoAluno);
  }
}

export default new HomeController();
