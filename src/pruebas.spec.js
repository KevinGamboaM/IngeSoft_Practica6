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
  it("Calculamos el precio neto, ejemplo: generar(20, 3, NV) => 60", () => {
    let totalizar = new totalizador(20, 3,"NV");
    expect(totalizar.get_precio_neto()).toEqual(60);
  });
  it("Calculamos el descuento de 3% (1000 unidades), ejemplo: generar(1000, 3, NV) => 60", () => {
    let totalizar = new totalizador(1000, 3,"NV");
    expect(totalizar.get_descuento()).toEqual(0.3);
  });
  it("Calculamos el descuento de 5% (3000 unidades), ejemplo: generar(3000, 3, NV) => 60", () => {
    let totalizar = new totalizador(3000, 3,"NV");
    expect(totalizar.get_descuento()).toEqual(0.5);
  });
 
});