import Link from 'next/link';
import { useState, useEffect } from 'react';

const InstagramPosts = () => {
  
  const postData = [
    {
      id: "1",
      username: "john_doe",
      profilePic: "/assets/s1.jpg",
      mediaUrl: "/assets/s1.jpg",
      likes: 2000,
      comments: 150,
      caption: "Minimally invasive, maximum .."
    },
    {
      id: "2",
      username: "jane_doe",
      profilePic: "/assets/s1.jpg",
      mediaUrl: "/assets/s3.jpg",
      likes: 2500,
      comments: 180,
      caption: "Make physical activity a part o .."
    },
    {
      id: "3",
      username: "alex_smith",
      profilePic: "/assets/s1.jpg",
      mediaUrl: "/assets/s2.jpg",
      likes: 1800,
      comments: 120,
      caption: "Minimally invasive, maximum .."
    },
    {
      id: "4",
      username: "emma_brown",
      profilePic: "https://example.com/path/to/profile-pic4.jpg",
      mediaUrl: "/assets/s4.jpg",
      likes: 2200,
      comments: 160,
      caption: "Experience the future of surger .. "
    }
  ];

  const mainUsername = "Dr. Yash Pandey";
  const followers = "1.5K";
  const following = 120;

  return (
    <div className="container mx-auto p-4 rounded-md">
      {/* Profile Section */}
      <div className="text-center shadow-lg border-t-2 items-center flex flex-col md:flex-row justify-between mb-8">
        {/* Profile Picture */}
        <div className="mb-4 md:ml-2 flex items-center justify-center  md:justify-start gap-3">
          <img
            src="/assets/s1.jpg" // Main profile picture for the username
            alt="Profile"
            className="w-14 h-14 rounded-full mx-auto"
          />
          <div className='flex flex-col md:pt-3'>
            <h2 className="text-lg font-md text-primary_dark mb-2 ">{mainUsername}</h2>
            <h2 className="text-sm font-md text-primary_dark mb-2 text-start">dr.yash_pandey</h2>
          </div>
        </div>

        {/* Followers and Following */}
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <div className="flex flex-col items-center">
            <span className="font-semibold">{followers}</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold ">{following}</span>
            <span className='md:pr-2 md:mx-2'>Following</span>
          </div>
        </div>
      </div>

      {/* Display the posts in a grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {postData.map((post) => (
          <Link href="https://www.instagram.com/dr.yash_pandey/" target='_blank' key={post.id} className="relative max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">

            <div className="relative group">
              <img
                src={post.mediaUrl}
                alt="Instagram Post"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <h1>{post.likes} <span className='font-bold'>♡</span></h1>
                  <p>{post.comments}🗨️</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p>{post.caption}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
