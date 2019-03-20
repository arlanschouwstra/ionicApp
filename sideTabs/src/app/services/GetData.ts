
import { Component } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { pipe } from 'rxjs';

export class GetData{
    public BugList: any;
    public result: any;
    public states: string[] = [];

    public countNew: any = 0;
    public countActive: any = 0;
    public countResolved: any = 0;
    public countClosed: any = 0;

    public isSearchBarOpened = false;
    public getHideStatus: boolean = true;
    public getSearch: string = "";
    public showBug: any;
    public getTitle: any;
    public getProject: string;
    public currentColor: string = 'niceblue'
    public toggled: boolean = false;

    constructor(public http: HttpClient){
        this.toggled = false;

          this.http.get('https://jsonblob.com/api/55bd7d5e-2f7d-11e9-9080-b7cffef91d62')
                  .pipe()
                  .subscribe(res => {
                          this.BugList = res;
                          pipe(
                            this.BugList.Bugs.forEach(bug => { 
                              if(!this.states.includes(bug.State)) this.states.push(bug.State)
                            })
                          );

                          this.BugList.Bugs.forEach(bug => { 
                              if(bug.State === this.states[0]) this.countNew += 1;
                              if(bug.State === this.states[3]) this.countActive += 1;
                              if(bug.State === this.states[2]) this.countResolved += 1;
                              if(bug.State === this.states[1])this.countClosed += 1;  
                          });
                          
                          this.getProject = this.BugList.Bugs[0].TeamProject;
                          return this.result = this.BugList.Bugs;
                        }
                      );
    }

    onSearch(event: any){
        this.getSearch = event.target.value;
      }
    
      showContent(setTitle: any){
    
          if(this.getHideStatus == false){
            this.getTitle = setTitle;
          
            return this.getHideStatus = true;
          }
          else{
            this.getTitle = setTitle;
    
            return this.getHideStatus = false;
          }
      }

      toggle(){
        this.toggled = !this.toggled;
      }
}