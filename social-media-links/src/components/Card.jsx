import React from "react";

const Card = (props) => {
  return (
    <div>
      <a
        className="inline-block w-60 px-11 py-4 text-center text-zinc-100 rounded-full font-robotoMono shadow-customBlack hover:opacity-75 hover:border md:w-80"
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
