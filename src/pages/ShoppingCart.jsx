import React from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import CartTotal from '../components/CartTotal';
import ScrollToCategories from '../components/ScrollToCategories';
import SearchByKeyword from '../components/SearchByKeyword';
import Logo from '../components/Logo';
import OpenClosed from '../components/OpenClosed';
import Title from '../components/Title';
import BackgroundPhoto from '../components/BackgroundPhoto';

import useShoppingCart from '../hooks/useShoppingCart';

function ShoppingCart() {
  const { categories, shoppingCart } = useShoppingCart();

  return (
    <main className="menu">
      <Header
        classnames={['']}
      >
        <Logo
          className="menu-logo"
          logoURL="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
          alt="Logomarca da empresa. Adicionar descrição específica."
        />
        <OpenClosed
          className="menu-open-closed"
        />
        <Title
          className="menu-title"
          title="butech-o"
        />
        <BackgroundPhoto
          className="menu-background-photo"
          bgPhotoURL="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg"
        />
      </Header>

      <SearchBar
        classnames={['menu-search-bar']}
      >
        <SearchByKeyword
          classnames={['search-by-keyword-container', 'search-by-keyword-form', 'search-by-keyword-input']}
        />
        <ScrollToCategories
          classnames={['search-by-category']}
          scrollToCategoriesClassnames={['search-category']}
        />
      </SearchBar>

      <CategoryList
        categories={categories}
        products={shoppingCart}
        categoryClassnames={['menu-category-title']}
        productClassnames={['menu-product', 'menu-product-photo', 'menu-product-info', 'menu-product-name', 'menu-product-description', 'menu-product-price']}
      />

      <CartTotal />
    </main>
  );
}

export default ShoppingCart;
