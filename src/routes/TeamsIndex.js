import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import FilteredList from '../components/FilteredList';

export default function TeamsIndex({ store, name = "Team", type = "team"}) {
  const data = useRecoilValue(store);
  const listItem = (item) => {
    return <Link key={item?.id} className="block p-2 border-b hover:bg-gray-200" to={`/team/${item?.id}`}>{item?.name}</Link>
  }
  const filterTeams = ({item, value}) => {
    const haystack = `${item?.name}`;
    const filterd = haystack.includes(value);
    return filterd;
  };

  return (
    <div>
      <FilteredList data={data} route={type} itemRenderer={listItem} onFilter={filterTeams}/>
    </div>
  );
}
