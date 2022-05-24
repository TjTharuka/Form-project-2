import React from 'react';
import { connect } from 'react-redux';
import { Loading } from '../index';

export const LoadingWrapper = ({ loading }) => {
  return <>{loading === true && <Loading isLoading={loading} />}</>;
};

const mapStateToProps = (state) => ({
  loading: state.loadingReducer.isLoading,
});

export default connect(mapStateToProps)(LoadingWrapper);
