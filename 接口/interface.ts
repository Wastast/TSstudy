// interface labelInter {
//   /* 
//     这是一个注释 
//   */
//   label : string,
//   size : number
// }
// function printLabel(labelledObj: labelInter) {
//   let {label,size} = labelledObj;
//   console.log(label,size);
// }

// let myObj = { size: 10,label: '这是一个TS' };
// printLabel(myObj);

let a: number[] = [1, 2, 3, 4];
let b: object = { name:11 }
// let ro: ReadonlyArray<number> = a;
// console.log(ro);
// let p1: ReadonlyArray = { x: 10, y: 20 };

// 额外属性检查
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

// function createSquare(config: SquareConfig){
//   // ...
//   console.log(config);
// }

// let mySquare = createSquare({ colour: "red", width: 100,abc:'red' });

// 可索引签名
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[1];
console.log(myStr);