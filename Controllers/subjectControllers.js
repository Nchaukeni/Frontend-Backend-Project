let demoSubjectList = [
  { subjectName: "Physics", subjectTeacher: "Mr Zulu", subjectId: 1 },
  { subjectName: "Chemistry", subjectTeacher: "Mr Munsaka", subjectId: 2 },
];

export function subjects(req, res) {
  res.json({
    success: true,
    demoSubjectList,
  });
}

export function addSubject(req, res) {
  const { name, subjectTeacher } = req.body;
  if (!name || !subjectTeacher) {
    return res.status(400).json({
      success: false,
      message: "Subject name and subject Teacher fields can not be blank",
    });
  }
  const newSub = {
    subjectName: name,
    subjectTeacher: subjectTeacher,
    subjectId: demoSubjectList.length + 1,
  };
  demoSubjectList.push(newSub);
  return res.status(200).json({
    success: true,
    message: `${newSub.subjectName} has been added with Id: ${newSub.subjectId}`,
  });
}

export function getSubjectById(req, res) {
  const subject = demoSubjectList.find(
    (u) => u.subjectId === parseInt(req.params.subjectId)
  );
  if (!subject) {
    return res
      .status(404)
      .json({ success: false, message: "subject not found" });
  }
  return res.status(200).json({
    success: true,
    subject: subject,
  });
}
