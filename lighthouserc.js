module.exports = {
    ci: {
      collect: {
        url:"http://localhost/index.html",
        staticDistDir: "./",
        numberOfRuns: 1
      },
      assert: {
        preset: "lighthouse:recommended",
      },
      upload: {
        /* Add configuration here */
        target: 'lhci',
        serverBaseUrl: 'https://peaceful-earth-32428.herokuapp.com/',
        token: 'LHCI_TOKEN', // could also use LHCI_TOKEN variable instead
      },
    },
};
