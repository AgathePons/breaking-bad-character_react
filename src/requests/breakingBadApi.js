// == Import
import axios from 'axios';

const requestCharacters = async () => {
  try {
    return await axios.get('https://www.breakingbadapi.com/api/characters');
  }
  catch (err) {
    console.error(err.response);
    return false;
  }
};
export default requestCharacters;
