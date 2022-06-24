import db from "../config/db";
import quoteQueries from "../queries/quote.queries";

export const createQuote = async (data) => {
    const payload = [data.user_id, data.content];
    const [quote] = await db.any(quoteQueries.createQuote, payload);
    return quote;
}

export const createUser = async (data) => {
    const payload = [data.first_name, data.last_name];
    const [user] = await db.any(quoteQueries.createUser, payload);
    return user;
}

export const fetchRandomQuote = async () => {
    const [randomQuote] = await db.any(quoteQueries.fetchRandomQuote);
    return randomQuote;
}

export const fetchAllQuotes = async () => {
    const allQuotes = await db.any(quoteQueries.fetchAllQuotes);
    return allQuotes;
}

export const updateQuoteStatus = async (status, id) => {
    const payload = [status, id]
    const [quoteStatus] = await db.any(quoteQueries.updateQuoteStatus, payload);
    return quoteStatus;
}