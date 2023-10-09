import mongoose from 'mongoose';

const { Schema } = mongoose;

const pricingSchema = new Schema({
  pricing: { type: String, required: true },
  features: { type: String, required: true },
});

const Pricing = mongoose.model('Pricing', pricingSchema);

export default Pricing;