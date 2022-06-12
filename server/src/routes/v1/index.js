import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        status: 'success', 
        code: 200, 
        message: 'Welcome to QG-App'
    })
});

export default router;