import { useRouter } from 'next/router'
import MapedCoins from '../../components/AllCoins/MapedCoins';

const Post = ({ coin }) => {

    const router = useRouter()
    const { pid } = router.query

    return (
        <div>
            <span> {coin.name} </span>
            <span> {coin.symbol} </span>
            <MapedCoins id={pid} />
        </div>
    )
}

export default Post


export const getServerSideProps = async (context) => {

    const { id } = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await res.json()

    return {
        props: {
            coin: data
        }
    }
}