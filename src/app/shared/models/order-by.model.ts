export class OrderByModel
{
    constructor(
        _name: string, 
        _direction: boolean,
    ) {
        this.name = _name;
        this.direction = _direction;
    }

    name: string;
    direction: boolean;
}