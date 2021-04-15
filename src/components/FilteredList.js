import { useState, useEffect } from 'react';

export default function FilteredList({
  data = [],
  itemRenderer = () => {},
  onFilter = () => {},
  containerClass = '',
  inputClass = '',
  collectionClass = ''
}) {
  const [results, setResults] = useState(data);
  const [filterString, setFilterString] = useState('');

  useEffect(() => {
    const newData =
      filterString.length === 0
        ? data
        : data.filter((item) => {
            return onFilter({ item, value: filterString });
          });
    setResults(newData);
  }, [data, filterString, onFilter]);

  useEffect(() => {
    setResults(data);
  }, [data]);

  return (
    <div className={`my-4 p-4 ${containerClass}`}>
        <input
          className={`border-b p-2 mb-4 shadow-inner bg-gray-100 min-w-full ${inputClass}`}
          placeholder="Type here to filter"
          id='filterInput'
          type='text'
          value={filterString}
          onChange={(e) => {
            setFilterString(e.target.value);
          }}
        />
      {results.length > 0 && (
        <div className={collectionClass}>
          {results.map((item, index) => {
            return itemRenderer(item);
          })}
        </div>
      )}
      {results.length === 0 && <h3>{`No results for ${filterString}`}</h3>}
    </div>
  );
}
