const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const exampleSchema = mongoose.Schema(
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
    // tags: {
    //   type: [String],
    //   required: false,
    // },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
exampleSchema.plugin(toJSON);
exampleSchema.plugin(paginate);

/**
 * @typedef Example
 */
const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
