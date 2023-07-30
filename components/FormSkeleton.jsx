const FormSkeleton = () => {
  return (
    <seciton className="w-full">
      <div className="max-w-2xl w-full skeleton_gradient rounded-md head_text  extend_bg animate-load">
        &nbsp;
      </div>
      <div className="max-w-2xl skeleton_gradient w-full rounded-md mt-5 extend_bg animate-load">
        &nbsp;
      </div>
      <div
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 h-[450px] rounded-xl skeleton_gradient extend_bg animate-load"
      >
        &nbsp;
      </div>
    </seciton>
  );
};

export default FormSkeleton;
