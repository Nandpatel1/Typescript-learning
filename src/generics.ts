const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(3);

function identityFour<T>(val: T): T {
    console.log("va", val);

    return val;
}

interface Bootle {
    brand: string;
    type: number;
}

const bootle: Bootle = {
    brand: "new",
    type: 4,
};

console.log(identityFour<Bootle>(bootle));

function getSearchProducts<T>(products: T[]): T {
    return products[0];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    return products[1];
};

console.log(getMoreSearchProducts([14, { a: "c", b: "d" }]));

interface Database {
    connection: string;
    username: string;
    password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo,
    };
}
const db: Database = {
    connection: "db connect",
    username: "Nand",
    password: "secret",
};
anotherFunction("x", db);

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];
    addToCart(product: T) {
        this.cart.push(product);
    }
}
