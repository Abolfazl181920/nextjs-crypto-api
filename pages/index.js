import Search from '../components/SearchBar/Search'
import Coins from '../components/AllCoins/Coins'

export default function Home({ filteredCoins }) {
  return (
    <div>
      <Search />
      <Coins filteredCoins={filteredCoins} />
    </div>
  );
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