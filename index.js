const user = {
  fistName: "yagnesh",
  lastName: "modh1"
};

let updatedUser = { ...user, gender: "male" };

console.log(updatedUser);

updatedUser = { ...updatedUser, lastName: "modh" };

console.log(updatedUser);

const { gender, ...rest } = updatedUser;

console.log(rest);

const users = [
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "virat",
    gender: "mala"
  },
  {
    name: "deepika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

let updatedUser = [{ name: "mahendara", gender: "male" }, ...users];

const index = updatedUser.findIndex(val => val.name === "virat");

console.log(index);

updatedUser = [
  ...updatedUser.slice(0, index),
  { ...updatedUser[index], gender: "male" },
  ...updatedUser.slice(index + 1)
];

updatedUser = updatedUser.filter(val => val.name !== "rohit");

console.log(updatedUser);

class Animal {
  constructor(type = "Animal") {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  printType() {
    console.log(this.type);
  }

  makeSound() {
    console.log("Make Sound");
  }

  test() {
    setTimeout(() => {
      console.log(this.type);
    }, 1000);
  }
}

class Cat extends Animal {
  constructor(props) {
    super(props);
  }

  makeSound() {
    super.makeSound();
    console.log("Meow...");
  }
}

// const a = new Animal()
// a.printType()

const c = new Cat("Cat");
c.printType();
c.makeSound();
c.test();

const xyz = () => {
  x = "hello";

  console.log(this.x);
};

console.log(xyz());

// map
// reduce

const users = [
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "deepika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const newUsers = users.map((user, index) => {
  if (user.gender === "male") {
    return { ...user, profession: "Cricketer" };
  } else if (user.gender === "female") {
    return { ...user, profession: "Actor" };
  } else {
    return user;
  }
});

const users = [
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "virat",
    gender: "mala"
  },
  {
    name: "deepika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

console.time("Map loop");

const newUsers = users.map((user, index) => {
  if (user.gender === "male") {
    return { ...user, profession: "Cricketer" };
  } else if (user.gender === "female") {
    return { ...user, profession: "Actor" };
  } else {
    return user;
  }
});

console.timeEnd("Map loop");

console.time("Reduce loop");
const newUsers1 = users.reduce((p, c) => {
  console.log(p);
  if (c.gender === "male") {
    return [...p, { ...c, profession: "Cricketer" }];
  } else if (c.gender === "female") {
    return [...p, { ...c, profession: "Actor" }];
  } else {
    return [...p, c];
  }
}, []);
console.timeEnd("Reduce loop");

console.log(newUsers);

const a = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for (let index = 0; index < a.length; index++) {
  const element = a[index];
  sum += element;
}

console.log(sum);

const sum1 = a.reduce((p, c) => p + c, 0);

console.log(sum1);

// for in

// for of

const user = {
  fName: "yagnesh",
  lName: "modh",
  gender: "male",
  age: 30
};

// for (const key in user) {
//     console.log(key);
//     console.log(user[key])
// }

// const users = [
//     {
//       name: "rohit",
//       gender: "male"
//     },
//     {
//       name: "virat",
//       gender: "mala"
//     },
//     {
//       name: "deepika",
//       gender: "female"
//     },
//     {
//       name: "radhika",
//       gender: "female"
//     }
//   ];

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

const users = [
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "deepika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

//   {
//       male: [],
//       female: []
//   }

const groupBy = (data, key) => {
  return data.reduce((p, c) => {
    (p[c[key]] = p[c[key]] || []).push(c);
    return p;
  }, {});
};

console.log(groupBy(users, "gender"));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolve");
  }, 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolve");
  }, 3000);
});

console.log(1);
let loading = true;

const prom = async () => {
  loading = true;
  try {
    const data1 = await p1;
    console.log(data1);
    const data2 = await p2;
    console.log(data2);
  } catch (error) {
    console.log(error);
  } finally {
    loading = false;
  }
  console.log(loading);
};

prom();

console.log(2);

const arr = [1, 3, 5, 1, 4];

console.log([...new Set(arr)]);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolve");
  }, 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolve");
  }, 3000);
});

const data = async () => {
  const data1 = await p1;
  console.log(data1);
  return data1;
};

function* xyz() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return "hello";
}

const gen = xyz();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

for (const iterator of gen) {
  console.log(iterator);
}

console.log(xyz());
