const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const data = await Service.find();
    res.send(data);
    if (!data) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
  } catch (error) {
    console.log(`services: ${error}`);
  }
};

module.exports = { services };
