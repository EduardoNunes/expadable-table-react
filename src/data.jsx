const cars = [
  {
    marca: "Bugatti",
    tipo: "La Voiture Noire",
    preco: "$18,700,000",
    ano: "2019"
  },
  {
    marca: "Pagani",
    tipo: "Zonda HP Barchetta",
    preco: "$17,500,000",
    ano: "2018"
  },
  {
    marca: "Rolls-Royce",
    tipo: "Sweptail",
    preco: "$13,000,000",
    ano: "2017"
  },
  {
    marca: "Bugatti",
    tipo: "Centodieci",
    preco: "$9,000,000",
    ano: "2022"
  },
  {
    marca: "Bugatti",
    tipo: "Divo",
    preco: "$5,800,000",
    ano: "2020"
  },
  {
    marca: "Mercedes-Benz",
    tipo: "Maybach Exelero",
    preco: "$8,000,000",
    ano: "2004"
  },
  {
    marca: "Koenigsegg",
    tipo: "CCXR Trevita",
    preco: "$4,800,000",
    ano: "2009"
  },
  {
    marca: "Lamborghini",
    tipo: "Veneno",
    preco: "$4,500,000",
    ano: "2013"
  },
  {
    marca: "Lamborghini",
    tipo: "Sian",
    preco: "$3,600,000",
    ano: "2021"
  },
  {
    marca: "Lykan",
    tipo: "Hypersport",
    preco: "$3,400,000",
    ano: "2013"
  }
];

const columns = [
  {
    name: 'marca',
    selector: row => row.marca,
  },
  {
    name: 'tipo',
    selector: row => row.tipo,
  },
  {
    name: 'preco',
    selector: row => row.preco,
  },
  {
    name: 'ano',
    selector: row => row.ano,
  },
];

export { cars, columns };
