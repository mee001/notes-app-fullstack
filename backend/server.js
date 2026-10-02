const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL || 'mongodb://mongo-service:27017/notes')
 .then(()=>console.log('Mongo connected'))
 .catch(e=>console.log(e));
const Note = mongoose.model('Note', { text: String, date: {type: Date, default: Date.now} });
app.get('/api/notes', async (req,res) => res.json(await Note.find()));
app.post('/api/notes', async (req,res) => {
  const n = await Note.create({text:req.body.text});
  res.json(n);
});
app.delete('/api/notes/:id', async (req,res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ok:true});
});
app.get('/health', (req,res) => res.json({status:'ok'}));
app.listen(3000, () => console.log('Backend on 3000'));
