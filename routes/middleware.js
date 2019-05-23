bodyData = (req, res, next) => {
  console.log("hello")
  console.log(req.body)
  next()
};

module.exports = {
  bodyData: bodyData
}
