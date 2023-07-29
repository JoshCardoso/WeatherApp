'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Citys = () => {
  return (
    <div className="buscaBlo">
      <div className="fechar">
        <button>X</button>
      </div>
      <div className="buscainput">
        <div>
        <FontAwesomeIcon className='lupa' icon={faSearch} />
        <input type="text" placeholder="search location"/>
        </div>
        <button>Seach</button>
      </div>
      <div>
        <div className="block active">
          <p>London</p>
          <p>&gt;</p>
        </div>
        <div className="block">
          <p>Barcelona</p>
        </div>
        <div className="block">
          <p>Long Beach</p>
        </div>
      </div>
    </div>
  );
};
