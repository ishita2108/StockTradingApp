import React from 'react'
import StockList from "../components/StockList"
import AutoComplete from "../components/AutoComplete"

const StockOverviewPage = () => {
  return (
    <main>
    <div>StockOverviewPage</div>
    <AutoComplete/>
    <StockList/>
    </main>
  )
}

export default StockOverviewPage