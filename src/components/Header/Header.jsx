import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <p className="topic">Album example</p>
      <p className="headerText">
          Something short and leading about the collection below—its contents, the creator, etc. Make
          it short and sweet, but not too short so folks don't simply skip over it entirely.
      </p>
      <div className="headerBtn">
          <button className="headerBtn" id="mainBtn"> Main call to action </button>
          <button className="headerBtn" id="secondBtn"> Secondary action </button>
      </div>
    </div>
  );
}

export default Header