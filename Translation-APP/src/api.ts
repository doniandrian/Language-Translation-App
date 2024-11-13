import axios, { AxiosResponse } from 'axios';

const baseURL = 'https://translation.googleapis.com/language/translate/v2';
const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

const fetchData = async (
  text: string,
  sourceLanguage: string,
  targetLanguage: string
): Promise<string | null> => {
  try {
    const response: AxiosResponse<{ data: { translations: { translatedText: string }[] } }> = await axios.post(baseURL, null, {
      params: {
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        key: apiKey
      }
    });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error(
      'Error fetching data:',
      error instanceof Error ? error.message : 'Unknown error'
    );
    return null;
  }
};

export { fetchData };
