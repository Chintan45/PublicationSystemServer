import { Router } from 'express';
import userController from '../controller/userController.js';
import publicationController from '../controller/publicationController.js';

const router = Router(); 

router.get('/', (req, res) => {
    res.send('API Running...');
});

router.post('/addUser', userController.addUser);
router.get('/getUsers', userController.getUsers);
router.delete('/deleteUser', userController.removeUser);
router.put('/updateUser', userController.updateUser);


router.post('/addPublication', publicationController.addPublication);
router.get('/getPublications', publicationController.getPublication);
router.delete('/deletePublication', publicationController.removePublication);
router.put('/updatePublication', publicationController.updatePublication);

export default router;