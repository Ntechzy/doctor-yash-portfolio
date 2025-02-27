import { useState, useEffect } from 'react';

const InstagramPosts = () => {
  // Static post data (directly in the component)
  const postData = [
    {
      id: "1",
      username: "john_doe",
      profilePic: "/assets/s1.jpg",
      mediaUrl: "/assets/s1.jpg",
      likes: 2000,
      comments: 150,
      caption: "Having a great day at the beach!"
    },
    {
      id: "2",
      username: "jane_doe",
      profilePic: "/assets/s1.jpg",
      mediaUrl: "/assets/s3.jpg",
      likes: 2500,
      comments: 180,
      caption: "Exploring the city today!"
    },
    {
      id: "3",
      username: "alex_smith",
      profilePic: "/assets/s1.jpg",
      mediaUrl: "/assets/s2.jpg",
      likes: 1800,
      comments: 120,
      caption: "Chasing sunsets 🌅"
    },
    {
      id: "4",
      username: "emma_brown",
      profilePic: "https://example.com/path/to/profile-pic4.jpg",
      mediaUrl: "/assets/s4.jpg",
      likes: 2200,
      comments: 160,
      caption: "Coffee time with friends ☕"
    }
  ];

  // Main username and profile details
  const mainUsername = "Dr. Yash Pandey"; // Change this to your desired username
  const followers = 15000; // Example follower count
  const following = 120; // Example following count

  return (
    <div className="container mx-auto p-4">
      {/* Profile Section */}
      <div className="text-center shadow-lg border-t-2 items-center  flex flex-row justify-between ">
        {/* Profile Picture */}
        <div className="mb-4 flex flex-row gap-3 ">
          <img
            src="/assets/s1.jpg" // Main profile picture for the username
            alt="Profile"
            className="w-14 h-14 rounded-full mx-auto"
          />
          <div className='flex flex-col'>
          <h2 className="text-lg font-md text-primary_dark mb-2 ">{mainUsername}</h2>
          <h2 className="text-sm font-md text-primary_dark mb-2 text-start">yash_adsg</h2>
          </div>

        </div>
        {/* Username */}
       
        {/* Followers and Following */}
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <div className="flex flex-col items-center">
            <span className="font-semibold">{followers}</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">{following}</span>
            <span>Following</span>
          </div>
        </div>
      </div>

      {/* Display the posts in a grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {postData.map((post) => (
          <div key={post.id} className="relative max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            
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
    </div>
  );
};

export default InstagramPosts;
