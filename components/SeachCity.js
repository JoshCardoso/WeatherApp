"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faLocationDot,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Cards } from "./Cards";
import { Higthlights } from "./Higthlights";
import { Citys } from "./Citys";

const key = "767b7eb5a8a7aa692e7671f4892dc803";

export const SeachCity = () => {
  const [dados, setDados] = useState();
  const [dados2, setDados2] = useState();
  const [city, setCity] = useState("barretos");
  const [tempo, setTempo] = useState("Hail");
  const [troca, setTroca] = useState()

  useEffect(() => {
    const promesa = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );
    const promesa2 = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
    );

    Promise.all([promesa, promesa2]).then(async (valores) => {
      const dado = await valores[0].json();
      const dado2 = await valores[1].json();
      setDados(dado);
      setDados2(dado2);
    });
  }, [city]);

  const stringData = (data) => {
    const str = new Date(data)
      .toLocaleDateString("en-us", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
      .replace(",", "")
      .split(" ");
    const weekday = str[0].slice(0, 3);
    const month = str[1].slice(0, 3);
    return `${weekday}, ${str[2]} ${month}`;
  };

  return (
    <div className="bgFundo">
      {troca &&(<div className="backSeach">
        <Citys cidade={ setCity } trocas={setTroca}/>
      </div>)}
      <div className="back">
        <div className="barra">
          <div className="buscaLoc">
            <button onClick={()=> setTroca(true)} className="bSeach">Seach for places</button>
          </div>
          <button className="imgLoc bSeach">
            <FontAwesomeIcon icon={faLocation} />
          </button>
        </div>
        {dados && (
          <div>
            <div>
              <Image
                src={`/../public/Cloud-background.png`}
                className="nuvens"
                width={450}
                height={350}
                alt=""
              />
              <div>
                <Image
                  src={`/../public/${dados.weather[0].main}.png`}
                  className="tempo"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
            </div>
            <div className="dadosLateral">
              <div className="infoCity">
                <h1>{dados.main.temp}</h1>
                <h2>°C</h2>
              </div>
              <h3>{dados.weather[0].main}</h3>
              <div>
                <p className="infoCity">Today . {stringData(new Date())}</p>
              </div>
              <div className="infoLoc">
                <p>
                  <FontAwesomeIcon
                    className="locationcity"
                    icon={faLocationDot}
                  />
                  {dados.name}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Cards infos={dados2} funcao={stringData} />
        <Higthlights infos={dados} />
      </div>
    </div>
  );
};
