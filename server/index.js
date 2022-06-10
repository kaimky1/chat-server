const express = require("express");

const app = express();

app.use(express.json());

const port = 3001;


const {
    createMessage,
    updateMessage
} = require('./controllers/message_controller')

app.post(`/api/messages`, createMessage)

app.put(`/api/messages/:id`, updateMessage)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});