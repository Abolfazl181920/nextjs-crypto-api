import MapedCoins from './MapedCoins'

const Coins = ({ filteredCoins }) => {
    return (
        <>
            {
                filteredCoins.map((coin => (
                    <MapedCoins
                        key={coin.id}
                        name={coin.name}
                        current_price={coin.current_price}
                        last24h={coin.market_cap_change_percentage_24h}
                    />
                )))
            }
        </>
    )
}

export default Coins
