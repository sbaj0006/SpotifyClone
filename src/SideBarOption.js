import React from "react";
import "./SidebarOption.css";

function SideBarOption({ title, Icon }) {
  return (
    <div className="siderbarOption">
      {Icon && <Icon className="siderbarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
