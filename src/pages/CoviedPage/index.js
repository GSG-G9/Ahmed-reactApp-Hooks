import { useState, useEffect, useContext } from "react";
import { CovidContext } from "../../context/CovidContext";

const CovidPage = () => {
  const data = useContext(CovidContext);
  const { covid, getCountryName } = data;
  const [country, setCountry] = useState("");
  const handelChange = (e) => setCountry(e.target.value);
  const handelSubmit = () => getCountryName(country);
  
/* console.log(value,'sss');
 */
  console.log(covid,'ggg');

  return (
    <div>
      <input type="text" onChange={handelChange} />
      <button type="button" onClick={handelSubmit}>
        submit
      </button>
      {covid && 
        <div>
          <p>The Country is:{covid.Country}</p>
          <p>The Date is:{covid.Date}</p>
          <p>Number Of Deaths is:{covid.Deaths}</p>
          <p>Number Of Active is:{covid.Active}</p>
          <p>Number Of Recovered is :{covid.Recovered}</p>
          CovidPage
        </div>
      }
    </div>
  );
};

export default CovidPage;
