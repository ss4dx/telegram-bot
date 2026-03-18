// index.js
const TelegramBot = require('node-telegram-bot-api');

// Use BOT_TOKEN from environment variables
const bot = new TelegramBot(process.env.8764968255:AAH_f0HtxLplp1rlMfmT0AhpH5LvapC-mqc, { polling: true });

// ===== /start command =====
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendPhoto(chatId, "https://i.imgur.com/your-welcome-image.jpg", {
        caption: "📄 *Welcome!*\n\nChoose an option below:",
        parse_mode: "Markdown",
        reply_markup: {
            inline_keyboard: [
                [{ text: "💰 Price List", callback_data: "prices" }],
                [{ text: "📝 Order Translation", callback_data: "order" }],
                [{ text: "🌐 Languages", callback_data: "languages" }],
                [{ text: "ℹ️ About", callback_data: "about" }],
                [{ text: "📞 Contact", callback_data: "contact" }],
                [{ text: "❓ FAQ", callback_data: "faq" }]
            ]
        }
    });
});

// ===== Handle button clicks =====
bot.on('callback_query', (query) => {
    const data = query.data;
    const chatId = query.message.chat.id;
    const messageId = query.message.message_id;

    // ---- MENU ----
    if (data === "menu") {
        bot.editMessageCaption("📄 *Welcome!*\n\nChoose an option below:", {
            chat_id: chatId,
            message_id: messageId,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "💰 Price List", callback_data: "prices" }],
                    [{ text: "📝 Order Translation", callback_data: "order" }],
                    [{ text: "🌐 Languages", callback_data: "languages" }],
                    [{ text: "ℹ️ About", callback_data: "about" }],
                    [{ text: "📞 Contact", callback_data: "contact" }],
                    [{ text: "❓ FAQ", callback_data: "faq" }]
                ]
            }
        });
    }

    // ---- PRICE LIST ----
    else if (data === "prices") {
        bot.editMessageCaption(
            "💰 *PRICE LIST*\n\n" +
            "━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
            "🇷🇺 *Russian → English*\n" +
            "• Standard: $12/page\n" +
            "• Express: $22/page\n" +
            "• Certified: $35/page\n\n" +
            "━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
            "🇷🇺 *Russian → Greek*\n" +
            "• Standard: $15/page\n" +
            "• Express: $25/page\n" +
            "• Certified: $38/page\n\n" +
            "📏 Minimum: 2 pages",
            {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "📝 Order Now", callback_data: "order" }],
                        [{ text: "« Back", callback_data: "menu" }]
                    ]
                }
            }
        );
    }

    // ---- ORDER ----
    else if (data === "order") {
        bot.editMessageCaption(
            "📝 *PLACE YOUR ORDER*\n\nSelect translation:",
            {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🇷🇺 → 🇬🇧 Russian → English", callback_data: "order_ru_en" }],
                        [{ text: "🇷🇺 → 🇬🇷 Russian → Greek", callback_data: "order_ru_gr" }],
                        [{ text: "« Back", callback_data: "menu" }]
                    ]
                }
            }
        );
    }

    // ---- LANGUAGES ----
    else if (data === "languages") {
        bot.editMessageCaption(
            "🌐 *LANGUAGES*\n\n" +
            "English ↔ Spanish\n" +
            "English ↔ French\n" +
            "English ↔ German\n" +
            "English ↔ Italian\n" +
            "English ↔ Portuguese\n" +
            "English ↔ Russian\n" +
            "English ↔ Arabic\n" +
            "English ↔ Chinese\n" +
            "English ↔ Japanese\n" +
            "English ↔ Korean",
            {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "« Back", callback_data: "menu" }]
                    ]
                }
            }
        );
    }

    // ---- ABOUT ----
    else if (data === "about") {
        bot.editMessageCaption(
            "ℹ️ *ABOUT*\n\n" +
            "Professional translation services.\n" +
            "✔ Fast\n✔ Accurate\n✔ Certified",
            {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "« Back", callback_data: "menu" }]
                    ]
                }
            }
        );
    }

    // ---- CONTACT ----
    else if (data === "contact") {
        bot.editMessageCaption(
            "📞 *CONTACT*\n\n" +
            "Telegram: @yourusername\n" +
            "Email: your@email.com",
            {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "« Back", callback_data: "menu" }]
                    ]
                }
            }
        );
    }

    // ---- FAQ ----
    else if (data === "faq") {
        bot.editMessageCaption(
            "❓ *FAQ*\n\n" +
            "*Q:* How long does it take?\n*A:* 1–3 days\n\n" +
            "*Q:* Certified?\n*A:* Yes",
            {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "« Back", callback_data: "menu" }]
                    ]
                }
            }
        );
    }

    // ---- ORDER OPTIONS ----
    else if (data === "order_ru_en") {
        bot.editMessageCaption(
            "📝 *ORDER: Russian → English*\n\nSend your document here 📎",
            {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "« Back", callback_data: "order" }]
                    ]
                }
            }
        );
    }
    else if (data === "order_ru_gr") {
        bot.editMessageCaption(
            "📝 *ORDER: Russian → Greek*\n\nSend your document here 📎",
            {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "« Back", callback_data: "order" }]
                    ]
                }
            }
        );
    }
});
