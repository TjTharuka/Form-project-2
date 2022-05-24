import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import styles from './InfiniteScrollComponent.module.scss';

const InfiniteScrollComponent = ({
  data,
  getMoreData,
  children,
  scrollableTarget,
  pageScroll,
  border,
}) => {
  return (
    <>
      <InfiniteScroll
        style={{ overflowX: 'hidden' }}
        dataLength={data ? data.recordsFiltered : 0}
        next={getMoreData}
        hasMore={data && data.recordsTotal > data.recordsFiltered}
        loader={<div className="col-md-12 text-center">Loading...</div>}
        scrollableTarget={!pageScroll && scrollableTarget}
      >
        {children}
        {border && (
          <div className="d-flex justify-content-center">
            <div className={styles.borderBottom} />
          </div>
        )}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrollComponent;
