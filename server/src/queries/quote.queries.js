export default {
  createQuote: `
    INSERT INTO quotes(user_id, content, status) VALUES($1, $2, 'pending') RETURNING *;
    `,

  createUser: `
    INSERT INTO users(first_name, last_name) VALUES($1, $2) RETURNING *;
    `,

  fetchRandomQuote: `
    SELECT 
    quotes.content, 
    quotes.status,
    users.first_name,
    users.last_name
	FROM quotes
    JOIN users ON users.id = quotes.user_id
    WHERE status = 'approved'
	ORDER BY random()
	LIMIT 1;
    `,

    updateQuoteStatus: `
    UPDATE quotes
    SET status = $1, 
    updated_at = NOW()
    WHERE quotes.id = $2
    RETURNING *;
    `,

    fetchAllQuotes: `
    SELECT 
    quotes.content, 
    quotes.status,
    users.first_name,
    users.last_name
	FROM quotes
    JOIN users ON users.id = quotes.user_id
	ORDER BY quotes.created_at DESC;
    `
};
