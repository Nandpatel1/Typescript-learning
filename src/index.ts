class User {
    private _courseCount = 5;
    constructor(public name: string, public email: string) {}

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        this._courseCount = courseNum;
    }
}

const user = new User("user", "a@gmail.com");
user.courseCount = 8;
console.log(user.courseCount);

const user2 = new User("dfd", "a@fe.com");
console.log(user2.courseCount);
