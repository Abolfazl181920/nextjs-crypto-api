import { useState } from 'react'
import Search from '../components/SearchBar/Search'
import Coins from '../components/AllCoins/Coins'

export default function Home({ filteredCoins }) {

  const [ search, setSearch ] = useState('')

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div>
      <Search value={search} handlesearch={handleSearch} />
      <Coins filteredCoins={allCoins} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const fetchData = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

  const filteredCoins = await fetchData.json()

  return {
    props: {
      filteredCoins
    }
  }
}