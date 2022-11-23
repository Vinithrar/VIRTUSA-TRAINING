class Vehicle
{
    gear;
    speed;
    constructor(gear,speed)
    {
        this.gear=gear;
        this.speed=speed;
    }
    display()
    {
        return 'No of gears=${this.gear} Speed=${this.speed}'
    }
}
class Hyundai extends Vehicle
{
    drive;
    constructor(gear,speed,drive)
    {
        super(gear,speed);
        this.drive=drive;
    }
    display()
    {
        return `${super.display()}Drive=${this.drive}`;
    }
}
let obj1=new Hyundai(6,120,4);
console.log(`${obj1.display}`) 