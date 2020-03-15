import React, { useState, useRef } from 'react';
import './App.css';
import Burger from './components/burger/burger';
import Menu from './components/menu/menu';
import Main from './components/main/main';
import { useOnClickOutside, useBreakpoint } from './hooks';

const queries = {
  mw: '(max-width: 900px)',
}

function App() {
  // set media screen size
  const mql = window.matchMedia(queries.mw)

  const matchPoints = useBreakpoint(queries)

  // variable used to know if the screen is small
  var smallScreen = null //mql.matches
  if (matchPoints == null) {
    console.log("cannot establish small screen")
    smallScreen = mql.matches
  } else {
    console.log("small screen: " + matchPoints.mw)
    smallScreen = matchPoints.mw
  }

  // set if the menu should be opened
  const openMenu = (smallScreen === true) ? false : true;

  const [open, setOpen] = useState(openMenu)
  const node = useRef();

  useOnClickOutside(node, () => setOpen(openMenu));

  return (
    <div id="page">
      <div ref={node}>
        <Burger open={open} setOpen={setOpen}></Burger>
        <Menu open={open} setOpen={setOpen}></Menu>
      </div>
		  <div>
        <Main open={open} setOpen={setOpen}></Main>
      </div>
    </div>
  );
}

export default App;
