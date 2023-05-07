import { Router } from 'express';
import passport from '../config/passport';
import upload from '../middleware/multerConfig';
import { createUser, getUsers, updateUser } from '../controllers/userController';

const router = Router();
router.post('/users', passport.authenticate('jwt', { session: false }), upload.single('profileImage'), createUser);
router.get('/users', passport.authenticate('jwt', { session: false }), getUsers);
router.put('/users/:id', passport.authenticate('jwt', { session: false }), upload.single('profileImage'), updateUser);

export default router;
