
class Key {
    constructor(private signature: number) { }
  
    getSignature() {
        return this.signature
    }
}

// interface IPerson {
//     key:
// }
class Person  {
    private key;
    constructor(ObjectKey) {
     this.key = ObjectKey
    }
    getKey() {
        return this.key.signature
    }
}


abstract class House {
  public tenants: object[]
constructor(public door: boolean, private key: object){}
    comeIn(person: object) {
    if (this.door) {
        this.tenants.push(person)
    }
    }
    
    abstract openDoor(key): boolean
}

class MyHouse extends House {
    constructor(key: object) {
    super(false, key)
    }
    
    openDoor(userKey) {
        if (userKey === key.getSignature()) {
              console.log('Двері відчинені.');
           return true 
           
        }
          console.log('Двері зачинені.');
        return false
    }
} 
const key = new Key(Math.random())

const house = new MyHouse(key);
const person = new Person(key)


house.openDoor(person.getKey());

house.comeIn(person);
export { };