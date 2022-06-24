/* Replace with your SQL commands */
CREATE TABLE quotes(
    id SERIAL,
    user_id INTEGER REFERENCES users(id),
    content VARCHAR,
    status VARCHAR,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
