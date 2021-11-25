module.exports = {
    ci: {
      collect: {
        url:"http://localhost/index.html",
        staticDistDir: "./",
        numberOfRuns: 1
      },
      upload: {
        target: "temporary-public-storage"
      },
      assert: {
        preset: "lighthouse:recommended",
      }
    },
};
