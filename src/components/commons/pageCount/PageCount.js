import React from 'react';

function PageCount({ recordsFiltered, totalRecords, customClass }) {
  return (
    <div className={customClass}>
      <label className="pr-2">Showing</label>
      {recordsFiltered}
      <label className="pl-1">
        out of
        <span className="pl-1">{totalRecords}</span>
      </label>
    </div>
  );
}

export default PageCount;
