"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";
import ProfileSkeletonLoader from "@components/ProfileSkeletonLoader";

const MyProfile = ({}) => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState(null);

  const router = useRouter();

  const handleEdit = async (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const previousPosts = posts;
    const newPosts = posts.filter((p) => p._id !== post._id);
    setPosts(newPosts);

    try {
      await fetch(`api/prompt/${post._id}`, {
        method: "DELETE",
      });
    } catch (error) {
      setPosts(previousPosts);
      alert("Unable to delete this post");
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session]);

  if (!posts) {
    return <ProfileSkeletonLoader />;
  }

  return (
    <Profile
      name={"My"}
      desc="Welcome to your profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
