import { Component, Input } from '@angular/core';

@Component({
    selector: 'danger-alert',
    templateUrl: './danger-alert.component.html',
    styleUrls: ['./danger-alert.component.scss']
})

export class DangerAlert {
    // Text displayed on an alert element
    @Input() alertMsg: string;

    constructor() {}

    // Close alert popups
    onRemoveNotification(className:string) {
        var elements = document.getElementsByClassName(className);
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

}
