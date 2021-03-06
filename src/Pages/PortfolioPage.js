import React, { useState } from "react";
// import Button from "../Components/Button";
import Menu from "../Components/Menu";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import { InnerLayout, MainLayout } from "../styles/Layout";

// const allButtons = ["All", "Animation", ...new Set(portfolios.map(item => item.category))]
function PortfolioPage() {
  // eslint-disable-next-line
  const [menuItem, SetMenuItems] = useState(portfolios);
  // const [button, setButtons]= useState(allButtons);

  // const filter = (button) =>{
  //   if(button === 'All') {
  //     SetMenuItems(portfolios)
  //     return;
  //   }
  //   const filterdData = portfolios.filter(item => item.categorey === button);
  //   SetMenuItems(filterdData);
  // }
  return (
    <MainLayout>
      <Title title={"Portfolio"} span={"Portfolio"} />
      <InnerLayout>
        {/* <Button filter={filter} button={button}/> */}
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
