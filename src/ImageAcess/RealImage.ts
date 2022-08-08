
import imagens from "../Images/imagens";
import IImage from "./IImage";

export default class RealImage implements IImage{
    private filename : string = null;
    constructor(private _realImage : string){
        this.filename = _realImage;
        this.DiskLoad(this.filename);
    }
    public LoadedImage(filename : string) : void{
        this.filename = filename;
        this.DiskLoad(filename);
    }
    exibicao(): void {
        console.log("Exibindo imagem...");
        console.log(this.filename);
    }
    private DiskLoad(filename : string): void{
        console.log("Carregando imagem no servidor...");
        console.log("Imagem Carregada com sucesso!");
        this.exibicao();
    }
    
}