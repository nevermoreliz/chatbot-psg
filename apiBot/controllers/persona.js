const { default: axios } = require('axios');
const { adapterDB } = require('../../provider/database')

const getPersonas = async (req, res) => {

    const query = `SELECT * FROM public.persona`;

    const result = await adapterDB.db.query(query)
    const row = result.rows[0];
    res.send({ row })
};

const getApiCursos = async (req, res) => {
    const respuesta = await axios('https://fakestoreapi.com/products')
    const result = respuesta.data
    console.log(respuesta.data);
    
    res.send(result)

}

module.exports = { getPersonas , getApiCursos};