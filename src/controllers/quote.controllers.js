import * as service from '../services/quote.services'

export const createQuote = async (req, res, next) => {
    try {
        const { body } = req;
        const user = await service.createUser(body);
        const quote = await service.createQuote({...body, user_id: user.id});
        return res.status(201).json({
            code: 201,
            status: 'success',
            message: 'Quote created successfully',
            data: quote
        })
    } catch (error) {
        console.log('Error ocurred creating quote', error.message);
    }
}

export const fetchRandomQuote = async (req, res, next) => {
    try {
        const randomQuote = await service.fetchRandomQuote();
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Quote fetched successfully',
            data: randomQuote
        })
    } catch (error) {
        console.log('Error ocurred fetching quote', error.message);
    }
}

export const fetchAllQuotes = async (req, res, next) => {
    try {
        const allQuotes = await service.fetchAllQuotes();
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Quote fetched successfully',
            data: allQuotes
        })
    } catch (error) {
        console.log('Error ocurred fetching quote', error.message);
    }
}

export const updateQuoteStatus = async (req, res, next) => {
    try {
        const { body: { status }, params: { id } } = req;
        const quote = await service.updateQuoteStatus(status, id);
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Quote updated successfully',
            data: quote
        })
    } catch (error) {
        console.log('Error ocurred updating quote', error.message);
    }
}