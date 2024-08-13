function detectType(val: number | string) {
    if (typeof val === "string") return val.toLowerCase();
    return val + 3;
}

function provideId(id: string | null) {
    if (!id) {
        console.log("provide id");
        return;
    }
    id.toLowerCase();
}

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}
const admin = "isAdmin";
function isAdminAcc(account: User | Admin) {
    return admin in account ? account.isAdmin : false;
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
const date = new Date();
logValue(date);

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
const pet: Fish = {
    swim() {
        console.log("object");
    },
};

// console.log(isFish(pet));

const petFish: Fish = {
    swim() {
        console.log("Swim fast......");
    },
};

function getFood(fishOrBird: Fish | Bird) {
    if (isFish(fishOrBird)) {
        fishOrBird.swim();
    }
}

getFood(petFish);

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}
interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
    // return shape.side * shape.side;
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape: never = shape;
            return _defaultForShape;
    }
}
