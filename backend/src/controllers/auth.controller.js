const authService = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (e) {
    res
      .status(e.status || 500)
      .json({ message: e.message || "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    console.log("login request", req.body);
    const result = await authService.login(req.body);
    res.json(result);
  } catch (e) {
    console.log("login error", e);
    res
      .status(e.status || 500)
      .json({ message: e.message || "Internal Server Error" });
  }
};

module.exports = { register, login };
