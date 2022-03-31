module.exports = {
  eleventyComputed: {
    title(data) {
      const p = data.p();
      return data.title || p.title;
    },
  },
};
