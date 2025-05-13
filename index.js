const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const jounralRoutes=require('./routes/journal.routes');
const userRoutes=require('./routes/user.routes');
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/journal',jounralRoutes);
app.use('/api/user',userRoutes);
mongoose.connect('mongodb://localhost:27017/journal-app')
.then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error('MongoDB connection error:', err));