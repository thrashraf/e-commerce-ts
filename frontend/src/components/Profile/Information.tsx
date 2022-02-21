import axios from "axios";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { DynamicInput } from "../DynamicInput";

type Props = {};

export const Information = (props: Props) => {
 
  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { userInfo, userloading } = userDetail;


  const [editMode, setEditMode] = useState<boolean>(false);
  
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  
  useEffect(() => {
    console.log(userInfo, userloading)
    if (!userloading) {
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setEmail(userInfo.email);
      setPhoneNumber(userInfo.phoneNumber);
  
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userloading]);

  const updateUser = async () => {
    const id = userInfo.id;

    await axios
      .post("http://localhost:5000/api/updateUser", {
        id,
        firstName,
        lastName,
        email,
        phoneNumber,
      })
      .then((res) => {
        console.log(res);
        setEditMode(!editMode);
        console.log("click");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" ">
      <section className="w-full mt-5">
        <section className="relative">
          <div>
            <img
              src="/images/default-header.jpg"
              alt=""
              className="h-[170px] w-full object-cover rounded-t-xl"
            />
          </div>

          <div className="">
            <span className="bg-gray-300  px-[30px] py-[25px] rounded-full text-white absolute top-32 left-5">
              <i className="fas fa-user fa-2x"></i>
            </span>

            <button
              className="bg-blue-500 px-4 py-1 text-sm float-right text-white rounded-md  my-4"
              disabled={editMode}
              onClick={() => setEditMode(!editMode)}
              style={editMode ? { backgroundColor: "#dbeafe" } : {}}
            >
              <i className="far fa-edit"></i> edit
            </button>

            <button
              className="bg-blue-500 px-4 py-1 text-sm float-right text-white rounded-md  my-4 mx-5"
              onClick={updateUser}
              style={editMode ? { display: "block" } : { display: "none" }}
            >
              <i className="far fa-save mr-2"></i>Save
            </button>
          </div>
        </section>

        {userInfo ? (
          <div>
            <section className="grid grid-cols-2 mt-24 gap-5">
              <DynamicInput
                content={firstName}
                editMode={editMode}
                title="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <DynamicInput
                content={lastName}
                editMode={editMode}
                title="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />

              <DynamicInput
                content={email}
                editMode={editMode}
                title="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <DynamicInput
                content={phoneNumber === null ? "Not Set" : phoneNumber}
                editMode={editMode}
                title="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </section>
          </div>
        ) : null}
      </section>
    </div>
  );
};
