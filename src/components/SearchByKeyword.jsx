/* eslint-disable react/prop-types */
import React from 'react';

function SearchByKeyword({ classnames }) {
  return (
    <span className={classnames[0]}>
      <form className={classnames[1]}>
        <input
          className={classnames[2]}
          type="text"
          name=""
          id=""
        />
      </form>
    </span>
  );
}

export default SearchByKeyword;
