import { Component, OnInit } from "@angular/core";
import { MockApiService } from "../../../client/mock-api.service";

@Component({
    selector: "nested-data",
    templateUrl: "./nested-data.component.html",
    styleUrls: ["./nested-data.component.scss", "../current-status/current-status.component.scss"],
})

export class NestedDataComponent implements OnInit {
    policies: any[] = [];
    policiesDetails: any[] = [];
    loading: boolean = true;
    open: boolean = false;
    intersectArr = {};

    constructor(private api: MockApiService) {

    }

    ngOnInit() {
        this.api.getPolicies().subscribe((data: any[]) => {
            this.policies = data;
        })

        this.api.getPoliciesDetails().subscribe((data: any[]) => {
            this.policiesDetails = data;
            this.loading = false;
        })
    }

    toggleTable (e) {
        if(e.target.classList.contains('rotated')){
            e.target.classList.remove("rotated");
        } else {
            e.target.classList.add("rotated");
        }
    }
}
