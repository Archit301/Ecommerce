import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import ProductList from '../components/ProductList';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [view, setView] = useState('list');

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const handleSearch = (query) => {
    // Implement search functionality
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <button onClick={() => setView('list')}>List View</button>
      <button onClick={() => setView('grid')}>Grid View</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : view === 'list' ? (
        <ProductList products={products} />
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default Home;
