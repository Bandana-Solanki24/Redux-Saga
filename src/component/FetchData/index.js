import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchedData } from '../../Redux/action';

function FetchData() {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.reducerData)

  useEffect(()=>{
    dispatch(fetchedData())
  },[])


  return (
    <div>
      {data.map((item)=>(        
      <p>{item.title}</p>

      ))}
        
    </div>
  )
}

export default FetchData