import { Router } from "express";
import * as controller from '../../controllers/quote.controllers';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        status: 'success', 
        code: 200, 
        message: 'Welcome to QG-App'
    })
});

router.post('/quote', controller.createQuote)
router.get('/random-quote', controller.fetchRandomQuote)
router.patch('/quote/:id', controller.updateQuoteStatus)

export default router;