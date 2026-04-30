import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
   providedIn:"root"
})

export class snackbarservice{
    constructor(private _snackbar :MatSnackBar){} 

    opensnackbar(msg:string){
        this._snackbar.open(msg,'close',{
            duration:1000,
            horizontalPosition:"right",
            verticalPosition:"top"
        })
    }
}