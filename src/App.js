import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DataItem from "./DataItem";
import {
  HOMICIDES_PER_DAY,
  CRIMINALITY_PER_DAY,
  PIB_IMPACT_PER_DAY,
  HEALTH_IMPACT,
} from "./Constants";
import "./App.css";

function App() {
  const [days, setDays] = useState(0);
  return (
    <div className="App">
      <div>
        <h2>Risco Energia</h2>
        <div style={{ marginTop: 64 }}>
          <h2>Dias Sem Energia</h2>
          <TextField
            id="days-without-energy"
            type="number"
            value={days}
            onChange={(event) => {
              setDays(event.target.value);
            }}
          />
        </div>
        <div>
          <DataItem title="Homicídios">{days * HOMICIDES_PER_DAY}</DataItem>
          <DataItem title="Criminalidade">
            {days * CRIMINALITY_PER_DAY}%
          </DataItem>
          <DataItem title="Impacto Econômico">
            R${" "}
            {(days * PIB_IMPACT_PER_DAY).toLocaleString("pt-BR", {
              currency: "BRL",
            })}
          </DataItem>
          <DataItem title="Impacto Saúde">
            {days * HEALTH_IMPACT}% de aumento de mortalidade por hospital
          </DataItem>
        </div>
      </div>
    </div>
  );
}

export default App;
