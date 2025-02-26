import { useState, useEffect } from 'react';

const InstagramPosts = () => {
  // Static post data (directly in the component)
  const postData = [
    {
      id: "1",
      username: "john_doe",
      profilePic: "https://example.com/path/to/profile-pic1.jpg",
      mediaUrl: "https://example.com/path/to/post1.jpg",
      likes: 2000,
      comments: 150,
      caption: "Having a great day at the beach!"
    },
    {
      id: "2",
      username: "jane_doe",
      profilePic: "https://example.com/path/to/profile-pic2.jpg",
      mediaUrl: "https://example.com/path/to/post2.jpg",
      likes: 2500,
      comments: 180,
      caption: "Exploring the city today!"
    },
    {
      id: "3",
      username: "alex_smith",
      profilePic: "https://example.com/path/to/profile-pic3.jpg",
      mediaUrl: "https://example.com/path/to/post3.jpg",
      likes: 1800,
      comments: 120,
      caption: "Chasing sunsets 🌅"
    },
    {
      id: "4",
      username: "emma_brown",
      profilePic: "https://example.com/path/to/profile-pic4.jpg",
      mediaUrl: "https://example.com/path/to/post4.jpg",
      likes: 2200,
      comments: 160,
      caption: "Coffee time with friends ☕"
    }
  ];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {postData.map((post) => (
        <div key={post.id} className="relative max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center p-4">
            <img
              src={post.profilePic}
              alt={post.username}
              className="w-10 h-10 rounded-full mr-3"
            />
            <h3 className="font-semibold">{post.username}</h3>
          </div>
          <div className="relative group">
            <img
              src={post.mediaUrl}
              alt="Instagram Post"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-center">
                <p>{post.likes} Likes</p>
                <p>{post.comments} Comments</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p>{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;
