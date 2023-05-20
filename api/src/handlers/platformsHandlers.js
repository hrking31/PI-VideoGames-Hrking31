const { createPlatforms } = require("../controllers/platformsControllers");

const getPlatforms = async (req, res) => {
  try {
    const allPlatforms = await createPlatforms();
    res.status(201).json(allPlatforms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPlatforms };
