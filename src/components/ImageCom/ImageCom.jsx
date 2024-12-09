import React from "react";
import Image from "next/image";
import MyImage from "../../../public/Images/Profile.png";

const ImageCom = () => {
  return (
    <div className=" object-cover rounded-full">
      <Image src={MyImage} alt="Profile" />
    </div>
  );
};

export default ImageCom;
