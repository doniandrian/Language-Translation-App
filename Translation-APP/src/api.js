import axios from 'axios';

const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
const baseURL = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

const fetchData = async (text, targetLanguage) => {
  try {
    const response = await axios.post(baseURL, null, {
      params: {
        q: text,
        source: sourceLanguage,
        target: targetLanguage
      }
    });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export { fetchData };
