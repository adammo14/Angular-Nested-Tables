import { Component, OnInit } from "@angular/core";
import { MockApiService } from "../../../client/mock-api.service";

@Component({
  selector: "current-status",
  templateUrl: "./current-status.component.html",
  styleUrls: ["./current-status.component.scss"],
})

export class CurrentStatusComponent implements OnInit {
    policies: any[] = [];
    loading: boolean = true;
    alertMsg: string = 'Something went wrong :( No data available.';

    constructor(private api: MockApiService) {}

    ngOnInit() {
        this.api.getPolicies().subscribe((data: any[]) => {
            this.policies = data;
            this.loading = false;
        })
    }
}
