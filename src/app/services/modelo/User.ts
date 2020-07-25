import { Album } from './Album';

export class User {   
    
    public isFavorito:boolean;
    public fotos:string[];
    

    constructor(
        public id:string,
        public first_name:string,
        public last_name:string,
        public gender:string,
        public status:string,
        public dob:string,
        public email:string,
        public phone:string,
        public website:string,
        public address:string        
        ){
            
    }
    
    
    public static createFromJsonObject(jsonObject:any):User{
        let user:User= new User(
            jsonObject['id'],
            jsonObject['first_name'],
            jsonObject['last_name'],
            jsonObject['gender'],
            jsonObject['status'],
            jsonObject['dob'],
            jsonObject['email'],
            jsonObject['phone'],
            jsonObject['website'],
            jsonObject['address']
            );     
            user.fotos = [];      
            return user;
    }

    public getJsonObject():any{
        let jsonObject:any={};        
        jsonObject['id']=this.id;
        jsonObject['first_name']=this.first_name;
        jsonObject['last_name']=this.last_name;
        jsonObject['gender']=this.gender;
        jsonObject['status']=this.status;
        jsonObject['dob']=this.dob;
        jsonObject['email']=this.email;
        jsonObject['phone']=this.phone;
        jsonObject['website']=this.website;
        jsonObject['address']=this.address;
                
        return jsonObject;
    }
    
}
