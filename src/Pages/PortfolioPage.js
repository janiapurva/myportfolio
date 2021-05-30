import React, { useState } from "react";
import Button from "../Components/Button";
import Menu from "../Components/Menu";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import { InnerLayout, MainLayout } from "../styles/Layout";

const allButtons = ["All", "Animation", ...portfolios.map(item => item.category)]
function PortfolioPage() {
  const [menuItem, SetMenuItems] = useState(portfolios);
  const [button, setButtons]= useState(allButtons);

  const filter = (button) =>{
    if(button === 'All') {
      SetMenuItems(portfolios)
    }
    const filterdData = portfolios.filter(item => item.categorey === button);
    SetMenuItems(filterdData);
  }
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"Portfolios"} />
      <InnerLayout>
        {/* <Button filter={filter} button={button}/> */}
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
