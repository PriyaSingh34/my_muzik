const BASE_URL = "https://shazam.p.rapidapi.com";
const VITE_SHAZAM_CORE_RAPID_API_KEY="3cd0d4657emshea4b969306921fap147176jsn32880f04da4c"

const options = {
  //   params: {
  //     maxResults: "50",
  //   },
  method: "GET",
  headers: {
    "X-RapidAPI-Key": VITE_SHAZAM_CORE_RAPID_API_KEY,
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  const data = await response.json();

  return data;
};
