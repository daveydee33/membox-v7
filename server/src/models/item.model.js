const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const itemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    details: {
      type: String,
      required: false,
      trim: true,
    },
    tags: {
      type: [String],
      required: false,
    },
    examples: {
      type: [
        {
          title: {
            type: String,
            required: false,
            trim: true,
          },
          description: {
            type: String,
            required: false,
            trim: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
itemSchema.plugin(toJSON);
itemSchema.plugin(paginate);

/**
 * @typedef Item
 */
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
