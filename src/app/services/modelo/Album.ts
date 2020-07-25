import { Photo } from './Photo';

export class Album { 
    
    public photos:Photo[];

    constructor(
        public id:string,
        public idUser:string            
        ){            
    }
    
    
    public static createFromJsonObject(jsonObject:any):Album{
        let album:Album= new Album(
            jsonObject['id'],
            jsonObject['user_id']           
        );            
            album.photos = [];
            return album;
    }    
    public getJsonObject():any{
        let jsonObject:any={};        
        jsonObject['id']=this.id;
        jsonObject['user_id']=this.idUser;
        jsonObject['photos']=this.photos;
        
                
        return jsonObject;
    }      
    
}
