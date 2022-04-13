import Axios from 'axios';

const api = Axios.create({
    baseURL: '/api/',
});

const chatapi = {
    getMessages: (groupId) => api.get(`messages/${groupId}`),
    sendMessage: (phone, text) => {
        let msg = {
            sender : phone,
            content: text
        }
        return api.post('send', msg);
    },
    
}

export default chatapi;