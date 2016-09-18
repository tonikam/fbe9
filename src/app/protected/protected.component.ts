import { Component } from "@angular/core";

import { HttpService } from "./http.service";

@Component({
    templateUrl: './protected.component.html',
    providers: [HttpService]
})
export class ProtectedComponent {
    items: any[] = [];
    asyncString = this.httpService.getData();

    constructor(private httpService: HttpService) {}

    onSubmit(incident: string, activity: string) {
        this.httpService.sendData({incident: incident, activity: activity})
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
				this.onGetData();
    }

    onGetData() {
        this.httpService.getOwnData()
            .subscribe(
                data => {
                    const myArray = [];
                    for (let key in data) {
                        myArray.push(data[key]);
                    }
                    this.items = myArray;
                }
            );
    }

}