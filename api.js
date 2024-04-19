const axios = require("axios");

async function getDetails(id) {
    console.log(id)
    try {
        const response = await axios.get(
            `http://ec2-3-108-22-254.ap-south-1.compute.amazonaws.com/api?data=${id}`
        );
        console.log(response)
        //const linkData = await axios.post("https://terabox.hnn.workers.dev/api/get-download",{"shareid":response.data.shareid,"uk":response.data.uk,"sign":response.data.sign,"timestamp":response.data.timestamp,"fs_id": response.data.list[0].fs_id})
        //console.log(linkData)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
