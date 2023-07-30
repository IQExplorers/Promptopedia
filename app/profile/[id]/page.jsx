"use client";

import Profile from "@components/Profile";
import ProfileSkeletonLoader from "@components/ProfileSkeletonLoader";
import { useEffect, useState } from "react";

const UserProfile = ({ params: { id } }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${id}`);
      const user = await response.json();

      setUser(user);
    };
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const posts = await response.json();

      setPosts(posts);
    };

    fetchUser();
    fetchPosts();
  }, [id]);

  if (!posts) {
    return <ProfileSkeletonLoader />;
  }

  return <Profile data={posts} desc={user?.email} name={user?.username} />;
};

export default UserProfile;
