import React from "react";
import { useContextMenu } from "../Context/ContextMenuContext";
import { useProxyGroup } from "../Context/ProxyContext";
import * as FaIcons from "react-icons/fa";
import "./ContextMenu.css";

function Contextmenu() {
  const { xPos, yPos, visibility } = useContextMenu();
  const { ProxyGroup, setProxyGroup, ID } = useProxyGroup();

  const deleteProxy = (id) => {
    setProxyGroup(ProxyGroup.filter((proxy) => proxy !== ProxyGroup[id]));
  };

  return (
    <>
      <div
        className="context-menu"
        style={{
          top: yPos,
          left: xPos,
          visibility: visibility ? "visible" : "hidden",
        }}
      >
        <div className="context-menu-list">
          <span>
            <FaIcons.FaCopy />
          </span>
          <span>Copy</span>
        </div>
        <div
          className="context-menu-list"
          onClick={() => {
            deleteProxy(ID);
          }}
        >
          <span>
            <FaIcons.FaTrash />
          </span>
          <span>Delete</span>
        </div>
      </div>
    </>
  );
}

export default Contextmenu;
