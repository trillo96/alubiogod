export class Photo {    

    constructor(
        public id:string,
        public idAlbum:string,
        public url:string
        
             
        ){
    }
    
    
    public static createFromJsonObject(jsonObject:any):Photo{
        let photo:Photo= new Photo(
            jsonObject['id'],
            jsonObject['album_id'],
            jsonObject['url'],
            
        );            
            return photo;
    }          
    
}
