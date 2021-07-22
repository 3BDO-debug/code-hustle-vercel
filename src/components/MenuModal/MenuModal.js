import React from "react";

function MenuModal() {
  return (
    <div
      id="menu"
      className="p-0 modal fade"
      role="dialog"
      aria-labelledby="menu"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-slideout" role="document">
        <div className="modal-content full">
          <div className="modal-header" data-dismiss="modal" id="menu-dismiss">
            Menu <i className="icon-close" />
          </div>
          <div className="menu modal-body">
            <div className="row w-100">
              <div className="items p-0 col-12 text-center">
                {/* Append [navbar] */}
              </div>
              <div className="contacts p-0 col-12 text-center">
                {/* Append [navbar] */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
