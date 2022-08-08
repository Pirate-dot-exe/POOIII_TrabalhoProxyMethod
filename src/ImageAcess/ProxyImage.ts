import IImage from "./IImage";
import RealImage from "./RealImage";

export default class ProxyImage implements IImage{
    private filename : string;
    constructor(private _proxyImage : string ){
        this.filename = _proxyImage;
    }
    private _realImage : RealImage;
    exibicao(): void {
        console.log("inicando requisisção ao servidor...");
        if(this._realImage == null){
            this._realImage = new RealImage(this.filename);
        }
        
    }
    alterar(): void{
        //O método não foi implementado mas não interfere na conexão do servidor
    }

}