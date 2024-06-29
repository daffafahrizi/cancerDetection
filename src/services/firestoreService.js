const db = require("../libs/firestore");

const storeData = async (id, data) => {
  const predictCollection = db.collection("predictions");
  try {
    await predictCollection.doc(id).set(data);
  } catch (error) {
    console.error("Error storing data: ", error.message);
    throw new Error("Failed to store data.");
  }
};

const getAllData = async () => {
  const predictCollection = db.collection("predictions");
  try {
    const snapshot = await predictCollection.get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return [];
    }

    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, history: { ...doc.data() } });
    });

    return data;
  } catch (error) {
    console.error("Error getting data: ", error.message);
    throw new Error("Failed to get data.");
  }
};

module.exports = { storeData, getAllData };
