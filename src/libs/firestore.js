const { Firestore } = require("@google-cloud/firestore");
const configs = require("../configs");

const db = new Firestore({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS, // Menambahkan keyFilename untuk menggunakan file JSON
});

module.exports = db;
