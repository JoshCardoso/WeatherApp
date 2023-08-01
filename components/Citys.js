"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react'

export const Citys = ({ cidade,trocas }) => {
 const [change, setChange] = useState();

function changeCity(){
  cidade(change),
  trocas(false)
}


  return (
    <div className="buscaBlo">
      <div className="fechar">
        <button onClick={()=> trocas(false)}>X</button>
      </div>
      <div className="buscainput">
        <div>
          <FontAwesomeIcon className="lupa" icon={faSearch} />
          <input onChange={(e)=> setChange(e.target.value)} type="text" placeholder="search location" />
        </div>
        <button onClick={changeCity}>Seach</button>
      </div>
      <div>
        <div className="block">
          <p onClick={()=> {cidade('london')
          trocas(false)
        }}>London</p>
          
        </div>
        <div className="block">
          <p onClick={()=> {cidade('barcelona')
        trocas(false)
        }}>Barcelona</p>
        </div>
        <div className="block">
          <p onClick={()=> {cidade('long beach')
        trocas(false)
        }}>Long Beach</p>
        </div>
      </div>
    </div>
  );
};
