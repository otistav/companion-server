import {
  Router,
} from 'express';
import { index, login, register } from '../controllers/auth';

const router = Router();

router.get('/', index);
router.post('/login', login);
router.post('/register', register);

export default router;
