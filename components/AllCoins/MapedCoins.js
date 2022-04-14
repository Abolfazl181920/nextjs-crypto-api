const MapedCoins = ({ name, image, last24h, current_price }) => {
    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <span> {name} </span>
                <span> {current_price} </span>
                <span> {last24h} </span>
            </div>
        </div>
    )
}

export default MapedCoins
