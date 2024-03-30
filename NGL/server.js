const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// สร้าง MongoDB โดยแทนที่ <YOUR_MONGODB_URI> ด้วย URI ของ MongoDB ที่คุณใช้
mongoose.connect('<YOUR_MONGODB_URI>', { useNewUrlParser: true, useUnifiedTopology: true });

const dataSchema = new mongoose.Schema({
  response: String,
});

const Data = mongoose.model('Data', dataSchema);

app.post('/saveData', (req, res) => {
  const { response } = req.body;

  const newData = new Data({ response });

  newData.save()
    .then(savedData => {
      console.log('Data saved:', savedData);
      res.json({ success: true, savedData });
    })
    .catch(error => {
      console.error('Error saving data:', error);
      res.json({ success: false, error: error.message });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
