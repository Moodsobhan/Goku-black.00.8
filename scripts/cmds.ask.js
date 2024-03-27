const axios = require('axios');

const Prefixes = [
  'Shisui', 
  'ai'
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "Shïsûį",
    longDescription: "AI", 
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply(" Salut moi c'est  Ken-Bot-V3 une intelligence 🐲artificielle🦄 créé par Kenneth🐯 Amedegbe quelle est ta question? 🐯");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `🐯Kenneth🐯
━━━━━━━━━━━━━        
${answer}
━━━━━━━━━━━━━`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
