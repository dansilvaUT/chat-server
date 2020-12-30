const express = require('express');
const app = express();
const port = 3001;
const ctrl = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', ctrl.read);
app.post('/api/messages', ctrl.create);
app.put('/api/messages/:id', ctrl.update);
app.delete('/api/messages/:id', ctrl.delete);

app.listen(port, () => console.log(`Listening on port ${port}`));