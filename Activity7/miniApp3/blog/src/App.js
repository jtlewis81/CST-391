import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: 'A joke about a short psychic',
    },
    {
      postNumber: 1,
      text: 'A meaningless blog post for testing a demo app...',
    },
    {
      postNumber: 2,
      text: 'More random words...',
    },
    {
      postNumber: 3,
      text: 'The quick brown fox jumped over the....whatever.',
    },
  ]);

  const [postId, setPostId] = useState(4);

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postId,
      text: newText
    };
    setPostList(postList => [...postList, newPost]);
    setPostId(postId+1);
  }

  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter(post => post.postNumber !== id);
    setPostList(updatedPostList);
  };

  const posts = postList.map((post) => (
    <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost} />
  ));

  return (
    <div>
      { posts }
      <AddPost onAdd={handleAddPost}/>
    </div>
  );
}

export default App;
