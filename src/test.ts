import { map, of } from "rxjs";

type testP<T,R> =  (data: T) => R


const aste: testP<number, string> = (data:number) => {
  return `${data * 2}`;
};



of(1, 2, 3)
  .pipe(map(value => aste(value)))
  .subscribe((v) => console.log(`value: ${v}`));
