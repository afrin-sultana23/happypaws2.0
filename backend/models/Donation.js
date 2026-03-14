const mongoose = require('mongoose')

const donationSchema = new mongoose.Schema({
  pet:          { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', default: null },
  is_general:   { type: Boolean, default: false },
  donor_name:   { type: String, required: true },
  donor_email:  { type: String, required: true },
  donor_phone:  { type: String, required: true },
  amount:       { type: Number, required: true },
  message:      { type: String },
  tran_id:      { type: String, unique: true },
  status:       { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
}, { timestamps: true })

module.exports = mongoose.model('Donation', donationSchema)
