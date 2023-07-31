
import Link from 'next/link';

const DropdownMenu = ({handleSignOut, setToggleDropdown}) => {
  return (
    <div className="dropdown">
      <Link
        href="/profile"
        className="dropdown_link"
        onClick={() => setToggleDropdown(false)}
      >
        My Profile
      </Link>
      <Link
        href="/create-prompt"
        className="dropdown_link"
        onClick={() => setToggleDropdown(false)}
      >
        Create Prompt
      </Link>
      <button
        type="button"
        className="mt-5 w-full black_btn"
        onClick={() => {
          setToggleDropdown(false);
          handleSignOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default DropdownMenu;
