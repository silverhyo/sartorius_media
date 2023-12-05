let list = document.getElementById('list');  // list 변수 생성 > HTML에서 id=list를 대입한다. 
let filter = document.querySelector('.filter');  // class=filter 선택 대입
let count = document.querySelector('#count'); // getElementById('count') 로 사용해도 된다. 차이는?
let listProducts = [  // listProduct 변수 생성 > 안에 정보 있는 array를 생성
    {
        id: 1,
        name: 'Name product white-black',
        price: 100,
        quantity: 0,
        image: 'Xell CAP_CDM_Feed Liquid.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 2,
        name: 'Name product white-black-grey',
        price: 100,
        quantity: 30,
        image: 'Xell CHO_TF Liquid.jpg',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 3,
        name: 'Name product black',
        price: 100,
        quantity: 20,
        image: 'Xell CHOlean Liquid.jpg',
        nature: {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 4,
        name: 'Name product blue-black',
        price: 100,
        quantity: 20,
        image: 'Xell HEK_FS Liquid.jpg',
        nature: {
            color: ['blue', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 5,
        name: 'Name product brown',
        price: 100,
        quantity: 10,
        image: 'Xell HEK_GM Liquid.jpg',
        nature: {
            color: ['brown'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 6,
        name: 'Name product white-black-grey',
        price: 200,
        quantity: 10,
        image: 'Xell HEK_TF_for_SILAC Liquid.jpg',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },
            
];

let productFilter = listProducts;                       // productFilter 변수 생성 > listProducts (정보 담긴 array) 변수를 대입 
showProduct(productFilter);                             // showProduct함수에 productFilter 변수를 파라매터로 입력
function showProduct(productFilter){                    // showProduct 함수 정의
    count.innerText = productFilter.length;             // HTML에서 id=count인 노드를 count 변수로 생성했고 innerText인 숫자 5를 불러옴 이것은 array의 갯수
    list.innerHTML = '';                                // HTML에서 id=list인 노드를 list 변수로 생성했고 innerHTML을 통해 HTML에서 id=list 이하 자식 노드를 가져온다?
    productFilter.forEach(item => {                     // 역서 의미하는 item은 무엇? array에 있는 각각의 항목을 의미? forEach는 각 항목에 대해 똑같이 반복하는 반복문 중의 하나.
        
        let newItem = document.createElement('div');    //  
        newItem.classList.add('item');                  // <div class="item"></div>

        // create image
        let newImage = new Image();
        newImage.src = item.image;                      // <img src="item.image">
        newItem.appendChild(newImage);                  // <div class="item"> 이 노드에 child 노드로 맨 마지막 줄에 넣어라 (제일 아래에 넣지만 아래 스크립트 순서에 의해 이 노드가 자식 노드 중 가장 위로 올라온다)
        
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');                // <div class="title"></div>
        newTitle.innerText = item.name;                 // <div class="title">item.name</div>
        newItem.appendChild(newTitle);                  // <div class="item"> 의 자식요소로 넣어라
        
        //create price
        let newPrice = document.createElement('div');   // <div></div>
        newPrice.classList.add('price');                // <div class="price"></div>
        newPrice.innerText = item.price;                // <div class="price">item.price</div>
        newItem.appendChild(newPrice);                 // appendChild()메소드 : 새로운 노드를 해당 노드의 child node list의 맨 마지막에 추가

        list.appendChild(newItem);                      // <div class="item"></div>요소를 <div class="list"></div>사이에 넣어라!
    });
}

















filter.addEventListener('submit', function(event){
    event.preventDefault();                             // preventDefault : 페이지 새로고침이 없어서 filter링 한 것을 볼 수 있는 것. 이것이 없다면 새로 고침이 된다.
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check color
        if(valueFilter.color.value != ''){
            if(!item.nature.color.includes(valueFilter.color.value)){   //느낌표(!)를 제거하고 실행 > color에 white를 선택했을 경우 white가 포함되지 않은 것을 보요주네
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if(valueFilter.minPrice.value != ''){
            if(item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        // check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
                return false;
            }
        }
        return true;
    })
    showProduct(productFilter);
})