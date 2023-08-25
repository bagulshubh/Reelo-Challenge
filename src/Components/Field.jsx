import React, { useEffect, useState} from 'react'
import {MdArrowUpward , MdArrowDownward} from 'react-icons/md'

const Field = (props) =>{
    //console.log(namearr);
    const name = props.name;
    const [namearr,setnamearr] = useState([]);
    const [links,setlinks] =  useState([]);
    useEffect(()=>{
      setnamearr(props.content);
      setlinks(props.links);
    },[props.content]);
    
    //const namearr = props.content;
    console.log("In filed",namearr);
    console.log(links);
    let i = 0;
  return (
    <div className='field-wrapper'>
      <div className='header'>

        <p>{name}</p>
        <MdArrowUpward onClick={()=>{
            const arr = [...namearr].sort(); // Sort in ascending order
            setnamearr(arr);
            
        }} className='arrow'></MdArrowUpward>
        <MdArrowDownward
          onClick={()=>{
            const arr = [...namearr].sort((a, b) => b.localeCompare(a)); // Sort in descendin order
            setnamearr(arr);
          }} className='arrow'
        ></MdArrowDownward>
      </div>
      
      <div className='section'>
      {
        namearr.map( item=>{
            return(
                !links ? (
                  <div>{item}</div>
                ):(
                  <a href={links[i++]} target='_blank'>{item}</a>
                )
                
            )
        } )
      }
      </div>
    </div>
  )
}

export default Field
