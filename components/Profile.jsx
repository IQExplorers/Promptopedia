import PromptCart from "./PromptCart";

const Profile = ({ handleEdit, handleDelete, name, desc, data }) => {
  console.log("user", name);
  
  console.log("profileData", data);
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCart
            key={post._id}
            post={post}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleTagClick={() => handleEdit && handleEdit(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
