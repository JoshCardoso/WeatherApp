"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Cards } from "./Cards";
import { Higthlights } from "./Higthlights";

const key = "767b7eb5a8a7aa692e7671f4892dc803";

export const SeachCity = () => {
  const [dados, setDados] = useState();
  const [city, setCity] = useState("praia grande");
  const [tempo, setTempo] = useState("Hail");
  const promesa2 = fetch(``);

  useEffect(() => {
    const promesa = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
    Promise.all([promesa]).then(async (valores) => {
      const dado = await valores[0].json();
      setDados(dado);
      console.log(dados.weather[0].main);
    });
  }, [city]);

  return (
    <div>
      <div className="back">
        <div className="barra">
          <div className="buscaLoc">
            <button className="bSeach">Seach for places</button>
          </div>
          <button className="imgLoc bSeach">
            <FontAwesomeIcon className="location" icon={faLocation} />
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
                <h1>15°C</h1>
              </div>
              <h2 className="infoCity">today . fri,5 jun</h2>
              <div className="infoLoc">data</div>
              <div className="infoLoc">
                <FontAwesomeIcon className="location" icon={faLocationPin} />
                {dados.name}
              </div>
            </div>
          </div>
        )}
      </div>
      <Cards />
      <Higthlights />
    </div>
  );
};
