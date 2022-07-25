class Car {
    constructor(name) {
    this.brand = name;
    }
    recent() {
    return 'I have a ' + this.brand;
    }
    }
    class sonCar extends Car {
    constructor(name, model) {
        super(name);
        this.model = model;
    }
       view() {
    return super.recent() + ', it is a ' + this.model;
    // super.present() And this.present() Both are Works 
    }
    }
    const  myCar = new sonCar("Ford", "Mustang");
    // const os=document.getElementsByClassName("op");
    console.log(myCar.view());
    let x=myCar.view();
    document.write(x);

    // os.innerHtml=x;
    
