import mongoose from 'mongoose';

const { Schema } = mongoose;

const gallerySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  gallery: { type: String, required: true },
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;
