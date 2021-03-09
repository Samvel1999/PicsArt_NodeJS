# Social Network

## User
1. *GET* /api/users -------search user by fullName
```
"firstName"
"lastName"
```
2. *POST* /api/users/register -----Register
```
"firstName"
"lastName"
"email"
"gender"
"password"
```
3. *POST* /api/users/login ------Login
```
"email"
"password"
```
4. *PATCH* /api/users-------edit user information

## Post
1. *GET* /api/posts -------get all posts as a guest
2. *GET* /api/users/posts -----get all my posts
3. *GET* /api/users/:id/posts ----get all posts of specific user
4. *GET* /api/users/:id/posts/:postId----get specific post of specific user
5. *GET* /api/users/posts/filter?description= ----search posts by description
6. *POST* /api/users/posts-------add post
```
"text"
"description"
```
7. *PATCH* /api/users/posts/:id ------edit post information
8. *DELETE* /api/users/posts/:id ------delete post

## Photo
1. *GET* /users/:id/posts/:postId/photos -----get photos of specific post
2. *GET* /users/:id/posts/:postId/photos/:photoId ---get specific photo
3. *POST* /users/posts/:id/photos ----add photo into my specific post

## Links
..* https://www.youtube.com/watch?v=mbsmsi7l3r4
..* https://www.youtube.com/watch?v=2jqok-WgelI&t=2s
..* https://www.youtube.com/watch?v=srPXMt1Q0nY