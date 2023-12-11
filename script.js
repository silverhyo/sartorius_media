let list = document.getElementById('list'); 
let filter = document.querySelector('.filter');
let count = document.querySelector('#count');
let listProducts = [
    {
        id: 1,
        name: 'Xell CAP_CDM_Feed',
        dataname: 'p_01',
        price: 100,
        brand: 'Xell',
        image: 'image/Xell CAP_CDM_Feed Liquid.jpg',
        nature: {
            cellline: ['CHO', 'HEK'],
            manufacturer: 'Sigma',
            application: 'CGT',
            mediatype: ['Liquid', 'Powder'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
            description01 : '정말좋은배지입니다.'
        }
    },
    {
        id: 2,
        name: 'Xell CHO_TF',
        dataname: 'p_02',
        price: 100,
        brand: 'Xell',
        image: 'image/Xell CHO_TF Liquid.jpg',
        nature: {
            cellline: ['HEK', 'VERO'],
            manufacturer: 'Sartorius',
            application: 'Vaccine',
            mediatype: ['Powder']
        }
    },
    {
        id: 3,
        name: 'Xell CHOlean',
        dataname: 'p_03',
        price: 100,
        brand: 'Xell',
        image: 'image/Xell CHOlean Liquid.jpg',
        nature: {
            cellline: ['CHO'],
            manufacturer: 'Sartorius',
            application: 'Vaccine',
            mediatype: ['Powder']
        }
    },
    {
        id: 4,
        name: 'Xell HEK_FS',
        dataname: 'p_04',
        price: 100,
        brand: 'Xell',
        image: 'image/Xell HEK_FS Liquid.jpg',
        nature: {
            cellline: ['HEK'],
            manufacturer: 'Merck',
            application: 'CGT',
            mediatype: ['Liquid']
        }
    },
    {
        id: 5,
        name: 'Xell HEK_GM',
        dataname: 'p_05',
        price: 100,
        brand: 'Xell',
        image: 'image/Xell HEK_GM Liquid.jpg',
        nature: {
            cellline: ['VERO'],
            manufacturer: 'Merck',
            application: 'Vaccine',
            mediatype: ['Liquid']
        }
    },
    {
        id: 6,
        name: 'Xell HEK_TF_for_SILAC',
        dataname: 'p_06',
        price: 200,
        brand: 'Xell',
        image: 'image/Xell HEK_TF_for_SILAC Liquid.jpg',
        nature: {
            cellline: ['CHO', 'HEK', 'VERO'],
            manufacturer: 'Sigma',
            application: 'mAb',
            mediatype: ['Liquid', 'Powder']
        }
    },
    {
        id: 7,
        name: 'Xell HEK_ViP_NB',
        dataname: 'p_07',
        price: 200,
        brand: 'Xell',
        image: 'image/Xell HEK_ViP_NB Liquid.jpg',
        nature: {
            cellline: ['CHO', 'HEK', 'VERO'],
            manufacturer: 'Sigma',
            application: 'mAb',
            mediatype: ['Liquid', 'Powder']
        }
    },
    {
        id: 8,
        name: 'Xell HYB_FS',
        dataname: 'p_08',
        price: 200,
        brand: 'Xell',
        image: 'image/Xell HYB_FS Liquid.jpg',
        nature: {
            cellline: ['CHO', 'HEK', 'VERO'],
            manufacturer: 'Sigma',
            application: 'mAb',
            mediatype: ['Liquid', 'Powder']
        }
    },
    {
        id: 9,
        name: 'Xell MDXK',
        dataname: 'p_09',
        price: 200,
        brand: 'Xell',
        image: 'image/Xell MDXK Liquid.jpg',
        nature: {
            cellline: ['CHO', 'HEK', 'VERO'],
            manufacturer: 'Sartorius',
            application: 'Vaccine',
            mediatype: ['Liquid', 'Powder']
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
        newItem.classList.add('item');
        
        // silverhyo div 내에 data-name=''을 삽입
        let newData = newItem;
        newData.dataset.name = item.dataname;

        
        // create image
        let newImage = new Image();
        newImage.src = item.image;                      // <img src="item.image">
        newItem.appendChild(newImage);                  // <div class="item"> 이 노드에 child 노드로 맨 마지막 줄에 넣어라 (제일 아래에 넣지만 아래 스크립트 순서에 의해 이 노드가 자식 노드 중 가장 위로 올라온다)
        
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');                // <div class="title"></div>
        newTitle.innerText = item.name;                 // <div class="title">item.name</div>
        newItem.appendChild(newTitle);                  // <div class="item"> 의 자식요소로 넣어라

                        
        //create brand
        let newBrand = document.createElement('div');   // <div></div>
        newBrand.classList.add('brand');                // <div class="price"></div>
        newBrand.innerText = item.brand;                // <div class="price">item.price</div>
        newItem.appendChild(newBrand);                 // appendChild()메소드 : 새로운 노드를 해당 노드의 child node list의 맨 마지막에 추가

        
        




        list.appendChild(newItem);                    // <div class="item"></div>요소를 <div class="list"></div>사이에 넣어라!
   

        


    });
}


filter.addEventListener('submit', function(event){
    event.preventDefault();                             // preventDefault : 페이지 새로고침이 없어서 filter링 한 것을 볼 수 있는 것. 이것이 없다면 새로 고침이 된다.
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        
        // check application
        if(valueFilter.application.value != ''){
            if(item.nature.application != valueFilter.application.value){ // item앞에 !가 없잖아 그래서 아래 것들과는 다른데 딱 한가지 중복 없어야 하는 경우 이걸 쓴 것 같다.
                return false;
            }
        }
        // check cell line
        if(valueFilter.cellline.value != ''){
            if(!item.nature.cellline.includes(valueFilter.cellline.value)){
                return false;
            }
        }

        // check manufacturer
        if(valueFilter.manufacturer.value != ''){
            if(!item.nature.manufacturer.includes(valueFilter.manufacturer.value)){
                return false;
            }
        }

        // check media type
        if(valueFilter.mediatype.value != ''){
            if(!item.nature.mediatype.includes(valueFilter.mediatype.value)){
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


let popupContainer = document.querySelector('.preview_container');
let previewBox = document.querySelectorAll('.previewbox');  // All 선택하지 않으면 체일 처음 나오는 previewbox 하나만 선택됨
let listItem = document.querySelectorAll('#list .item');

listItem.forEach(item => {
    item.onclick=() => {
        popupContainer.style.display = 'flex'
        let name = item.getAttribute('data-name');
        previewBox.forEach(previewBox => {
            let target = previewBox.getAttribute('data-target');
            if(name == target) {
                previewBox.classList.add('active');
            }

        });
    };

});




        // silverhyo
        // let newPart = document.createElement('div');
        // newPart.classList.add('popupimagebox');

        // silverhyo
        // let newTag01 = document.createElement('div');
        // newTag01.classList.add('preview');
                

        // let newImage01 = new Image();
        // newImage01.src = item.image;
        // newTag01.appendChild(newImage01);
        
        
        
        // let newTag02 = document.createElement('h3')

        // h3name.innerText = item.name;
        
        
        
        
        
        

        // silverhyo
        // let newImage01 = new Image();
        // newImage01.src = item.image;

             // silverhyo
        // previewBox.appendChild(newTag01);
       


















 



