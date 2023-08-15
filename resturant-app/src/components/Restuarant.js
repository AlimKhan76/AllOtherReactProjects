import React, { useState } from "react";
import { Menulist } from "./Menulist";
import { Navbar } from "./Navbar";
import Menu from "./MenuApi";

export const Restuarant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const uniqueList = [
    ...new Set(
      Menu.map((e) => {
        return e.category;
      })
    ),
    "All",
  ];

  const onClick = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((e) => {
      return e.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar menuList={uniqueList} displayCategorized={onClick} />
      <div className="container mt-5">
        <Menulist menuData={menuData} />
      </div>
    </>
  );
};
