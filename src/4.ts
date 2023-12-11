
class Key {
    constructor(private signature: number) { }
  
    getSignature(): number {
        return this.signature
    }
}


class Person  {
    constructor(private key: Key) {}
    
    getKey(): Key {
        return this.key
    }
}


abstract class House {
    public tenants: Person[] = []
    public door: boolean = false
   
    constructor(public key: Key) { }
    
    comeIn(person: Person): void {
    if (this.door) {
        this.tenants.push(person)
    }
    }
    
    abstract openDoor(key): boolean
}

class MyHouse extends House {
 
    openDoor(userKey: Key): boolean {
        console.log(this)
        if (userKey.getSignature() === this.key.getSignature()) {
              console.log('Двері відчинені.');
           return this.door = true
           
        }
          console.log('Двері зачинені.');
        return this.door = false
    }
} 
const key = new Key(Math.random())

const house = new MyHouse(key);
const person = new Person(key)


house.openDoor(person.getKey());

house.comeIn(person);
export { };