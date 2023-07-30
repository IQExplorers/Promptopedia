import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left capitalize">
        <span className="blue_gradient">{type} post</span>
      </h1>
      <p className="mt-5">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
      <form
        className="mt-10 w-full max-w-2xl 
        flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            className="form_textarea"
            onChange={(e) => setPost({...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">(#product, #web)</span>
          </span>
          <input
            value={post.tag}
            className="form_input"
            onChange={(e) => setPost({...post, tag: e.target.value })}
            placeholder="#tag..."
            required
          />
        </label>

        <div className="flex-end mx-5 mb-5 gap-3">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            className="capitalize px-5 py-1.5 text-sm rounded-full bg-primary-orange text-white"
            type="submit"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
