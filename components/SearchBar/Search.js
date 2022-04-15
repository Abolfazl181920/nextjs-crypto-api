const Search = ({ value, handlesearch }) => {
    return (
        <>
            <input
                value={value}
                onChange={handlesearch}
                type='text'
                placeholder='search ...'
            />
        </>
    )
}

export default Search
