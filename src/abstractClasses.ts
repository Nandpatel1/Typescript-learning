abstract class TakeAPhoto {
    constructor(public cameraMode: string, public filter: string) {
        console.log(cameraMode, filter);
    }

    abstract getSepia(): void;
    getReelTime(): number {
        return 112;
    }
}

class Insta extends TakeAPhoto {
    cameraMode: string;
    filter: string;
    constructor(cameraMode: string, filter: string) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia(): void {
        console.log("this is sepia");
    }
}

const photo = new Insta("First", "second");
photo.getSepia();
console.log(photo.getReelTime());
