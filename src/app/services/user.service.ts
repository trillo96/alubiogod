import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './modelo/User';
import { ContadorGatosService } from './contador-gatos.service';
import { Album } from './modelo/Album';
import { Photo } from './modelo/Photo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public urlApi = 'https://gorest.co.in/public-api/'; 
  public token = 'access-token=OvGGrTfHvCDAkTGt-wcWhPaJWzMAyzW1yu1Q';

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

  getUsuario(id:string):Promise<User> {
    let promise = new Promise<User>((resolve, reject) => {
      this.http.get(this.urlApi+'users'+"/"+id+'?'+this.token).toPromise()
          .then((data:any)=>{
            this.gatosService.aumentarContador$.emit(1);
              let user:User;
              user=User.createFromJsonObject(data.result);
              this.getAlbumsUser(user.id).then( albums => {
                console.log('albums',albums);
                albums.forEach( album => {
                  this.getPhotosAlbum(album.id).then( fotos => {
                    fotos.forEach(foto=>{
                      user.fotos.push(foto.url);
                    })
                  })                 
                });                
              });
              console.log('USER: ', user);              
              resolve(user);
          })
          .catch( (error:Error)=>{
              reject(error.message);
          });
  });
  return promise;
}
  
getUsuariosPorNombre(nombre:string, page:number):Promise<User[]> {
  let promise = new Promise<User[]>((resolve, reject) => {
    this.http.get(this.urlApi+'users'+'?first_name='+nombre+'&page='+page+'&'+this.token)
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

  
}
