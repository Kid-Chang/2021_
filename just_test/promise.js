// `use strict`;

// const promise = new Promise((resolve, reject) => {
//     console.log("doing something");
//     setTimeout(() => {
//         setTimeout(() => {
//             reject(new Error("error occur"));
//         }, 1000);
//         resolve("elle");
//     }, 2000);
// });

// //promise 가 재대로 작동해서 resolve라는 함수에
// //'elle'라는 값을 넣어 실행하면 then뒤의 value에 'elle'가 들어간다.
// promise
//     .then((value) => {
//         console.log(value);
//     }) // then은 받은 promise를 똑같이 리턴해준다.
//     .catch((error) => console.log(error));
// // .finally(console.log("ok"));

// //promise chaining
// // .then을 쓰면 promise에서 전달되는 인자의 값을 받아옴.
// const fetchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// });

// fetchNumber
//     .then((num) => num * 2)
//     .then((num) => num * 3)
//     .then((num) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(num - 1);
//             }, 1000);
//         });
//     })
//     .then((num) => {
//         console.log(num);
//     });

// console.log(fetchNumber); // promise Obj 자체를 리턴함.

//------

//  - async
// fetchUser = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("elle");
//         }, 1000);
//     });
// };
//위의 친구들을 async로 변경해보자면.

fetchUser = async () => {
    return "elle";
};

// const user = fetchUser();
// console.log(user);
// user.then(console.log);

// - await
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const getApple = async () => {
    await delay(2000);
    return "🍎";
};

const getBanana = async () => {
    await delay(1000);
    return "🍌";
};

// 하단은 async await를 promise를 이용해서 구현하는 법.
// const getBanana = () => {
//     return delay(1000) //
//         .then(() => "🍌");
// };

// const pickFruits = () => {
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
// };

// 기존의 pickFruits는 callback을 너무많이 사용한다. 이를 async await를 이용하면.

// const pickFruits = async () => {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// };

// 기존의 pickFruits는 사과 1초 바나나 1초를 기다려야하지만, 이또한 비동기로 해결가능.
// 두개를 동시에 작동시키면 된다.
// 1.
const pickFruits = async () => {
    const applePromise = getApple(); // 미리 두개를 실행 시키고, 나오는 결과값을
    const BananaPromise = getBanana(); // 두개의 값을 받는 것을 await하면 된다.
    // await를 이용해 다음 값을 기다리는 게 아니고 동시에 작동시키니까.!
    const apple = await applePromise;
    const banana = await BananaPromise;
    return `${apple} + ${banana}`;
};

// 2. useful APIs
// const pickAllFruits = () => {
//     // 배열안에 넣어주는 프로미스 함수들을 동시에 실행하기. 그후 돌아오는 값을 배열로 저장.
//     return Promise.all([getApple(), getBanana()]) //
//         .then((fruits) => {
//             return fruits.join(" + ");
//         });
// };

// pickFruits().then(console.log);

// pickAllFruits().then(console.log);

// // race !! 를 이용하면 프로미스중 가장빨리 리턴되는 값만 보내줌.
// function pickOnlyOne() {
//     return Promise.race([getApple(), getBanana()]);
// }

// pickOnlyOne().then(console.log);

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문완료");
        }, 1000);
    });
};

const f2 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문완료");
        }, 3000);
    });
};

const f3 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문완료");
        }, 2000);
    });
};

const order = async () => {
    console.time("1");
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
    console.log("종료");
};

order();
