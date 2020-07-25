import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from './modelo/User';
import { ContadorGatosService } from './contador-gatos.service';
import { Album } from './modelo/Album';
import { Photo } from './modelo/Photo';
import { WeekDay } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public urlApi = 'https://gorest.co.in/public-api/'; 
  public token = 'access-token=OvGGrTfHvCDAkTGt-wcWhPaJWzMAyzW1yu1Q';

  users:User[]=[];
  update$ = new EventEmitter<User[]>();  
  pagesDisp:number;

  constructor(
    public http: HttpClient, public gatosService:ContadorGatosService
  ) { }
  getUsuarios(page:number):Promise<User[]> {
    let promise = new Promise<User[]>((resolve, reject) => {
      this.http.get(this.urlApi+'users'+'?page='+page+'&'+this.token)
      .toPromise().then(
        (data:any) => { // Success
          this.gatosService.aumentarContador$.emit(1);
          let user:User;
          let users:User[]=[];
          this.pagesDisp=Number.parseInt(data._meta.pageCount);
          for(let userJson of data.result){
              user=User.createFromJsonObject(userJson);
              users.push(user);
          }
          
          resolve(users);
        }
        
      )
      .catch((error:Error)=>{
        reject(error);});
    });
    return promise;
  }
  

  getUsuario(users:User[], id:string):User {
    return users.find(user => user.id===id);
}
  
getUsuariosPorNombre(users:User[],nombre:string):User[] {  
  return users.filter(user => user.first_name.toLocaleUpperCase().includes(nombre.toLocaleUpperCase()));
}

getAlbumsUser(id:string):Promise<Album[]> {
  let promise = new Promise<Album[]>((resolve, reject) => {
    this.http.get(this.urlApi+'albums'+'?user_id='+id+'&'+this.token).toPromise()
        .then((data:any)=>{
          let result = data.result;
          this.gatosService.aumentarContador$.emit(1);
          let albums:Album[]=[]; 
          result.forEach(albumJson => {
            let album:Album;
            album=Album.createFromJsonObject(albumJson);           
            albums.push(album);
          });           
            
                       
            console.log('albumsSinFotos',albums);          
            resolve(albums);
        })
        .catch( (error:Error)=>{
            reject(error.message);
        });
});
return promise;
}

getPhotosAlbum(id:string):Promise<Photo[]> {
  let promise = new Promise<Photo[]>((resolve, reject) => {
    this.http.get(this.urlApi+'photos'+'?album_id='+id+'&'+this.token).toPromise()
        .then((data:any)=>{
          let result = data.result
          this.gatosService.aumentarContador$.emit(1);
            
            let photos:Photo[]=[];
            result.forEach(photoJson => {
            let photo:Photo;
            photo=Photo.createFromJsonObject(photoJson);            
            photos.push(photo);
            });
                          
            resolve(photos);
        })
        .catch( (error:Error)=>{
            reject(error.message);
        });
});
return promise;



}



cargarUsuarios():Promise<any> {
  let promise = new Promise<any>((resolve, reject) => {
    this.http.get(this.urlApi+'users'+'?page='+1+'&'+this.token)
    .toPromise().then(
      (data:any) => { // Success
        this.gatosService.aumentarContador$.emit(1);        
        
        this.pagesDisp=Number.parseInt(data._meta.pageCount);
        let i=1;
        var refreshId= setInterval(() => {
            this.getUsuarios(i).then(usuarios => {
              this.users=this.users.concat(usuarios);
              console.log(usuarios);
              this.update$.emit(this.users);
              i++;
              if(i==this.pagesDisp){             
              resolve("Los usuarios se han cargado correctamente");
              clearInterval(refreshId);
              }
            })
          }, 2000);          
               
        
      }
      
    )
    .catch((error:Error)=>{
      reject(error);});
  });
  return promise;
}





  
}
