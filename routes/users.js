users = [
  {"name": "Jennie"},
  {"name": "Eva"},
  {"name": "Simon"},
  {"name": "Rebecka"}
]

const params = (req, res) => {
  response = {
    "users": users,
    "query":req.query,
    "params":req.query,
    "headers":req.headers
  }
  res.send(response);
}

//USERS
// const getUsers = (req, res) => {
//   res.send(users);
// }

const postUsers = (req, res) => {
  console.log(req.body); //Det användaren skickar in
  users.push(req.body)
  res.status(201);
  res.send(users);
}

// const getUserId = (req, res) => {
//   console.log(req.params.id) // Det användaren skickar med
//   res.send(users[req.params.id-1]); // Det vi skickar till användaren
// }
//
// //ersätter med nya uppgifter från användaren
// const putUser = (req, res) => {
//   users[req.params.id-1] = req.body;
//   res.send(users[req.params.id-1]);
// }

module.exports = {
  params: params,
  // getUsers,
  postUsers,
  // getUserId,
  // putUser
}
