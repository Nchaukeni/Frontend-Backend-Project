// Dummy data
const users = [
  { id: 1, name: "Nchaukeni", role: "Admin" },
  { id: 2, name: "Martha", role: "Student" },
];

export const getUsers = (req, res) => {
  res.json({
    success: true,
    users,
  });
};

export const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  res.json({ success: true, user });
};

export const createUser = (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res
      .status(400)
      .json({ success: false, message: "Name and role required" });
  }

  const newUser = { id: users.length + 1, name, role };
  users.push(newUser);
  res.status(201).json({ success: true, user: newUser });
};
