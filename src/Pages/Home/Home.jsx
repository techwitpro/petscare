import About from "./About";
import ClientSay from "./ClientSay";
import Contact from "./Contact";
import Doctors from "./Doctors";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Phone from "./Phone";
import Posts from "./Posts";
import PricingPlan from "./PricingPlan";
import WhatHappening from "./WhatHappening";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Phone></Phone>
      <WhatHappening></WhatHappening>
      <Gallery></Gallery>
      <Doctors></Doctors>
      <FAQ></FAQ>
      <PricingPlan></PricingPlan>
      <ClientSay></ClientSay>
      <Posts></Posts>
      <Contact></Contact>
    </div>
  )
}
