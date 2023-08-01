import Image from "next/image";

export const Cards = ({ infos, funcao }) => {
  const infor = infos ? infos.list : [];

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
    <div className="card">
      <div>
        {infor &&
          infor.map((el, i) => {
            if (i % 8 === 0) {
              return (
                <div key={i} className="cards">
                  <div id='cConteudo'>
                    <p>{funcao(el.dt_txt)}</p>
                    <Image
                      src={`/${el.weather[0].main}.png`}
                      width={50}
                      height={50}
                      alt=""
                    />
                    <div>
                      <p>{el.main.temp_min.toFixed(0)}°C </p>
                      <p>{el.main.temp_max.toFixed(0)}°C </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
