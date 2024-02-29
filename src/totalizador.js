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
    get_precio_neto(){
        return this.cantidad * this.precio;
    }
    get_descuento(){
        if(this.cantidad>=1000 && this.cantidad < 3000){
            return 0.03;
        }else if(this.cantidad>=3000 && this.cantidad < 7000){
            return 0.05;
        }else if(this.cantidad>=7000 && this.cantidad < 10000){
            return 0.07;
        }else if(this.cantidad>=10000 && this.cantidad < 30000){
            return 0.1;
        }else if(this.cantidad>=30000){
            return 0.15;
        }            

    }
    get_impuesto(){
        if(this.estado=="UT"){
            return 0.0665;
        }else if(this.estado=="NV"){
            return 0.08;
        }else if(this.estado=="TX"){
            return 0.0625; 
        }               

    }


  }
  