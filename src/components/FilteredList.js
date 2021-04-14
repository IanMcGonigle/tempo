import { useState, useEffect } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function FilteredList({ data = [], route = 'team' }) {
  const [results, setResults] = useState(data);
  const [filterString, setFilterString] = useState('');

  useEffect(() => {
    const newData =
      filterString.length === 0
        ? data
        : data.filter((item) => {
            const haystack = `${item.name}`;
            const filterd = haystack.includes(filterString);
            return filterd;
          });
    setResults(newData);
  }, [filterString]);

  useEffect(() => {
    setResults(data);
  }, [data]);

  return (
    <Paper elevation={2}>
      <TextField
        label={`Filter ${route}`}
        value={filterString}
        onChange={(e) => {
          setFilterString(e.target.value);
        }}
      />
      <p>{filterString}</p>
      {results.length > 0 && (
        <ul>
          {results.map((item) => {
            return (
              <li>
                <Link to={`/${route}/${item?.id}`}>{item?.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
      {results.length === 0 && <h3>{`No ${route} results`}</h3>}
    </Paper>
  );
}
