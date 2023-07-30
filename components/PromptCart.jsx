"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCart = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied(false);
    }, 300);
  };

  if (!post.creator) {
    post.creator = { username: "none", _id: "none", email: "none" };
  }

  const visitProfile = () => {
    if (session?.user.id === post.creator._id) return router.push(`/profile`);

    router.push(`/profile/${post?.creator._id}`);
  };

  const cardHeader = () => {
    return (
      <div className="flex  justify-between items-start gap-5 group">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer group
          "
          onClick={() => visitProfile()}
        >
          <Image
            alt="user_image"
            src={post.creator.image}
            width={40}
            height={40}
            className="rounded-full object-contain sm:group-hover:scale-[1.1] transition duration-[240ms] "
          ></Image>
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900 ">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500 ">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn my-auto" onClick={handleCopy}>
          <Image
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            width={15}
            height={15}
            alt="copy_btn"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="prompt_card">
      {cardHeader()}
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font_inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      {session?.user.id === post?.creator._id && pathName === "/profile" && (
        <CardOptions
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          post={post}
        />
      )}
    </div>
  );
};

export const CardOptions = ({ handleEdit, handleDelete, post }) => {
  return (
    <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
      <p
        className="font-inter green_gradient cursor-pointer text-sm"
        onClick={() => handleEdit(post)}
      >
        Edit
      </p>
      <p
        className="font-inter orange_gradient cursor-pointer text-sm"
        onClick={() => handleDelete(post)}
      >
        Delete
      </p>
    </div>
  );
};

export default PromptCart;
