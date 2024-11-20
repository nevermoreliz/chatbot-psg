const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const { adapterDB, adapterSequelizeDB } = require('./provider/database')
const ServerBotAPI = require('./apiBot')

const welcomFlow = require('./flows/welcom.flow')
const ChatGPTClass = require('./provider/agents/chatgpt.class.js')



// const ChatGPTInstance = new ChatGPTClass()

const main = async () => {

    /**
     * con el adaptador sequelize
     */
    // await adapterSequelizeDB.authenticate();
    
    /**
     * con el adaptador de base de datos del bot-whatsaap
     */
    await adapterDB.init();

    const adapterFlow = createFlow([welcomFlow])

    const adapterProvider = createProvider(BaileysProvider)
    const serverBotApi = new ServerBotAPI(adapterProvider, adapterDB)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    

    // QRPortalWeb()
    serverBotApi.start()
}

main()
