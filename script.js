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
        datasheet:'./datasheet',
        download: '4Cell-XtraCHO-Media-System-Datasheet-en-B-2559949-Sartorius.pdf',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        image: 'image_msc/MSCgo-Rapid-Osteogenic-Differentiation-Medium-100mL-Bottle-en-B.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        image: 'image_msc/MSC-Nutristem-ACF-Basal-Medium-500mL-Bottle-en-B.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        image: 'image_msc/MSC-NutriStem-XF-Basal-Medium-100mL-Bottle-en-B.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        image: 'image_msc/MSC-NutriStem-XF-Basal-Medium-500mL-Bottle-en-B.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        image: 'image_msc/MSC-NutriStem-XF-Basal-Medium-without-Phenol-Red-500mL-Bottle-en-B.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        image: 'image_msc/MSC-Nutristem-XF-PRF-Basal-Medium-500mL-Bottle-en-B.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
        image: 'image_msc/MSC-NutriStem-XF-Supplement-0.6mL-Vile-en-B.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
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
    //2024_01_17추가
    {
        id: 24,
        name: 'RoosterCollect(TM)-EV',
        dataname: 'p_24',
        price: 200,
        brand: 'Sartorius',
        image: 'image_roosterbio/roostercollect-ev.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
        nature: {
            manufacturer: 'RoosterBio',
            application: ['Exosome'],
            cellline: ['Exosome', 'HEK'],
            mediatype: ['Liquid'],
            description01: '※ RoosterBio제품',
            description02: '※ 세포배양 > washing > RoosterCollect로 배지 교체',
            description03: '※ US FDA 임상 레퍼런스',
            description04: '※ Exosome을 방출하는 다향한 세포에 가능 (MSC, HEK293..)',
            description05: '※ 엑소좀과 비슷한 크기의 파티클을 최소화',
            description06: '※ 배지 자체에 포함된 파티클 최소화 > 타겟 exosome 순도 높임',
            description07: '※ Chemically Defined, Protein Free',
        }
    },
    {
        id: 25,
        name: 'MSC NutriStem XF',
        dataname: 'p_25',
        price: 200,
        brand: 'Sartorius',
        image: 'image_msc/MSC-NutriStem-XF-Basal-Medium-500mL-Bottle-en-B.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '※ 타사 제품 대시 가격 경쟁력 있는 제품이예요.',
            description02: '※ RUO / GMP 품목 구분이 없어요.',
            description03: '※ 그래서 생산으로 넘어갈 때 비교동등성 시험이 필요 없습니다.',
            description04: '',
            description05: '',
        }
    },
    {
        id: 26,
        name: 'PTLGold',
        dataname: 'p_26',
        price: 200,
        brand: 'Sartorius',
        image: 'image_plt/PLTGoldGMP-GI.Family.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '※ Human 유래물 (Xeno Free',
            description02: '※ 동물 serum에 대한 완벽한 대체물 입니다.',
            description03: '※ 권장 용량 : 5%',
            description04: '※ MSC, NK, T 등의 세포치료제를 다루는 고객사에 소개 가능',
            description05: '※ Classical media + FBS 를 사용하는 곳에 모두 소개 가능',
            description06: '※ 특히, R&D 단계에서 FBS를 사용한 고객사가 타겟',
            description07: '※ 생산 계획이 있는 곳일 경우, PLTGold 강력 추천',
        }
    },
    {
        id: 27,
        name: 'RoosterNourish-MSC',
        dataname: 'p_27',
        price: 200,
        brand: 'Sartorius',
        image: 'image_plt/PLTGoldGMP-GI.Family.jpg',
        datasheet:'',
        incharge: '01099263616',
        mailto : 'oliver.choi@sartorius.co.kr',
        nature: {
            manufacturer: 'Sartorius',
            application: ['MSC'],
            cellline: ['MSC'],
            mediatype: ['Liquid'],
            description01: '※ ',
            description02: '※ ',
            description03: '※ ',
            description04: '※ ',
            description05: '※ ',
            description06: '※ ',
            description07: '※ ',
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
    console.log(valueFilter);
    productFilter = listProducts.filter(item => {
        
        // check manufacturer // item앞에 !가 없잖아 그래서 아래 것들과는 다른데 딱 한가지 중복 없어야 하는 경우 이걸 쓴 것 같다.
        if(valueFilter.manufacturer.value != ''){
            if(item.nature.manufacturer != valueFilter.manufacturer.value){
                return false;
            }
            console.log(valueFilter.manufacturer.value != '');
            // console.log("안녕")
            // console.log(valueFilter.manufacturer.value)
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
        console.log("이거야이거!")
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

        //Data-Sheet Download 버튼 만들기
        let newDatasheetbutton = document.createElement('div');
        newDatasheetbutton.classList.add('datasheetbutton');
        newData02.appendChild(newDatasheetbutton);

        // a Tag 만들기
        let newData12 = document.createElement('a');
        newData12.href = item.datasheet;
        newData12.download = item.download;
        newData12.innerHTML = 'DataSheet';
        newDatasheetbutton.appendChild(newData12);

        //incharge 버튼 만들기
        let newIncharge = document.createElement('div');
        newIncharge.classList.add('incharge');
        newData02.appendChild(newIncharge);

        // a Tag 만들기 : 전화
        let newData13 = document.createElement('a');
        newData13.href = 'tel:'+ item.incharge;
        newData13.innerHTML = '문의하기';
        newIncharge.appendChild(newData13);

        //mailto 버튼 만들기
        let newMailto = document.createElement('div');
        newMailto.classList.add('mailto');
        newData02.appendChild(newMailto);

        // a Tag 만들기 : 이메일
        let newData14 = document.createElement('a');
        newData14.href = 'mailto:'+item.mailto;
        newData14.innerHTML = '메일';
        newMailto.appendChild(newData14);


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

        let newData15 = document.createElement('li')
        newData15.innerHTML = item.nature.description06;
        newData06.appendChild(newData15);
        let newData16 = document.createElement('li')
        newData16.innerHTML = item.nature.description07;
        newData06.appendChild(newData16);

      


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