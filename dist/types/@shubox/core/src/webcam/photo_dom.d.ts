import { IWebcamOptions } from "../../index";
import { Webcam } from "../webcam";
export declare class PhotoDom {
    webcam: Webcam;
    options: IWebcamOptions;
    video: HTMLVideoElement;
    canvas: HTMLCanvasElement;
    image: HTMLImageElement;
    p: any;
    constructor(webcam: Webcam);
    init(): void;
    toggleStarted(): void;
    toggleStopped(): void;
    findOrCreate(element: string): HTMLElement;
    alreadyStarted(): boolean;
    finalize(): void;
}
