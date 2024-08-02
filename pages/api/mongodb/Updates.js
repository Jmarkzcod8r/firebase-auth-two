// models/Updates.js
import mongoose from 'mongoose';

const UpdatesSchema = new mongoose.Schema({
  action: {
    type: String,
    enum: ['create', 'update', 'delete'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Updates = mongoose.models.Updates || mongoose.model('Updates', UpdatesSchema);

export default Updates;
