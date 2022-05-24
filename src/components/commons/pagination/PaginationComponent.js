import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { v4 } from 'uuid';

export const PaginationComponent = ({ paginationNumbers }) => {
  return (
    <>
      <nav aria-label="...">
        <Pagination>
          <PaginationItem className="disabled ">
            <PaginationLink
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              tabIndex="-1"
            >
              <i className="fa fa-angle-left" />
              <span className="sr-only">Previous</span>
            </PaginationLink>
          </PaginationItem>
          {paginationNumbers.map((numberItem) => {
            return (
              <div key={v4()}>
                {numberItem.active ? (
                  <PaginationItem className="active ">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      {numberItem.number}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      {numberItem.number}
                    </PaginationLink>
                  </PaginationItem>
                )}
              </div>
            );
          })}

          <PaginationItem>
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              <i className="fa fa-angle-right" />
              <span className="sr-only">Next</span>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
};

export default PaginationComponent;
