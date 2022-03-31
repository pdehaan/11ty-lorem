const { EleventyRenderPlugin } = require("@11ty/eleventy");
const del = require("del").sync;

module.exports = function(eleventyConfig) {
  del("www/*");

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return {
    dir: {
      input: "src",
      output: "www",
      layouts: "_layouts",
    }
  };
};
