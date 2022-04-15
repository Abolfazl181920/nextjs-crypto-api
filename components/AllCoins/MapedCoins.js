import styles from '../../styles/MapedCoins.module.css'

const MapedCoins = ({ name, last24h, current_price }) => {
    return (
        <div>
            <div className={styles.coin_body}>
                <span> {name} </span>
                <span> {current_price} </span>
                <span> {last24h} </span>
            </div>
        </div>
    )
}

export default MapedCoins
