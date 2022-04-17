import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import Checkout from '../../shared/Checkout';
import BasketList from '../../shared/BasketList';
import { requestWithoutToken } from '../../../services/api';
import FilterForm from '../../../components/FilterForm';
import Product from '../../../components/Product';
import './Home.scss';

function Home() {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [paginatorParams, setPaginatorParams] = useState({
    rows: 12,
    page: 0,
    first: 0,
  });

  const [fastEdit, setFastEdit] = useState(false);

  const getProducts = async () => {
    localStorage.removeItem('products');
    const data = await requestWithoutToken('get', 'https://5fc9346b2af77700165ae514.mockapi.io/products');
    setTotalPage(data.length);
    localStorage.setItem('products', JSON.stringify(data));
    setProducts(data.splice(0, 12));
  };

  function handleChange(event) {
    setPaginatorParams({
      rows: event.rows,
      page: event.page,
      first: event.first,
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrapper">
      <div className="row">
        <div className="content">
          <div className="row">
            <div className={fastEdit === true ? 'filterContent active' : 'filterContent'}>
              <Button
                icon="pi pi-times"
                className="p-button-danger filterCloseBtn display_768"
                onClick={() => setFastEdit(false)}
              />
              <FilterForm />
            </div>
            <div className="productListContent">
              <Button
                label="Filter"
                icon="pi pi-plain"
                className="p-button-warning display_768"
                style={{ width: '100%', marginBottom: '20px' }}
                onClick={() => setFastEdit(true)}
              />
              {products.length > 0 && (
                <ul className="productList">
                  {products.map((product) => {
                    return (
                      <li key={product.id}>
                        <Product product={product} />
                      </li>
                    );
                  })}
                </ul>
              )}
              <Paginator
                className="bgTransparent"
                first={paginatorParams.first}
                rows={paginatorParams.rows}
                totalRecords={totalPage}
                onPageChange={(event) => handleChange(event)}
                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              />
            </div>
          </div>
        </div>
        <div className="sidebar">
          <BasketList />
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default Home;
