'use strict';

import Post from './components/Post.js';
import { postsContainer } from './dom.js';
import { clear, render } from './helpers.js';
import Loading from './loading.js';

const getPosts = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/posts`);

    const data = await res.json();

    return data.posts;
  } catch (err) {
    console.error(err.message);
  }
};

const PostsLoading = Array.from({ length: 30 }, (_, i) => i + 1) // Where magic happens 😇
  .map((_) => Loading())
  .join('');
render(PostsLoading, postsContainer);

getPosts().then((posts) => {
  const Posts = posts.map((post) => Post(post)).join('');
  clear(postsContainer);
  render(Posts, postsContainer);
});
