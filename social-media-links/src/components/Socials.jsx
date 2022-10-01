import React from "react";
import Card from "./Card";


const Socials = () => {
  return (
    <div className="container mx-auto py-5 text-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <Card
          link={"https://github.com/awonfs/"}
          site={"GitHub"}
        />
        <Card
          link={"https://www.linkedin.com/in/eetu-r%C3%B6nkk%C3%B6-433289246/"}
          site={"LinkedIn"}
        />
        <Card
          link={"https://www.youtube.com/channel/UCXgXHvgGzzjI-cHuX9OnzGA"}
          site={"YouTube"}
        />
        <Card
          link={"https://www.eeturonkko.com/"}
          site={"My site"}
        />
      </div>
    </div>
  );
};

export default Socials;
