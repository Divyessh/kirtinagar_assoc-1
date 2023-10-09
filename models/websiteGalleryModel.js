import mongoose from 'mongoose';

const { Schema } = mongoose;

const websiteGallerySchema = new Schema({
  imgArr: [{ type: 'String', required: true }],
  title: { type: 'String', required: true },
  description: [{ type: 'String', required: true }],
});

const WebsiteGallery = mongoose.models.WebsiteGallery || mongoose.model('WebsiteGallery', websiteGallerySchema);

export default WebsiteGallery;
