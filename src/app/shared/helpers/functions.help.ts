import { Injectable } from "@angular/core";
import { OrderByModel } from "../models/order-by.model";

@Injectable({
    providedIn: 'root'
})
export class FunctionsHelp
{
    public orderBy(_list: any[], _orderBy: OrderByModel): any[]
    {
        return _list.sort((a, b) => 
        {
            if (_orderBy.direction)
            {
                if (a[_orderBy.name] > b[_orderBy.name]) return 1;
                if (a[_orderBy.name] < b[_orderBy.name]) return -1;
            }
            else
            {
                if (a[_orderBy.name] < b[_orderBy.name]) return 1;
                if (a[_orderBy.name] > b[_orderBy.name]) return -1;
            }

            return 0;
        });
    }
}