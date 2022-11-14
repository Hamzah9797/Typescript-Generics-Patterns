interface IFooBar {
  foo: string;
  bar: string;
}

interface IFooBarTwo {
  foo: string;
  bar: string;
  hello: number;
}

export const fooBars: Array<IFooBar> = [
  {
    foo: "foo1",
    bar: "bar1",
  },
  {
    foo: "foo2",
    bar: "bar2",
  },
  {
    foo: "foo3",
    bar: "bar3",
  },
];

export const fooBars2: Array<IFooBarTwo> = [
  {
    foo: "foo1",
    bar: "bar1",
    hello: 3,
  },
  {
    foo: "foo2",
    bar: "bar2",
    hello: 3,
  },
  {
    foo: "foo3",
    bar: "bar3",
    hello: 3,
  },
];

function sortByFoo(fooBars: Array<IFooBar>) {
  fooBars.sort((a, b) => {
    if (a.foo > b.foo) {
      return 1;
    }
    if (a.foo < b.foo) {
      return -1;
    }
    return 0;
  });
}

function sortByBar(fooBars: Array<IFooBar>) {
  fooBars.sort((a, b) => {
    if (a.bar > b.bar) {
      return 1;
    }
    if (a.bar < b.bar) {
      return -1;
    }
    return 0;
  });
}

// generic function to replace aboive functions but also extend
function sortByKey<T>(data: Array<T>, key: keyof T) {
  data.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  });
}

sortByKey<IFooBar>(fooBars, "foo");
sortByKey<IFooBarTwo>(fooBars2, "foo");

// generics with classes
class Animal {
  public legCount: number;
  constructor(legCount: number) {
    this.legCount = legCount;
  }
}

class Cat extends Animal {
  constructor() {
    super(4);
  }
}

class Kangroo extends Animal {
  constructor() {
    super(2);
  }
}

class Bacteria {}

// function will accept any class or type as long as it extends animal
function printLegCount<T extends Animal>(animal: T) {
  console.log(`leg count is ${animal.legCount}`);
}

const myCat = new Cat();
const myKangaroo = new Kangroo();
const myBcteria = new Bacteria();

printLegCount(myCat);
printLegCount(myKangaroo);
// printLegCount(myBcteria); -- this one wont work
