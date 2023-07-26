/**
 * Handle non-RESTful API requests
 * Such as: /login, /register
 **/

module.exports = (req, res, next) => {
  console.log(req.body);
  if (req.method === "POST" && req.path === "/login") {
    console.log("capture login request ...");
    console.log("req.body:", req.body);
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({
        message: "Incorrect...",
      });
    }
  }
  next();
};
