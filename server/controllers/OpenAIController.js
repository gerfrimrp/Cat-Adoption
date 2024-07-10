const axios = require("axios");
const { OpenAI } = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

module.exports = class OpenAIController {
  static async generatePromt(req, res, next) {
    try {
      const { preferences } = req.body;
      const { data } = await axios.get("https://api.thecatapi.com/v1/breeds", {
        headers: {
          common: {
            "x-api-key": process.env.CAT_API_KEY,
          },
        },
      });
      const prompt = `My website is called "Cat Adoption App", where users are able to adopt cat based on the user preferences on the cat's breed temperament. Choose the cat breeds that match with this data: ${data}. And the user preferences are ${preferences}. Please response by telling the breed names only`;

      const { choices } = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      const response = choices[0].message.content;

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
};
