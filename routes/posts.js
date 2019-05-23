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
    posts.push(req.body);
    res.sendStatus(201);
    res.send(posts);
}


const getPostBypostId = (req, res) => {
  console.log(req.params.postId) // Det användaren skickar med
  res.send(posts[req.params.postId-1]); // Det vi skickar till användaren
}


const putPostBypostId = (req, res) => {
  posts[req.params.postId-1] = req.body;
  res.send(posts[req.params.postId-1]);
}

const patchPostByPostId = (req, res) => {
  if (req.body.title)
    posts[req.params.postId-1].title = req.body.title;
  if (req.body.body)
    posts[req.params.psotId-1].body = req.body.body;

  res.send(posts[req.params.postId-1]);
}

const deletePostById = (req, res) => {
  res.send(posts.splice(req.params.postId -1, 1));
}



module.exports = {
  paramsPost: paramsPost,
  getPosts,
  addPost,
  getPostBypostId,
  putPostBypostId,
  patchPostByPostId,
  deletePostById
}
