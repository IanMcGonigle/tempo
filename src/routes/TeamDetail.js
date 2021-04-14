import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

export default function TeamDetail() {
  const { id } = useParams();

  useEffect( () => {

  })

  console.log('id ', id);
  return (
    <div>
      <h1>Team Detail</h1>
    </div>
  )
}
