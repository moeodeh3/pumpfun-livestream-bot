import axios from "axios";

// TODO: put your bot token and chat id
const BOT_TOKEN = "";
const CHAT_ID = "";
export const sendTelegramMessage = async (message) => {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: CHAT_ID,
    text: message,
  };
  try {
    const response = await axios.post(url, payload);
    if (response.status === 200) {
      console.log(
        `[${new Date().toISOString()}] Telegram message sent: ${message}`
      );
    } else {
      console.error(
        `[${new Date().toISOString()}] Failed to send Telegram message. Status code: ${
          response.status
        }.`
      );
    }
  } catch (error) {
    console.error(
      `[${new Date().toISOString()}] Error sending Telegram message:`,
      error
    );
  }
};
