module.exports = class totalizador{
    constructor(cantidad, precio, estado){
        this.cantidad = cantidad;
        this.precio = precio;
        this.estado = estado;
    
    }
  
    get_cantidad(){
        if(this.cantidad < 0){
            return null;
        }
        return this.cantidad;
    }
    get_precio(){
        if(this.precio < 0){
            return null;
        }
        return this.precio;
    }
    get_estado(){
        return this.estado;
    }

  }
  