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
  logId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'logdatas', // Reference to the 'logdatas' collection
    required: function() {
      return this.action === 'create' || this.action === 'update';
    },
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Updates = mongoose.models.Updates || mongoose.model('update', UpdatesSchema);

export default Updates;
