# APItest

/posts
GET
Request
curl -X GET api.softhouse.rocks/posts

Response
Status code: 200 (OK)

[
  {
    "_id": "5caaef896b334800cbf6634a",
    "userId": 2,
    "id": 15,
    "title": "eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    "__v": 0
  },
POST
Request
  curl -i -X POST -H "Content-Type:application/json" api.softhouse.rocks/posts -d'{
  "title": "string",
  "body": "string",
  "userId": number excisting
  }'
Response
Status code: 201 (Created)

/posts/{postId}
GET
Request
curl -i -X GET api.softhouse.rocks/posts/3

Response
Status code: 200 (OK) (Even when not found)

 {
  "_id": "5caaef896b334800cbf6633e",
  "userId": 1,
  "id": 3,
  "title": "some other name",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  "__v": 0
}
PUT
Request
  curl -i -X PUT  api.softhouse.rocks/posts/3 -H "Content-type:application/json" -d '{
  "title": "string",
  "body": "string",
  "userId": 1
  }'
Response
Status code: 200 (OK)

PATCH
Request
curl -i -X PATCH api.softhouse.rocks/posts/3
{
  "title": "string"
}
Response
Status code: 400 (Bad Request) (Expects userId)

DELETE
Request
curl -i -X DELETE api.softhouse.rocks/posts/3

Response
Status code: 200 (OK)

/users
GET
Request
curl -X GET api.softhouse.rocks/users

Response
Status code: 200 (OK)

[
  {
    "address": {
      "geo": {
        "lat": -68.6102,
        "lng": -47.0653
      },
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157"
    },
    "_id": "5caaef896b334800cbf66334",
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "__v": 0
  }, ]
POST
Request
  curl -i -X POST -H "Content-Type:application/json" api.softhouse.rocks/users -d'{
  "name": "string",
  "username": "string unique",
  "email": "string unique",
  "address": {
    "street": "string",
    "suite": "string",
    "city": "string",
    "zipcode": "string",
    "geo": {
      "lat": 0,
      "lng": 0
    }
  }
}'
Response
Status code: 201 (Created)

/users/{userId}
GET
Request
curl -X GET api.softhouse.rocks/users/1

Response
Status code: 200 (OK)

   {
  "address": {
    "geo": {
      "lat": -37.3159,
      "lng": 81.1496
    },
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "_id": "5caaef896b334800cbf66332",
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "__v": 0
}
PUT
Request
   curl -X PUT api.softhouse.rocks/users/1 -H "Content-type:application/json" -d '{"name"
:"string", "username":"string000001", "email": "email00001", "address": {"street": "string"
, "suite": "string", "city": "string", "geo": {"lat": 0, "lng": 0}}}'
Response
Status code: 200 (OK)
