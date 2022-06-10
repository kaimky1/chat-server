let messages = [];
let id = 0;

module.exports = {
  createMessage: (req, res) => {

    const { text, time } = req.body;
    messages.push({ 
        id: id, 
        text: text, 
        time: time });
    id++
    res.status(200).send(messages)
  },

  readMessage: (req, res) => {
      res.status(200).send(messages)
  },

  updateMessage: (req, res) => {

      const {text} = req.body;
      const updateID = req.params.id;

      const indexFound = messages.findIndex(message => message.id == updateID)
      let message = messages[indexFound]

      messages[indexFound] = {
          id: message.id,
          text: text || message.text,
          time: message.time
      };
      res.status(200).send(messages);
  },
  deleteMessage: (req, res) => {
    const updateID = req.params.id;

    const indexFound = messages.findIndex(message => message.id == updateID)

    messages.splice(indexFound, 1)

    res.status(200).send(messages)
  }
  
};
