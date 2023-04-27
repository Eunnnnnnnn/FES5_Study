class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.section1 .cola-list');
    }

    async setup() {
        const response = await this.loadData();

        this.colaFactory(response);
    }

    async loadData() {
        try {
            const response = fetch('./itmes.json');

            // 응답상태가 서버로부터 괜찮다고 전달이 됨 - 서버의 응답 코드가 200 ~ 299 일 경우(200~299 범위가 정상, 400 이상일 경우 비정상)
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    colaFactory(data) {

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
            this.itemList.append(item);
        })
    }
    
}

export default ColaGenerator;