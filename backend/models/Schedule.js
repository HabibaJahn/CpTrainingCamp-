const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    topicName: {
       type: String, required: true 
      },
    mentor: { type: String, required: true },
    time: { type: Date, required: true },
    place: { type: String, required: true },
    contestLink: { type: String, required: true },
    resourceLink: { type: String, required: false },
  },
  { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
