import { Injectable } from '@angular/core';


@Injectable()
export class DubCheck{
    private mails=['pesho@abv.bg', 'gosho@abv.bg'];

    isEmailValid(userMail){
        return this.mails.indexOf(userMail) < 0
    }


}