import path from 'path';
import { fileURLToPath } from 'url';
// disable eslint for this file
/* eslint-disable */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addImage = async (request, response) => {
  const { file } = request;
  
  //fs.unlinkSync(path.resolve(__dirname, '..', 'tmp', 'uploads', file.filename));
  response.status(200).json(file);
};
