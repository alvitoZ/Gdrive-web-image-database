import React from "react";

type Card = {
  name: string;
  desc: string;
  image?: string;
  onClick?: React.MouseEventHandler;
};

type Props = Card;

const CardBG: React.FC<Props> = ({ name, desc, image, onClick }) => {
  return (
    <div
      style={image ? { backgroundImage: `url(${image})` } : {}}
      className={`flex items-center hover:rotate-2 transition duration-700 h-auto bg-cover border-2 border-opacity-5`}
      onClick={onClick}
    >
      <div className="pl-10 flex items-start gap-20 flex-col w-[12rem] py-11">
        <p className="font-extrabold text-xs">{name}</p>
        <p className="font-normal text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default CardBG;
