// Add your Circle class here
class Circle{
    constructor(radius){
        if (radius > 0){
            this.radius = radius
        } else {
            throw new Error('A circle cannot have negative radius.');
        }
    }
//get methods, actual instance methods
    get diameter(){
        return 2 * this.radius;
    }
    get circumference(){
        return Math.PI * 2 * this.radius;
    }
    get area(){
        return Math.PI * this.radius * this.radius;
    }

//set methods, define radius backwards.
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    set circumference(circumference) {
        this.radius = circumference / 2 / Math.PI;
    }
    set area(area){
        this.radius = Math.sqrt(area / Math.PI);
    }
}