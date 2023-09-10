import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: { type: String, required: true },
  postedBy: { type: String, default: 'kirtinagar' },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
