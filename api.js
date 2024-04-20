const axios = require("axios");

async function getDetails(id) {
    console.log(id)
    try {
        const response = await axios.get(
            `https://thewebtool.net/api?data=${id}`
        );
       
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
