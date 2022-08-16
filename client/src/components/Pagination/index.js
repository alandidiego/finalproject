import React from 'react';
import './style.css';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className='pagination'>
                <a href="#" className='page-link'>&laquo;</a>
                {pageNumbers.map(number => (
                    <a onClick={() => paginate(number)} href='!#' className='page-link'>
                        {number}
                    </a>
                ))}
                <a href="#" className='page-link '>&raquo;</a>
            </div>
        </nav>
    );
};

export default Pagination;