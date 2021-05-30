import React,{useState} from 'react'
import Title from '../Components/Title'
import portfolios from '../data/portfolios';
import { InnerLayout, MainLayout } from '../styles/Layout'

function PortfolioPage() {
  const [menuItem, SetMenuItems] = useState(portfolios);
  return (
    <MainLayout>
    <Title title={'Portfolios'} span={'Portfolios'}/>
      <InnerLayout>

      </InnerLayout>
    </MainLayout>
  )
}

export default PortfolioPage
