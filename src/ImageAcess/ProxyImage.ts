import IImage from "./IImage";
import RealImage from "./RealImage";

export default class ProxyImage implements IImage{
    private filename : string;
    constructor(private _proxyImage : string ){
        this.filename = _proxyImage;
    }
    private _realImage : RealImage;
    exibicao(): void {
        console.log("inicando requsisção ao servidor...");
        if(this._realImage == null){
            this._realImage = new RealImage(this.filename);
            //realImage.exibicao();
        }
        
    }

}