import ColaGenerator from "./classes/colaGenerator.js"; //모듈 불러오는 키워드 - 자동완성 후에 .js 잊지말기!
import VendingMachineEvents from "./classes/vendingMachineEvents.js"; //모듈 불러오는 키워드

const ColaGenerator = new ColaGenerator();
const VendingMachineEvents = new VendingMachineEvents();


// 탑레벨 await : 최상위 모듈에서 실핼되는 await
// indexjs 모듈로 연결되어 있는데 탑레벨
// 최상위에서는 await 써도 잘 작동함. async 사용 안해도(근데 나온지 얼마 안된 것임)
// 결론 : 콜라버튼 리스트들은 데이터를 받아와야하는 애들이라 애초에 데이터를 가지고 있는 애들이 btn-cola / 다른애들은 데이터 처리가 안돼도 상관없는 애들
// await colaGenerator.setup();
// vendingMachineEvents.bindEvent();

(async function () {
    await colaGenerator.setup(); // 비동기 함수
    vendingMachineEvents.bindEvent();
})()

//기존에 쓰던 코드 근데 2021년에 탑레벨 await 나온 것. 위 아래 상관없이 사용가능
// (async function () {
//     await colaGenerator.setup();
//     vendingMachineEvents.bindEvent();
// })