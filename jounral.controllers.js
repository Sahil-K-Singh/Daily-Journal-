const Journal = require("../models/journal");
//get all jounral  by user id
exports.getjournal = async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) return res.stauts(400).json({ error: "useridrequired" });
    const entries = await Journal.find({ userId }).sort({ date: -1 });
    res.status(200).json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//add joural to user

exports.postJournal = async (req, res) => {
  try {
    const { userId, date, content, mood } = req.body;

    if (!userId || !date || !content) {
      return res.status(400).json({ error: "userId, date and content are required" });
    }

    const journal = new Journal({
      userId,
      date,
      content,
      mood,
    });

    await journal.save();
    res.status(201).json({ message: "Journal entry created", journal });
  } catch (error) {
    console.error("Error creating journal:", error);
    res.status(500).json({ error: "Server error" });
  }
};