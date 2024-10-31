import React from "react";

const Header = (props) => {
  const logOut = () => {
    localStorage.setItem("loggedUser", "");
    props.changeUser('')
    // window.location.reload()
  };
  return (
    <div>
      <div className="flex justify-between items-end style  bg-[#1c1c1c] p-10">
        <div className=" font-extralight text-2xl"> Hi username👌</div>
        <div className="bg-red-600 text-xl font-normal p-2 rounded-md ">
          <button type="submit" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
