export default function (eleventyConfig) {
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "html"]
  };
}
