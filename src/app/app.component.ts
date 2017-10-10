import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1 [hidden]="myVar" [class.red]="myVar" [style.border]="myVar?'1px solid black':'none'" >{{title}}</h1>

    <h3 [ngStyle]="style">{{title}}</h3>


   <input type="text"   [(ngModel)]="title" />
    {{ myVar?"Yes":"No" }}

    <button (click)="onClick()">Click Me</button>

    <table border="1">
        <thead>
            <tr>
                <td>
                    Name
                </td>
                <td>
                    Even
                </td>
                <td>
                   Odd Index?
                </td>
                <td>
                    First
                 </td>

             <td>
                Last
            </td>
            <td>
                Priority
            </td>
            </tr>
        </thead>

        <tbody>
            <tr *ngFor="let task of tasks;let evn=even;let odd=odd;let fst=first;let lst=last;">
                <td>
                    {{task.name}}
                </td>
                <td>
                    {{evn}}
                </td>
                <td>
                   {{odd}}
                </td>
                <td>
                    {{fst}}
                </td>
             <td>
                 {{lst}}
            </td>
            <td >
            <div [ngSwitch]="task.priority">
                <div class="red" *ngSwitchCase="'High'">High</div>
                <div class="yellow" *ngSwitchCase="'Medium'">Medium</div>
                <div class="green" *ngSwitchCase="'Low'">Low</div>
                <div class="cyan" *ngSwitchDefault>Very Low</div>         
            </div>
            </td>
            </tr>
        </tbody>
</table>`
})
export class AppComponent {
    title: string = "My Cool Task Manager";
    myVar: boolean = true;
    clsName = "cyan background";
    style = { 'background-color': 'blue' };
    tasks = [
        { name: "Go Shopping", priority: 'High' },
        { name: "Recharge your mobile", priority: 'Low' },
        { name: "Clean your house", priority: 'Medium' },
        { name: "Low Priority Task", priority: 'adfadf' }]

    getTitle(): string {
        return this.title;
    }

    onClick() {

        if (this.myVar) this.myVar = false;
        else this.myVar = true;
    }


}