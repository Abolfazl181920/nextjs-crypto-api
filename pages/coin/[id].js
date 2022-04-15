import { useRouter } from 'next/router'
import MapedCoins from '../../components/AllCoins/MapedCoins';

const Post = () => {

    const router = useRouter()
    const { pid } = router.query

    return (
        <div>
            {pid}
            <MapedCoins id={pid} />
        </div>
    )
}

export default Post
