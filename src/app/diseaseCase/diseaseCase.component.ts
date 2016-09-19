import { Component } from "@angular/core";

import { HttpService } from "../shared/http.service";

@Component({
    templateUrl: './diseaseCase.component.html',
    providers: [HttpService]
})
export class DiseaseCaseComponent {
    items: any[] = [];
    asyncString = this.httpService.getData();

    constructor(private httpService: HttpService) {}

    onSubmit(incident: string, activity: string) {
        this.httpService.sendData({incident: incident, activity: activity})
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
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

    onSetData2() {
        this.httpService.setOwnData2();
    }

    onGetData2() {
        this.httpService.getOwnData2()
        .subscribe(
            x => console.log('onNext: %s', x),
            e => console.log('onError: %s', e),
            () => console.log('onCompleted')
        );
    }

}