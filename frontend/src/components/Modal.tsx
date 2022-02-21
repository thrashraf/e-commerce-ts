import React from "react";
import { Input } from "./Input";

type Props = {
  fullName: string;
  phoneNumber: string;
  state: string;
  address: string;
  setFullName: any;
  setPhoneNumber: any;
  setState: any;
  setAddress: any;
  save: any;
};

export const Modal = (props: Props) => {
  return (
    <div className="h-[400px] w-[550px] mt-10 bg-white text-center absolute z-20 rounded-lg p-5">
      <section className="flex justify-between w-full gap-3">
        <Input
          value={props.fullName}
          setValue={props.setFullName}
          placeholder="Full Name"
        />
        <Input
          value={props.phoneNumber}
          setValue={props.setPhoneNumber}
          placeholder="Phone Number"
        />
      </section>
      <section className="">
        <Input
          value={props.state}
          setValue={props.setState}
          placeholder="State"
        />
      </section>

      <section>
        <textarea
          name=""
          id=""
          cols={30}
          rows={6}
          placeholder="Address"
          value={props.address}
          onChange={(e) => props.setAddress(e.target.value)}
          className="w-full bg-gray-200 mt-5 rounded-lg px-3 py-1 focus:outline-none"
        />
      </section>

      <section className="flex justify-end">
        <button
          className=" mt-2 px-6 py-2 max-w-sm bg-blue-500 rounded-lg text-white hover:bg-blue-400 focus:outline-none"
          onClick={props.save}
        >
          Set
        </button>
      </section>
    </div>
  );
};
