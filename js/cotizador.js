// CLASE COTIZAR

class Cotizar {
    constructor(producto,IVA){
        this.producto = parseInt(producto)
        this.IVA = parseInt(IVA)
    }
    cotizar(){
        let resultado = (this.producto * this.IVA)
        return resultado.toFixed(2) 
    }
}
