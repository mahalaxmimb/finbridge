import { Component } from '@angular/core';
import { MatNavList } from "@angular/material/list";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [MatNavList],
    standalone: true
})

export class SidebarComponent {

}