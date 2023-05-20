const axios = require("axios");
const { API_KEY } = process.env;

const createPlatforms = async () => {
  try {
    const platformApi = await axios.get(
      `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
    );
    const platforms = platformApi.data.results.map((e) => e.name);
    return platforms;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createPlatforms };
