
export const exerciseOption = {
    method: 'GET',
    url: 'https://gym-fit.p.rapidapi.com/exercises/exercise/41aeff91-79d7-4d73-883d-f61d117dc0d8',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;

} 