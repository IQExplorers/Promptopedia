"use client";

import { useState, useEffect} from "react";
import PromptCart from "./PromptCart";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    console.log("searchText", e.target.value);
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
  };

  const getFilteredPosts = () => {
    return searchText === ""
      ? posts
      : posts.filter((p) => {
          return (
            p.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
            p.creator.username
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            p.tag.toLowerCase().includes(searchText.toLowerCase())
          );
        });
  };

  let filteredPosts = getFilteredPosts();

  return (
    <section className="feed">
      <form className="realtive w-full flex-center">
        <input
          type="text"
          placeholder="search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      {posts ? (
        <PromptCardList data={filteredPosts} handleTagClick={handleTagClick} />
      ) : (
        loadingSkeleton()
      )}
    </section>
  );
};

const loadingSkeleton = () => {
  return (
    <>
      <p className="text-inter font-semibold blue_gradient mt-4">Loading...</p>
      <div className=" prompt_layout mt-[20px]">
        <div className="skeleton_cart skeleton_gradient extend_bg animate-load flex flex-col">
          <div className="flex justify-start ">
            <div className="rounded-full w-[45px] h-[45px] bg-white">
              &nbsp;
            </div>
            <div className="rounded-lg h-[45px] w-[200px] ml-[10px] bg-white">
              &nbsp;
            </div>
          </div>
          <div className="rounded-lg h-[70px] w-full mt-[20px] bg-white"></div>
        </div>
        <div className="skeleton_cart skeleton_gradient extend_bg animate-load flex flex-col">
          <div className="flex justify-start ">
            <div className="rounded-full w-[45px] h-[45px] bg-white">
              &nbsp;
            </div>
            <div className="rounded-lg h-[45px] w-[200px] ml-[10px] bg-white">
              &nbsp;
            </div>
          </div>
          <div className="rounded-lg h-[70px] w-full mt-[20px] bg-white"></div>
        </div>
        <div className="skeleton_cart skeleton_gradient extend_bg animate-load flex flex-col">
          <div className="flex justify-start ">
            <div className="rounded-full w-[45px] h-[45px] bg-white">
              &nbsp;
            </div>
            <div className="rounded-lg h-[45px] w-[200px] ml-[10px] bg-white">
              &nbsp;
            </div>
          </div>
          <div className="rounded-lg h-[70px] w-full mt-[20px] bg-white"></div>
        </div>
      </div>
    </>
  );
};

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout ">
      {data.map((post) => (
        <PromptCart
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default Feed;
