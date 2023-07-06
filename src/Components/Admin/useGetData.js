import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase/Config'
import { collection,doc,getDocs,onSnapshot } from 'firebase/firestore'
import { async } from '@firebase/util'
const useGetdata =(collectionName)=> {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const collectionRef = collection(db,collectionName)

  useEffect(()=>{
    const getData =async()=>{
       await onSnapshot(collectionRef,(snapshot)=>{
        setData(snapshot.docs.map(doc=>
          (
            {
          ...doc.data(),id:doc.id
            })));
            setLoading(false)

      });
    

    };
    getData();

  }
  
  
  ,[]);
 
  return { data,loading };
};

export default useGetdata