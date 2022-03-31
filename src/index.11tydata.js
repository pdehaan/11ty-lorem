module.exports = {
  eleventyComputed: {
    title(data) {
      return data.title || data.p.title;
    },
  },
};
