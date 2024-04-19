const axios = require("axios");

async function getDetails(id) {
    console.log(id)
    try {
        const response = await axios.get(
            `http://ec2-3-108-22-254.ap-south-1.compute.amazonaws.com/api?data=${id}`
        );
       
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
