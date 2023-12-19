// =====================================================================specialist 정보창
let specialistContainer = document.getElementById('specialistcontainer');

function openSpecialistWindow() {
    specialistContainer.style.display = 'flex';
};
let openSpecialistWindowButton = document.getElementById('openspecialistwindow');
openSpecialistWindowButton.addEventListener('click', openSpecialistWindow);


function closeSpecialistWindow() {
    specialistContainer.style.display = 'none';
};
let closeButton1 = document.getElementById('closebutton01');
closeButton1.addEventListener("click", closeSpecialistWindow);
// ========================================================================================


let list = document.getElementById('list'); 
let filter = document.querySelector('.filter');
let count = document.querySelector('#count');
let listProducts = [
    {
        id: 1,
        name: 'Xell CAP_CDM_Feed',
        dataname: 'p_01',
        price: 100,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell CAP_CDM_Feed Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['CGT'],
            cellline: ['CHO', 'HEK'],
            mediatype: ['Liquid'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: 'cell을 잘 자라게 합니다.',
            description04: '오호호',
            description05: '와우',
        }
    },
    {
        id: 2,
        name: 'Xell CHO_TF',
        dataname: 'p_02',
        price: 100,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell CHO_TF Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['Vaccine'],
            cellline: ['HEK', 'VERO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 3,
        name: 'Xell CHOlean',
        dataname: 'p_03',
        price: 100,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell CHOlean Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['Vaccine'],
            cellline: ['CHO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 4,
        name: 'Xell HEK_FS',
        dataname: 'p_04',
        price: 100,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell HEK_FS Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['CGT'],
            cellline: ['HEK'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 5,
        name: 'Xell HEK_GM',
        dataname: 'p_05',
        price: 100,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell HEK_GM Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['Vaccine'],
            cellline: ['VERO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 6,
        name: 'Xell HEK_TF_for_SILAC',
        dataname: 'p_06',
        price: 200,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell HEK_TF_for_SILAC Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['mAb'],
            cellline: ['CHO', 'HEK', 'VERO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 7,
        name: 'Xell HEK_ViP_NB',
        dataname: 'p_07',
        price: 200,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell HEK_ViP_NB Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['mAb'],
            cellline: ['CHO', 'HEK', 'VERO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 8,
        name: 'Xell HYB_FS',
        dataname: 'p_08',
        price: 200,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell HYB_FS Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['mAb'],
            cellline: ['CHO', 'HEK', 'VERO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 9,
        name: 'Xell MDXK',
        dataname: 'p_09',
        price: 200,
        brand: 'Xell(Sartorius)',
        image: 'image/Xell MDXK Liquid.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['Vaccine'],
            cellline: ['CHO', 'HEK', 'VERO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 10,
        name: '4Cell-SmartCHO-Stock+Adaption',
        dataname: 'p_10',
        price: 200,
        brand: 'Sartorius',
        image: 'image/Sartorius_4Cell-SmartCHO-Stock+Adaption-Medium-Liquid-1L-B-0002845-White.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['mAb'],
            cellline: ['CHO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 11,
        name: '4Cell-SmartCHOpe-Production',
        dataname: 'p_11',
        price: 200,
        brand: 'Sartorius',
        image: 'image/Sartorius 4Cell-SmartCHOpe-Production-Medium-Powder-50L-B-0002857-White.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['mAb'],
            cellline: ['CHO'],
            mediatype: ['Powder'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 12,
        name: '4Cell-SmartCHO-Production',
        dataname: 'p_12',
        price: 200,
        brand: 'Sartorius',
        image: 'image/Sartorius_4Cell-SmartCHO-Production-Medium-Liquid-1L-B-0002841-White.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['mAb'],
            cellline: ['CHO'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 13,
        name: 'Xell TCX6D',
        dataname: 'p_13',
        price: 200,
        brand: '(Xell)Sartorius',
        image: 'image/Xell TCX6D.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['mAb'],
            cellline: ['CHO', 'DG44'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 14,
        name: 'TC-42 with Growth Hormone',
        dataname: 'p_14',
        price: 200,
        brand: '(Xell)Sartorius',
        image: 'image/Xell TC-42_with_Growth_Hormone.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['mAb'],
            cellline: ['CHO', 'DG44'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 15,
        name: 'TC-42 with Insuline',
        dataname: 'p_15',
        price: 200,
        brand: '(Xell)Sartorius',
        image: 'image/Xell TC-42_with_Insuline.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['mAb'],
            cellline: ['CHO', 'DG44'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 16,
        name: 'TC-42 w/o Growth Hormone',
        dataname: 'p_16',
        price: 200,
        brand: '(Xell)Sartorius',
        image: 'image/Xell TC-42_without_Growth_Hormone.jpg',
        nature: {
            manufacturer: 'XellSartorius',
            application: ['mAb'],
            cellline: ['CHO', 'DG44'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    { //20231219추가
        id: 17,
        name: 'MSCgo-Rapid-Osteogenic-Differentiation-Medium',
        dataname: 'p_17',
        price: 200,
        brand: 'Sartorius',
        image: 'image/MSCgo-Rapid-Osteogenic-Differentiation-Medium-100mL-Bottle-en-B.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 18,
        name: 'MSC-Nutristem-ACF-Basal-Medium',
        dataname: 'p_18',
        price: 200,
        brand: 'Sartorius',
        image: 'image/MSC-Nutristem-ACF-Basal-Medium-500mL-Bottle-en-B.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 19,
        name: 'MSC-NutriStem-XF-Basal-Medium',
        dataname: 'p_19',
        price: 200,
        brand: 'Sartorius',
        image: 'image/MSC-NutriStem-XF-Basal-Medium-100mL-Bottle-en-B.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 20,
        name: 'MSC-NutriStem-XF-Basal-Medium',
        dataname: 'p_20',
        price: 200,
        brand: 'Sartorius',
        image: 'image/MSC-NutriStem-XF-Basal-Medium-500mL-Bottle-en-B.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 21,
        name: 'MSC-NutriStem-XF-Basal-Medium-w/o-Phenol',
        dataname: 'p_21',
        price: 200,
        brand: 'Sartorius',
        image: 'image/MSC-NutriStem-XF-Basal-Medium-without-Phenol-Red-500mL-Bottle-en-B.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 22,
        name: 'MSC-Nutristem-XF-PRF-Basal-Medium',
        dataname: 'p_22',
        price: 200,
        brand: 'Sartorius',
        image: 'image/MSC-Nutristem-XF-PRF-Basal-Medium-500mL-Bottle-en-B.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },
    {
        id: 23,
        name: 'MSC-NutriStem-XF-Supplement',
        dataname: 'p_23',
        price: 200,
        brand: 'Sartorius',
        image: 'image/MSC-NutriStem-XF-Supplement-0.6mL-Vile-en-B.jpg',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '정말좋은배지입니다.',
            description02: '가성비가 좋은 배지 입니다',
            description03: '',
            description04: '',
            description05: '',
        }
    },           
];

let specialist = [
    {
        id: 1,
        datname: 's_01',
        name: '김서윤 부장',
        ename: 'April.Kim',
        email: 'April.Kim@sartorius.co.kr',
        mobile: '010-1234-5678'    
    },
    {
        id: 2,
        datname: 's_02',
        name: '장두재 과장',
        ename: 'Doojae.Jang',
        email: 'Doojae.jang@sartorius.co.kr',
        mobile: '010-1234-5678'
    },
    {
        id: 3,
        datname: 's_03',
        name: '손대우 과장',
        ename: 'Robert.Son',
        email: 'Robert.Son@sartorius.co.kr',
        mobile: '010-1234-5678'
    },
    {
        id: 4,
        datname: 's_04',
        name: '이윤서 대리',
        ename: 'Samantha.Lee',
        email: 'Samantha.Lee@sartorius.co.kr',
        mobile: '010-1234-5678'
    },
];

// =======================================================================ITEM LIST
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        
        let newItem = document.createElement('div');    //  
        newItem.classList.add('item');
        
        // silverhyo div 내에 data-name=''을 삽입
        let newData = newItem;
        newData.dataset.name = item.dataname;

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

                        
        //create brand
        let newBrand = document.createElement('div');
        newBrand.classList.add('brand');
        newBrand.innerText = item.brand;
        newItem.appendChild(newBrand);

        list.appendChild(newItem);
    });
}
// ======================================================================================

// ==============================================================================FILTER
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        
        // check manufacturer // item앞에 !가 없잖아 그래서 아래 것들과는 다른데 딱 한가지 중복 없어야 하는 경우 이걸 쓴 것 같다.
        if(valueFilter.manufacturer.value != ''){
            if(item.nature.manufacturer != valueFilter.manufacturer.value){
                return false;
            }
        }

        // check application
        if(valueFilter.application.value != ''){
            if(!item.nature.application.includes(valueFilter.application.value)){ 
                return false;
            }
        }
        // check cell line
        if(valueFilter.cellline.value != ''){
            if(!item.nature.cellline.includes(valueFilter.cellline.value)){
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
        // if(valueFilter.minPrice.value != ''){
        //     if(item.price < valueFilter.minPrice.value){
        //         return false;
        //     }
        // }
        // check max price
        // if(valueFilter.maxPrice.value != ''){
        //     if(item.price > valueFilter.maxPrice.value){
        //         return false;
        //     }
        // }
        
        return true;
    })
    showProduct(productFilter);
    makePopupWindowActive();
});
// =====================================================================================





// =====================================================================CREATE ELEMENT
makePopupWindow();
function makePopupWindow() {

    let previewCon = document.getElementById('previewcon');
    previewCon.innerHTML = '';
    productFilter.forEach(item => {

        let newData00 = document.createElement('div');
        newData00.classList.add('previewbox');
        let newData01 = newData00;
        newData01.dataset.target = item.dataname;
        previewCon.appendChild(newData01);

        let newData02 = document.createElement('div');
        newData02.classList.add('preview')
        newData01.appendChild(newData02);

        let newImage = new Image();
        newImage.src = item.image;
        newData02.appendChild(newImage);

        let newCloseButton = document.createElement('div');
        newCloseButton.classList.add('closebutton');
        newCloseButton.innerHTML = 'close';
        newData02.appendChild(newCloseButton);

        let newData03 = document.createElement('br');
        newData01.appendChild(newData03);

        let newData04 = document.createElement('h3');
        newData04.classList.add('medianame');
        newData04.innerHTML = item.name;
        newData01.appendChild(newData04);

        let newData05 = document.createElement('div');
        newData05.classList.add('description');
        newData01.appendChild(newData05);

        let newData06 = document.createElement('ul');
        newData05.appendChild(newData06);

        let newData07 = document.createElement('li')
        newData07.innerHTML = item.nature.description01;
        newData06.appendChild(newData07);
        let newData08 = document.createElement('li')
        newData08.innerHTML = item.nature.description02;
        newData06.appendChild(newData08);
        let newData09 = document.createElement('li')
        newData09.innerHTML = item.nature.description03;
        newData06.appendChild(newData09);
        let newData10 = document.createElement('li')
        newData10.innerHTML = item.nature.description04;
        newData06.appendChild(newData10);
        let newData11 = document.createElement('li')
        newData11.innerHTML = item.nature.description05;
        newData06.appendChild(newData11);



    });
};
// ====================================================================================

// ========================================================================POPUP WINDOW
function makePopupWindowActive() {
    let previewContainer = document.getElementById('previewcon');
    let listItem = document.querySelectorAll('#list .item');
    let previewBox = document.querySelectorAll('.previewbox');

    listItem.forEach(item => {
        item.onclick=() => {
            previewContainer.style.display = 'flex';
            let name = item.getAttribute('data-name');
            previewBox.forEach(previewBox => {
                let target = previewBox.getAttribute('data-target');
                if(name == target) {
                    previewBox.classList.add('active');
                }
            })
        }
    })
};
makePopupWindowActive();

let previewContainer = document.getElementById('previewcon');
let listItem = document.querySelectorAll('#list .item');
let previewBox = document.querySelectorAll('.previewbox');
let closeButton = document.querySelectorAll('.closebutton');
closeButton.forEach(item => {
    item.onclick = () => {
        previewContainer.style.display = 'none';
        let previewBoxActive = document.querySelector('.previewbox.active');
        previewBoxActive.classList.remove("active");
        };
    }
);
// =====================================================================================