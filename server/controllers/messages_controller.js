const messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        let message = {
            id: id,
            text: text,
            time: time
        }
        messages.push(message);
        id++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        const { text } = req.body;
        const messageIndex = messages.findIndex(message => message.id === + req.params.id)

        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const { id } = req.params;
        let index = messages.findIndex(message => {
            message.id === + id
        })
        messages.splice(index, 1);

        res.status(200).send(messages);
    }
}