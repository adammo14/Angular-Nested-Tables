import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { map, publishReplay, refCount } from 'rxjs/operators';
import { AuthI, PoliciesI, PoliciesDetailsI } from "../app/interfaces";

/**
 *  Mock api endpoints.
 *  Use this service to connect to the fake-database to receive data
 */

@Injectable({
    providedIn: "root",
})

export class MockApiService {
    private SERVER_URL: string = "http://localhost:4200/api";

    users: Observable<AuthI[]>;
    policies: Observable<PoliciesI[]>;
    policiesDetails: Observable<PoliciesDetailsI[]>;

    constructor(private http: HttpClient) {}

    getUser(): Observable<AuthI[]> {
        if (!this.users) {
            this.users = this.http.get<AuthI[]>(`${this.SERVER_URL}/auth`).pipe(
                map(data => data),
                publishReplay(1),
                refCount()
            );
        }
        return this.users;
    }

    //If the value of this.configs is false, send a GET request to the server. If true, skip the GET request and use the cached value.
    getPolicies(): Observable <PoliciesI[]> {
        if (!this.policies) {
            console.log('new policies');
            this.policies = this.http.get<PoliciesI[]>(`${this.SERVER_URL}/policies`).pipe(
                map(data => data),
                publishReplay(1), // this tells Rx to cache the latest emitted
                refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
            );
        }
        return this.policies;
    }

    getPoliciesDetails(): Observable <PoliciesDetailsI[]> {
        if (!this.policiesDetails) {
            console.log('new policies details');
            this.policiesDetails = this.http.get<PoliciesDetailsI[]>(`${this.SERVER_URL}/policiesDetails`).pipe(
                map(data => data),
                publishReplay(1),
                refCount()
            );
        }
        return this.policiesDetails;
    }

    clearCacheAll() {
        this.policies = null;
    }

    // For testing purposes only
    public apiData(): Observable < [AuthI[], PoliciesI[], PoliciesDetailsI[]] > {
        let response1 = this.getUser();
        let response2 = this.getPolicies();
        let response3 = this.getPoliciesDetails();
        return forkJoin([response1, response2, response3]);
    }
}
