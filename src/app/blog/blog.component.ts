import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-blog',
    template: `
            <div>
                <h3>{{blog.title | uppercase}}</h3>
                <p>{{blog.content}}</p>
                <hr/>
                Published? <input type="checkbox" [checked]="blog.published" disabled="true"/>
                <div class="text-muted pull-right">                
                    {{blog.lastUpdated | time}}
                </div>
                
            </div>`
})
export class BlogComponent {
    @Input()
    blog = {};
}