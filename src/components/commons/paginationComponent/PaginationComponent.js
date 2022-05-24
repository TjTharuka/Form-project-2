import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function PaginationComponent({
  itemCount,
  itemsDisplayed,
  onPaginationChange,
  forcePage,
}) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(Math.ceil(itemCount / itemsDisplayed));
  }, [itemCount, itemsDisplayed]);

  const pageChange = (value) => {
    onPaginationChange(value.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        forcePage={forcePage - 1}
        pageCount={count}
        onPageChange={pageChange}
        breakLabel="..."
        breakClassName="break-me"
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
      />
    </div>
  );
}

export default PaginationComponent;
