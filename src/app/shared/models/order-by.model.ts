export class OrderByModel
{
    constructor(
        _name: string, 
        _direction: boolean = true,
    ) {
        this.name = _name;
        this.direction = _direction;
    }

    name: string;
    direction: boolean;
}