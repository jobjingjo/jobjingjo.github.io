module.exports = {
    ci: {
      collect: {
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