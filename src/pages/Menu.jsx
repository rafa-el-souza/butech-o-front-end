import React from 'react';

import MenuHeader from '../components/MenuHeader';
import MenuLogo from '../components/MenuLogo';
import MenuOpenClosed from '../components/MenuOpenClosed';
import MenuTitle from '../components/MenuTitle';
import MenuBackgroundPhoto from '../components/MenuBackgroundPhoto';
import MenuSearchBar from '../components/MenuSearchBar';
import SearchByCategory from '../components/SearchByCategory';
import SearchByKeyword from '../components/SearchByKeyword';
import MenuCategoryList from '../components/MenuCategoryList';

function Menu() {
  return (
    <main>
      <MenuHeader>
        <MenuLogo
          className="menu-logo"
          logoURL="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        />
        <MenuOpenClosed
          className="menu-open-closed"
        />
        <MenuTitle
          className="menu-title"
          title="butech-o"
        />
        <MenuBackgroundPhoto
          className="menu-background-photo"
          bgPhotoURL="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg"
        />
      </MenuHeader>

      <MenuSearchBar>
        <SearchByKeyword />
        <SearchByCategory />
      </MenuSearchBar>

      <MenuCategoryList />
    </main>
  );
}

export default Menu;
