import React from 'react';
import styles from '../page.module.css';
import CategoryDropdown from './categoryDropdown';
import Socials from './socials';

const SearchSection = () => {
  return (
    <div className={`col-span-6 pb-[1px] ${styles['hero_search-bg']} rounded-[10px] px-[9px] flex items-end relative`}>
      <CategoryDropdown />
      <Socials />
    </div>
  );
};

export default SearchSection;
