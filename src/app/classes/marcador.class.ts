

export class Marcador{
    
    public titulo: string = 'Sin titulo';
    public desc: string = 'Sin descripcion';
    public lat: number;
    public lng:number;
    constructor(lat: number, lng: number){
        this.lat = lat;
        this.lng = lng;
     }

}