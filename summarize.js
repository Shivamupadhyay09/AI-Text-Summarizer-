const axios = require('axios');
async function summarizeText(text) {
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 200,
      "min_length": 100
    }
  });
  let config = {
    method: 'post',
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
    },
    data: data
  };
  try {
    const response = await axios.request(config);
    return response.data[0].summary_text;
  } catch (err) {
    console.log(err);
  }
}




// Allows for summarizeText() to be called outside of this file

module.exports = summarizeText;