import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TEAMS_URL, USERS_URL } from '../constants/';
import { teamDetailState } from '../state';
import UserCard from '../components/UserCard';
import FilteredList from '../components/FilteredList';

export default function TeamDetail() {
  const { id } = useParams();
  const [teamState, setTeamState] = useRecoilState(teamDetailState);
  const currentTeam = teamState[`${id}`];
  const [teamName, setTeamName] = useState('')
  const [memberData, setMemberData] = useState([]);

  useEffect(async () => {
    if (currentTeam) {
      setTeamName(currentTeam.name)
      return;
    }
    try {
      const response = await axios.get(`${TEAMS_URL}${id}`);
      const newState = { ...teamState };
      newState[`${id}`] = response.data;
      setTeamState(newState);

      const {teamLeadId, teamMemberIds = [], name} = response.data;
      setTeamName(name);

      axios.all([
        axios.get(`${USERS_URL}${teamLeadId}`),
        ...teamMemberIds.map((id) => axios.get(`${USERS_URL}${id}`)),
      ]).then( responseArr => {
        setMemberData( responseArr.filter( response => response?.data).map( response => {
          const {id, avatarUrl, firstName = "" , lastName = "", location = "", displayName = ""} = response.data;
          return {
            avatarUrl,
            firstName,
            lastName,
            location,
            displayName,
            teamLead: id === teamLeadId
          }
        }))
      })
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const listItem = (item) => {
    return <UserCard key={item?.id} {...item}/>
  }
  const filterTeam = ({item, value}) => {
    const haystack = `${item?.displayName.toLowerCase()}`;
    const filterd = haystack.includes(value.toLowerCase());
    return filterd;
  };

  return (
    <div className="mt-6">
      {teamName && (<h1 className='font-bold text-4xl my-2 px-3'>Team: {teamName}</h1> )}
      { memberData.length === 0 && (
        <div className="font-bold text-center text-3xl my-4"> ...Loading </div>
      )}
      { memberData.length > 0 && (
        <FilteredList data={memberData} itemRenderer={listItem} onFilter={filterTeam} collectionClass="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"/>
      )}

    </div>
  );
}
