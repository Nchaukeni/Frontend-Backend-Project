import { Subject } from "../Models/Subjects.js";

export async function subjects(req, res) {
  try {
    const SubjectList = await Subject.find();
    return res.status(200).json({ success: true, SubjectList });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
}

export async function addSubject(req, res) {
  const { name, subjectTeacher } = req.body;
  if (!name || !subjectTeacher) {
    return res.status(400).json({
      success: false,
      message: "Subject name and subject Teacher fields can not be blank",
    });
  }
  try {
    const subjectCount = await Subject.countDocuments();
    const newSub = new Subject({
      subjectName: name,
      subjectTeacher: subjectTeacher,
      subjectId: subjectCount + 1,
    });
    await newSub.save();
    res
      .status(200)
      .json({ success: true, message: `${name} has been added successfully` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function getSubjectById(req, res) {
  try {
    const subject = await Subject.findOne({ subjectId: req.params.subjectId });
    if (!subject) {
      return res
        .status(404)
        .json({ success: false, message: "Subject not found" });
    }
    return res.status(200).json({ success: true, subject });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
}
