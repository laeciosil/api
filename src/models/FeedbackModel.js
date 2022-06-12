import { connection } from '../db/index.js';

export const getAllFeedbackModel = async () => {
  const [feedbacks] = await connection.execute(`SELECT * FROM feedbacks`);
  return feedbacks;
};
export const createFeedbackModel = async (
  id,
  message,
  name,
  email,
  user_id
) => {
  await connection.query(
    `INSERT INTO feedbacks (id, message, name, email, user_id) VALUES (?, ?, ?, ?, ?)`,
    [id, message, name, email, user_id]
  );
};

export const deleteFeedbackModel = async (id) => {
  await connection.execute(`DELETE FROM feedbacks WHERE id = ?`, [id]);
};

export const getFeedbackById = async (id) => {
  const [feedbacks] = await connection.execute(
    `SELECT * FROM feedbacks WHERE id = ?`,
    [id]
  );
  return feedbacks;
};
