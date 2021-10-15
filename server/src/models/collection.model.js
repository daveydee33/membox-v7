const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const collectionSchema = mongoose.Schema(
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
    items: {
      type: [String],
      required: false,
    },
    // tags: {
    //   type: [String],
    //   required: false,
    // }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
collectionSchema.plugin(toJSON);
collectionSchema.plugin(paginate);

/**
 * @typedef Collection
 */
const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
