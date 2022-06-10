const express = require("express");

const app = express();

app.use(express.json());

const port = 3001;


const {
    createMessage,
    readMessage,
    updateMessage,
    deleteMessage

} = require('./controllers/message_controller')

app.post(`/api/messages`, createMessage)

app.get(`/api/messages`, readMessage)

app.put(`/api/messages/:id`, updateMessage)

app.delete(`/api/messages/:id`, deleteMessage)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});