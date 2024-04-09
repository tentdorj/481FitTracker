
export const exerciseOption = {
  method: 'GET',
  url: 'https://work-out-api1.p.rapidapi.com/search',
  params: {Muscles: 'biceps'},
  headers: {
    'X-RapidAPI-Key': 'fe741f606emshfd04311515f3ab9p1c995ejsn5fcd3b6d045d',
    'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;

} 