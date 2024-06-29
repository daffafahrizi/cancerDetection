const { Firestore } = require("@google-cloud/firestore");
const configs = require("../configs");

const db = new Firestore({
    projectId: process.env.PROJECT_ID
});

module.exports = db;
