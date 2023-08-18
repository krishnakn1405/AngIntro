import { Injectable, Injector } from "@angular/core";

export class PostService {

    // @Injectable({
    //      providedIn: 'root'
    //  })
    
    postList: Array<any> = [
        { id: 1, postTitle: "Post 1"},
        { id: 2, postTitle: "Post 2"},
        { id: 3, postTitle: "Post 3"},
        { id: 4, postTitle: "Post 4"},
        { id: 5, postTitle: "Post 5"},
        { id: 6, postTitle: "Post 6"}
    ]

    addPost(data:any){
        this.postList.push(data);
    }
}