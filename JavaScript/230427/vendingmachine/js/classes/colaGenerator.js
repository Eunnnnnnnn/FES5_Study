class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.section1 .cola-list'); // 콜라 리스트를 선택자로 제대로 가져오기 위해 섹션1까지 같이 작성
    }

    async setup() {
        const response = await this.loadData(); //loadData에 저장됨
        this.colaFactory(response); // 밑에 loadData()를 colaFactory에 response를 인자로 받아서 실행
    }

    async loadData() { //json 파일 불러오기 // const는 갯수
        // 예외처리를 위해 try...fetch로 /promise로 then...catch 대신 사용했음
        //json에서 받아올 때 시간이 걸려서 비동기 처리 해줘야 함 / async await(loadData()에 붙여주고 fetch에 await붙여주기) / index.js에도 await 해줘야 함
        try {
            const response = fetch('./itmes.json'); // fetch를 통해서 items.json 파일 가져오기
            // fetch는 promise 객체를 반환하고 promise 서버 연결이 잘 되면 resolve가 자동적으로 실행이 되고, resolve가 실행이 되면 그 콜백함수에 반환하는 그 안의 인자가 response임
            // 근데 위의 과정은 fetch를 실행할 때 다 실행하고 await로 위의 fetch의 순서를 다 기다려서 실행하자 => 그래서 promise resolve(then) response 는 생략해도 된다.(await하는 동안 다 실행되기 때문)

            if (response.ok) { //ok는 서버로부터 응답이 제대로 왔는지 확인
            // 응답상태가 서버로부터 괜찮다고 전달이 됨 - 서버의 응답 코드가 200 ~ 299 일 경우(200~299 범위가 정상, 400 이상일 경우 비정상)
                return response.json(); //json데이터를 객체로 바꿔서 받아옴
            } else {
                throw new Error(response.status); // status를 확인하면 catch로 던짐
            }
        } catch (error) { // status로 던진 값을 받아서 error를 띄움 //thros new Error(response.status); 안의 값을 파라미터로 받아옴?
            console.log(error);
        }
    }

    colaFactory(data) {
        const docFrag = document.createDocumentFragment(); //doc
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>
            `;

            item.innerHTML = itemTemplate;
            docFrag.append(item);
        })
        this.itemList.append(docFrag);
    }

}

export default ColaGenerator; // 밖으로 내보낼 것 하나만 있을 때 default,