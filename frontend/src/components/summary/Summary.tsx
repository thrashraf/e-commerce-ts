import React from "react";

type Props = {
  children: any;
};

export const Summary = (props: Props) => {
  return (
    <div className=" border border-gray-200 shadow-lg rounded-xl px-5  pb-2">
      {props.children}
    </div>
  );
};
