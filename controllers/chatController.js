const Anthropic = require("@anthropic-ai/sdk");
const axios = require("axios");
const chatComplete = async (req, res) => {
  const { lang, message, apiKey } = req.body;
  const anthropic = new Anthropic({
    apiKey: apiKey, // defaults to process.env["ANTHROPIC_API_KEY"]
  });
  try {
    const msg = await anthropic.messages.create({
      model: "claude-2.1",
      system: `Respond only in ${lang === "bn" ? "Bengali" : "English"}.`,
      max_tokens: 1000,
      temperature: 0,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: message,
            },
          ],
        },
      ],
    });
    console.log(msg);
    return res.status(200).json({
      msg,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const getToken = async (req, res) => {
  const { url } = req.query;
  console.log(req.params, req.query, typeof url, `${url}`);
  const jwtCloudFunctionURL = "https://getjwttoken-fkt6vl2lgq-uc.a.run.app";

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}` || jwtCloudFunctionURL,
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
    return res.status(200).json({
      token: response.data.token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  getToken,
  chatComplete,
};
