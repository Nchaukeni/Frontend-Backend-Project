import { User } from "../Models/Users.js";

export async function getUsers(req, res) {
  try {
    const newUser = await User.find();
    res.status(200).json({ success: true, newUser });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
}

export async function getUserById(req, res) {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) {
      return res
        .status(500)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(404).json({ success: true, message: error.message });
  }
}

export async function createUser(req, res) {
  const { name, sirname, sex, role } = req.body;
  if (!name || !role) {
    return res
      .status(400)
      .json({ success: false, message: "Name and role required" });
  }
  try {
    const newUserId = (await User.countDocuments()) + 1;
    const newUser = new User({
      userId: newUserId,
      username: name,
      lastname: sirname,
      sex: sex,
      role: role,
    });
    await newUser.save();
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
}
