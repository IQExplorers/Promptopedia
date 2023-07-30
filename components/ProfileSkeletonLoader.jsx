import React from "react";

const ProfileSkeletonLoader = () => {
  return (
    <section className="w-full">
      <div className="max-w-2xl w-full skeleton_gradient  rounded-md head_text  extend_bg animate-load">
        &nbsp;
      </div>
      <div className="max-w-2xl skeleton_gradient w-full rounded-md mt-5 extend_bg animate-load">&nbsp;</div>

      <div className=" prompt_layout mt-[60px]">
        <div className="skeleton_cart skeleton_gradient extend_bg animate-load "></div>
        <div  className="skeleton_cart skeleton_gradient extend_bg animate-load"></div>
        <div  className="skeleton_cart skeleton_gradient extend_bg animate-load max-md:hidden"></div>
      </div>
    </section>
  );
};

export default ProfileSkeletonLoader;
