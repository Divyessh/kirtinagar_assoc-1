import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
