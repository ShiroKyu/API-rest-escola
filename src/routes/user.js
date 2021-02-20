import { Router } from 'express';

// Controllers
import userController from '../controllers/UserController';

// Middlewares
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index); // Lista usuários
router.get('/:id', userController.show); // Lista usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * index -> lista todos os usuários
 * store/create -> cria um novo usuário
 * delete -> apaga um usuário
 * show -> mostra um usuário
 * update -> atualiza um usuário
 */
