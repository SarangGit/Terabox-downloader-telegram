const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://terabox.hnn.workers.dev/api/get-info?shorturl=5naGERVYJuIrtUZ9Ew8ZWw&pwd=?data=${id.split("url=")[1]}`
        );
        const linkData = await axios.post("https://terabox.hnn.workers.dev/api/get-download",{"shareid":response.data.sharid,"uk":response.data.uk,"sign":response.data.sign,"timestamp":response.data.time,"fs_id": response.data.list[0].fs_id})
        return linkData.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
