import React from "react";

const Card = (props) => {
  return (
    <div>
      <a
        className="inline-block w-60 px-11 py-4 text-center rounded-full border-none text-white font-robotoMono bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-80 md:w-80"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.site}
      </a>
    </div>
  );
};

export default Card;
