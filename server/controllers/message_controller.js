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
      const {id} = req.params;
      const {text} = req.body;
      const updateID = id;

      const indexFound = messages.findIndex(message => message.id == updateID)
      let message = messages[indexFound]

      messages[messageIndex] = {
          id: message.id,
          text: text,
          time: message.time
      }
  }
};
