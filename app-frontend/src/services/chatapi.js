import Axios from 'axios';

const api = Axios.create({
    baseURL: '/api/',
});

const chatapi = {
    getMessages: (groupId) => api.get(`messages/${groupId}`),
    sendMessage: (username, text) => {
        let msg = {
            sender : username,
            content: text
        }
        return api.post('send', msg);
    },
    
}

export default chatapi;