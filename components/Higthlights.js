import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export const Higthlights = ({ infos }) => {
  function miles(num) {
    return (num = num / 1000);
  }

  return (
    <div>
      {infos && (
        <div>
          <div className="cardinf">
            <h2>Today&apos;s Higthlights</h2>
          </div>
          <div className="cardsinfBG">
            <div className="cardsinf">
              <div>
                <p className="tituloHight">Wind status</p>
              </div>
              <div>
                <h3>{infos.wind.speed}</h3>
                <p>mph</p>
              </div>
              <div>
                <div className="arrowBg">
                  <FontAwesomeIcon
                    style={{ transform: `rotate(${infos.wind.deg}deg)` }}
                    className="arrow"
                    icon={faLocationArrow}
                  />
                </div>
                <div>
                  <p className="tTemp">WSW</p>
                </div>
              </div>
            </div>
            <div className="cardsinf">
              <div>
                <p className="tituloHight">Humidity</p>
              </div>
              <div>
                <h3>{infos.main.humidity}</h3>
                <p>%</p>
              </div>
              <div id="porcentagem">
                <div>
                  <p>0</p>
                  <p>50</p>
                  <p>100</p>
                </div>
                <div className="fBranco">
                  <div style={{'width':` ${infos.main.humidity}%`}} className="fAmarelo">
                  </div>
                </div>
              </div>
            </div>
            <div className="cardsinf">
              <div>
                <p className="tituloHight">Visibility</p>
              </div>
              <div>
                <h3>{miles(infos.visibility)}</h3>
                <p>miles</p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="cardsinf">
              <div>
                <p className="tituloHight">Air Pressure</p>
              </div>
              <div>
                <h3>{infos.main.pressure}</h3>
                <p> mb</p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
