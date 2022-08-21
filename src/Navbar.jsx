import React from "react";
function Navbar(props) {
  return (
    <div class="site-header__top">
      <div class="wrapper site-header__wrapper">
        <div class="site-header__middle">
          <a href="https://github.com/sandxru/VaxPass" class="brand">VaxPass</a>
        </div>
        <div class="site-header__end">
        <botton onClick={props.onClick} class="button">Connect Wallet</botton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
