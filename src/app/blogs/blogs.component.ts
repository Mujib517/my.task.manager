import { Component } from '@angular/core';

@Component({
    selector: 'app-blogs',
    template: `<h1>Blogs</h1>
    
        <div class="col-md-7"> 
            <div *ngFor="let blg of blogs" class="well">
                <app-blog [blog]="blg"></app-blog>
            </div>
        </div>
    `
})
export class BlogsComponent {

    //uppercase
    //lowercase
    //currency
    //json
    //async
    //date
    blogs = [{
        title: "My Angular Blog",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        published: true,
        lastUpdated: "2017-07-26T02:39:34.253Z"
    }, {
        title: "My NodeJs Blog",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        published: true,
        lastUpdated: "2017-07-28T02:28:00.074Z"
    }, {
        title: "My ExpressJs Blog",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        published: false,
        lastUpdated: "2017-07-28T02:28:00.074Z"
    }];
}