import React from "react";
import style from "./styles/SideNav.module.scss";
import { GrGallery } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";

const SideNav = ({ selected, setSelected }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.btn_container}>
          <button
            className={style.btn}
            onClick={() => setSelected("Inquiries")}
          >
            Wedding Inquiries
          </button>
        </div>
        <div className={style.btn_container}>
          <button
            className={style.btn}
            onClick={() => setSelected("ContactInquiries")}
          >
            Contact Inquiries
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNav;
