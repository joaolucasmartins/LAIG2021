
class MyCounter extends CGFobject {
    constructor(scene, id, min, max) {
        super(scene);
        this.pickID = 5000 + id; // for object picking
        
        this.id = id;

        this.min = min;
        this.max = max;

        this.current = min;

        this.counterDisplay = new MySpriteText(this.scene, this.min.toString());
        this.incrBtn = new MyCounterButton(this.scene, id+1, 0.5, 0.1, 0.7, 0.3, 0.2, 0.2, false, 1, 'incrBtn.jpg', this);
        this.decrBtn = new MyCounterButton(this.scene, id+2, 0.5, -0.4, 0.7, -0.2, 0.2, 0.2, false, -1, 'decrBtn.jpg', this)
    }

    display() {
        this.counterDisplay.display();
        this.incrBtn.display();
        this.decrBtn.display();
    }
}