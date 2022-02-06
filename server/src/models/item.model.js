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
      trim: true,
    },
    details: {
      type: String,
      trim: true,
    },
    related: {
      type: [String],
    },
    seeAlso: {
      type: [String],
    },
    tags: {
      type: [String],
    },
    audios: {
      type: [String],
    },
    images: {
      type: [String],
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
          _id: false,
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
