import { sequence } from "challenge2";
import { race } from "challenge7";

// A -> B -> C
//              > done
// D -> E -> F

const A = () => sleep(1_000).then(() => "A");
const B = () => sleep(1_000).then(() => "B");
const C = () => sleep(1_000).then(() => "C");
const D = () => sleep(5_000).then(() => "D");
const E = () => sleep(1_000).then(() => "E");
const F = () => sleep(1_000).then(() => "F");

// This way E and F get executed unnecessarily
race([sequence([A, B, C]), sequence([D, E, F])]).then(() =>
    console.log("done")
);