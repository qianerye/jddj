import axios from "axios";

const http = ({ url, method = "get", data = {} }) => {
    return axios({ url, method, data: method === "get" ? "" : data })
        .then(result => {
            return result.data;
        })
        .catch(error => {
            return error.message;
        });
};

export default http