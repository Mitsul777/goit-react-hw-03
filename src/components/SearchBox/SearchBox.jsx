import React from 'react';
import styles from './SearchBox.module.css';

function SearchBox ({value, onFilter}) {
    return (
        <div className={styles.searchBox}>
            <p className={styles.label}>Find contacts by name</p>
            <input className={styles.input} type="text" placeholder="Search..." value={value}
                   onChange={(e) => onFilter(e.target.value)}/>
        </div>
    );
}

export default SearchBox;