"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import FormSkeleton from "@components/FormSkeleton";


const EditPrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState(null);
  const promptId = useSearchParams().get("id");
  const router = useRouter();

  const updatePrompt = async (e) => {
    e.preventDefault();

    if (!promptId) return alert("Undefined prompt");

    setSubmitting(true);

    try {
      const response = await fetch(`api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        tag: data.tag,
        prompt: data.prompt,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  if (!post) {
    return <FormSkeleton />;
  }

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPrompt;
