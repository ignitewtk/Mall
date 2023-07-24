module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    console.log("capture login request ...");
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    }
  } else {
    return res.status(400).json({
      message: "Incorrect...",
    });
  }
  next();
};
