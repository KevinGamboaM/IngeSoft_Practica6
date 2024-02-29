const totalizador = require("./totalizador.js");


describe("Totalizador", () =>{
  it("Si genero la cantidad, me genera la cantidad ejemplo: generar(1) => 1", () => {
    let totalizar = new totalizador(1);
    expect(totalizar.get_cantidad()).toEqual(1);
  });
  it("Si genero la cantidad, me genera el precio ejemplo: generar(20) => 20", () => {
    let totalizar = new totalizador(5,20);
    expect(totalizar.get_precio()).toEqual(20);
  });
  it("Si genero el estado, me genera el estado ejemplo: generar(NV) => NV", () => {
    let totalizar = new totalizador(5,20,"NV");
    expect(totalizar.get_estado()).toEqual("NV");
  });
  it("Si la cantidad ingresada es negativa me genera NULL: generar(-1) => null", () => {
    let totalizar = new totalizador(-1,20,"NV");
    expect(totalizar.get_cantidad()).toEqual(null);
  });
  it("Si el precio ingresado es negativo me genera NULL: generar(-10) => null", () => {
    let totalizar = new totalizador(-1,-10,"NV");
    expect(totalizar.get_precio()).toEqual(null);
  });
 
});