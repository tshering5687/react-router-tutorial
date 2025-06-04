import { useSearchParams } from 'react-router-dom'

export default function() {
    const [SearchParams, setSearchParams] = useSearchParams()
    const query = SearchParams.get('q') || ''

    const handleSearch = (e) => {
        e.preventDefualt()
        const formData = new FormData(e.target)
        setSearchParams({ q: formData.get('query') })
    }

  return (
    <div>
        <h1>Search</h1>
        <section className='card'>
            <p>This component demonstrates working with query parameters.</p>
            <form onSubmit={handleSearch}>
                <input 
                name="query" 
                defaultValue={query}
                placeholder='Search term...'
                />
                <button type='submit'>Search</button>
            </form>
            {query && (
                <div style={{ marginTop: '1.5rem' }}>
                    <h2>Search Results for: {query}</h2>
                    <p>Displaying search results for "{query}"...</p>
                </div>
            )}
        </section>
    </div>
  )
}
