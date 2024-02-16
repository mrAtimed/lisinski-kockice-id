import { useState } from "react";
import LCP from "@/Components/ui/LCP";
import MainNav from "@/Components/MainNav";

import O365 from "./O365";
export default function Authenticated({ title, btn, children, lcp = true, box = true }) {
  return (
    <>
      {/* <O365> */}
      <MainNav></MainNav>
      <main>
        {lcp && <LCP title={title}>{btn}</LCP>}
        <div className={box ? "container" : "container-fluid"}>{children}</div>
      </main>
      {/* </O365> */}
    </>
  );
}
