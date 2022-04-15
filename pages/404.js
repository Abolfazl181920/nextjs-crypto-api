import Link from 'next/link'

const Error404 = () => {
    return (
        <div>
            Error: This Page Is Not Found!
            <Link href='/'>
                <button>Redirect HomePage</button>
            </Link>
        </div>
    )
}

export default Error404
