import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SepServiceManagerService {

  constructor(private http:HttpClient) { }

  getAPI(url,params,separator){
    url=url+this.restructureParams(params,separator);
    return this.http.get(url)
      .map((response:any=Response)=>response);
  };
  postAPI(url,params,separator){
    url=url+this.restructureParams(params,separator);
    this.http.post(url,{body:params}).subscribe(data=>{

    },err=>{

    });
  };
  restructureParams(params,separator){
    let paramKeys=Object.keys(params);
    let resp='';
    paramKeys.forEach(function(val){
      let paramChildKeys=(typeof(params[val])=="object")?Object.keys(params[val]):[];
      if(separator && separator=="/"){
        resp=resp+separator;
        resp=resp+params[val];
      }else if(params[val] && typeof(params[val])=="string"){
        resp=(!resp)?"?":resp+"&";
        resp=resp+val+"="+params[val];
      }
      paramChildKeys.forEach(function(v,i){
        if(!resp){
          resp='?';
          resp=resp+val+'['+Object.keys(params[val])[i]+']='+params[val][Object.keys(params[val])[i]];
        }else{
          resp=resp+'&'+val+'['+Object.keys(params[val])[i]+']='+params[val][Object.keys(params[val])[i]];
        }
      });
    });
    return resp;
  }

}
