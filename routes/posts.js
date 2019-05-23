posts = [
  {"title": "exempel1","body":"test1"},
  {"title": "exempel2","body":"test2"},
  {"title": "exempel3","body":"test3"}
]

paramsPost = (req, res) => {
  response = {
    "posts": posts,
    "query":req.query,
    "params":req.query,
    "headers":req.headers
  }
  res.send(response);
}

const getPosts = (req, res) => {
  res.send(posts);
}

const addPost = (req, res) => {
 // posts.push(req.body);
 res.sendStatus(201);
 res.send(posts.push(req.body));
}

const postById = (req, res) => {
  console.log(req.params.id) // Det användaren skickar med
  res.send(users[req.params.id-1]); // Det vi skickar till användaren
}

const putPostByID = (req, res) => {
  posts[req.params.id-1] = req.body;
  res.send(posts[req.params.id-1]);
}

// app.patch("/posts/:id", (req, res) => {
//
//   //Ej klart!!
//   res.sendStatus(204);
//   posts[req.params.id] = res.body;
//   res.send(posts[req.params.id]);
// });

// app.delete("/posts/:id", (req, res) => {
//   // posts.splice(req.params.id - 1, 1);
//   // console.log("Return value" + posts.splice(req.params.id -1, 1));
//   // posts[req.params.id-1] = req.body;
//   res.send(posts.splice(req.params.id -1, 1));
// });


module.exports = {
  paramsPost: paramsPost,
  getPosts,
  addPost,
  postById,
  putPostByID



}
