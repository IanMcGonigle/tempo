import { Link } from 'react-router-dom';
import FilteredList from '../components/FilteredList';

export default function TeamIndex({ data }) {
  return (
    <div>
      <h1>Team Index</h1>
      <FilteredList data={data} route="team" />
    </div>
  );
}
