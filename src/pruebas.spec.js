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
  it("Calculamos el descuento de 3% (1000 unidades), ejemplo: generar(1000, 3, NV) => 0.03", () => {
    let totalizar = new totalizador(1000, 3,"NV");
    expect(totalizar.get_descuento()).toEqual(0.03);
  });
  it("Calculamos el descuento de 5% (3000 unidades), ejemplo: generar(3000, 3, NV) => 0.05", () => {
    let totalizar = new totalizador(3000, 3,"NV");
    expect(totalizar.get_descuento()).toEqual(0.05);
  });
  it("Calculamos el descuento de 7% (7000 unidades), ejemplo: generar(7000, 3, NV) => 0.07", () => {
    let totalizar = new totalizador(7000, 3,"NV");
    expect(totalizar.get_descuento()).toEqual(0.07);
  });
  it("Calculamos el descuento de 10% (10000 unidades), ejemplo: generar(10000, 3, NV) => 0.1", () => {
    let totalizar = new totalizador(10000, 3,"NV");
    expect(totalizar.get_descuento()).toEqual(0.1);
  });
  it("Calculamos el descuento de 15% (30000 unidades), ejemplo: generar(30000, 3, NV) => 0.15", () => {
    let totalizar = new totalizador(30000, 3,"NV");
    expect(totalizar.get_descuento()).toEqual(0.15);
  });
  it("Calculamos el impuesto de UT , ejemplo: generar(1000, 3, UT) => 0.665", () => {
    let totalizar = new totalizador(30000, 3,"UT");
    expect(totalizar.get_impuesto()).toEqual(0.0665);
  });
  it("Calculamos el impuesto de NV , ejemplo: generar(1000, 3, NV) => 0.08", () => {
    let totalizar = new totalizador(30000, 3,"NV");
    expect(totalizar.get_impuesto()).toEqual(0.08);
  });
  it("Calculamos el impuesto de TX , ejemplo: generar(1000, 3, TX) => 0.0625", () => {
    let totalizar = new totalizador(30000, 3,"TX");
    expect(totalizar.get_impuesto()).toEqual(0.0625);
  });
  it("Calculamos el impuesto de AL , ejemplo: generar(1000, 3, AL) => 0.04", () => {
    let totalizar = new totalizador(30000, 3,"AL");
    expect(totalizar.get_impuesto()).toEqual(0.04);
  });
  it("Calculamos el impuesto de CA , ejemplo: generar(1000, 3, CA) => 0.0825", () => {
    let totalizar = new totalizador(30000, 3,"CA");
    expect(totalizar.get_impuesto()).toEqual(0.0825);
  });
 
});