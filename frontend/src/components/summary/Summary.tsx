import React from "react";

type Props = {
  children: any;
};

export const Summary = (props: Props) => {
  return (
    <div className="bg-blue-500 rounded-xl px-5 text-white pb-2">
      {props.children}
    </div>
  );
};
