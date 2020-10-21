import React, { useState } from "react";
import Accordian from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from './Translate'
import Route from './Route'
import Header from './Header'

const items = [
  { title: "Translate", description: "Visit /translate", url:'/translate' },
  { title: "Wiki Search", description: `Visit /search`, url:'/search' },
  { title: "How", description: "Done with basic component routing in react" },
];


export default () => {
 
  return (
    <div>
  
<Header />
    <Route path="/">
      <Accordian items={items} />
    </Route>

    <Route path="/search">
      <Search />
    </Route>

    <Route path="/translate">
      <Translate />
    </Route>

    </div>
    
  );
};
