const firstInput = document.getElementById("firstInput");
const firstBtn = document.getElementById("firstButton");
const secondInput = document.getElementById("secondInput");
const secondBtn = document.getElementById("secondButton");
const resultDiv1 = document.getElementById("resultDiv1");
const resultDiv2 = document.getElementById("resultDiv2");
const itemResult1  = document.getElementById("itemDiv_1");

// div 1
const memory1 = [] ;
// div 2 
const memory2 = [] ;

// id generator for first div
createIdGenerator1 = () => {
    let counter = 0;
    return function() {
        return `itemDiv_first_${counter++}`;
    };
};
const generateId1 = createIdGenerator1();


firstBtn.addEventListener('click' , () =>{
    const inputValue = firstInput.value ;
    const divItem1 =  document.createElement('div');

    if(inputValue !== ""){
        memory1.push(inputValue);
        divItem1.textContent = inputValue ;
        divItem1.id = generateId1();
        divItem1.dataset.originalId = divItem1.id;
        divItem1.className = "itemDiv_1"; 
        firstInput.value = "";
        resultDiv1.appendChild(divItem1);
        divItem1.addEventListener('click' , function() {
           if(this.id === "selectedDiv"){
                this.id = this.dataset.originalId;
           }else{
                this.id = "selectedDiv";
           } 
        });
    }
    

    
});

// id generator for second div
createIdGenerator2 = () => {
    let counter = 0;
    return function() {
        return `itemDiv_second_${counter++}`;
    };
};
const generateId2 = createIdGenerator2();

secondBtn.addEventListener('click' , () => {
    const inputValue = secondInput.value ;
    const divItem2 = document.createElement('div');

    if(inputValue !== ""){
        memory2.push(inputValue);
        divItem2.textContent = inputValue ;
        divItem2.id =  generateId2();
        divItem2.className = "itemDiv_2"; 
        secondInput.value = "" ;
        resultDiv2.appendChild(divItem2);
    }
});

