module.exports = reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h1>Please provide an age to continue</h1>");
  } else if (req.query.age < 18) {
    res.send("<h1>Abhi tum baccha hai, baada ho kar ana</h1>");
  } else {
    next();
  }
};
