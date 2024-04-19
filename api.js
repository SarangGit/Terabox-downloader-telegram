const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://terabox.hnn.workers.dev/api/get-info?shorturl=5naGERVYJuIrtUZ9Ew8ZWw&pwd=?data=${id.split("url=")[1]}`
        );
        const linkData = const await axios.post("https://terabox.hnn.workers.dev/api/get-download", [...response.data, "fs_id": response.data.list[0].fs_id])
        return linkData.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
