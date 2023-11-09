const veiculos = [
  { modelo: "Passeio", marca: "Nissan" },
  { modelo: "Passeio", marca: "BMW" },
  { modelo: "Esportivo", marca: "Honda" },
  { modelo: "Esportivo", marca: "Porsche" },
  { modelo: "Passeio", marca: "Tesla" },
];

const exibeVeiculos = () => {
  const render = document.getElementById("render");

  render.innerHTML = "";
  for (veiculo of veiculos) {
    render.innerHTML += `
    <h2>Modelo: <span style="text-decoration: underline;">${veiculo.modelo}</span></h2>
    <p>Marca: <strong>${veiculo.marca}</strong></p>
    `;
  }
};
