import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Dummy data for demonstration
  const data = [
    { id: 1, name: 'Product A', type: 'product' },
    { id: 2, name: 'Product B', type: 'product' },
    { id: 3, name: 'Blog Post 1', type: 'blog' },
    { id: 4, name: 'Blog Post 2', type: 'blog' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate an API call
    setTimeout(() => {
      const filteredResults = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex items-center justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products, blog posts, etc..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none"
        >
          Search
        </button>
      </form>

      {/* Search Results */}
      <div className="mt-6">
        {isSearching ? (
          <p className="text-center text-gray-500">Searching...</p>
        ) : (
          <div>
            {results.length > 0 ? (
              <ul className="space-y-4">
                {results.map((item) => (
                  <li key={item.id} className="border-b border-gray-200 pb-2">
                    <Link
                      to={`/${item.type}/${item.id}`}
                      className="flex items-center justify-between hover:text-indigo-600"
                    >
                      <span>{item.name}</span>
                      <span className="text-sm text-gray-500">{item.type === 'product' ? 'Product' : 'Blog'}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">No results found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
