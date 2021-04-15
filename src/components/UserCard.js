export default function UserCard({ avatarUrl, firstName = "" , lastName = "", location = "", teamLead = false }) {
  return (
    <div className='p-4 shadow-md flex flex-col'>
      <img className="rounded-full" src={`${avatarUrl}`} alt={`${firstName}'s avatar`}/>
      <dl>
        <dt className="font-bold">{`${firstName} ${lastName}`}</dt>
        { teamLead && (<dd className="font-semibold text-sm">Team Lead</dd>) }
        <dd className="text-xs">From: {location}</dd>
      </dl>
    </div>
  )
}
