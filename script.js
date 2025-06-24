const firstInput = document.getElementById("firstInput");
const firstBtn = document.getElementById("firstButton");
const secondInput = document.getElementById("secondInput");
const secondBtn = document.getElementById("secondButton");
const resultDiv1 = document.getElementById("resultDiv1");
const resultDiv2 = document.getElementById("resultDiv2");
const itemResult1  = document.getElementById("itemDiv_1");
const moveItem_right = document.getElementById("moveItem_right");
const moveItem_left = document.getElementById("moveItem_left");

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


firstBtn.addEventListener('click' , () => {  
    const inputValue = firstInput.value ;
    let divItem1 =  document.createElement('div');
    let delButton = document.createElement('button');
    let spanText = document.createElement('span');
    if(inputValue !== ""){
        memory1.push(inputValue);
        spanText.textContent = inputValue;
        spanText.className = "div1Span";
        divItem1.appendChild(spanText);
        divItem1.id = generateId1();
        divItem1.dataset.originalId = divItem1.id;
        divItem1.className = "itemDiv_1"; 
        firstInput.value = "";
        resultDiv1.appendChild(divItem1);
        delButton.textContent = "x";
        delButton.className = "deleteButton";
        divItem1.appendChild(delButton);
        delButton.addEventListener('click' , function(){
            let index = memory1.indexOf(divItem1.textContent);
            memory1.splice(index, 1);
            divItem1.remove();
            console.log(memory1);
        })
        divItem1.addEventListener('click' , function() {
           if(this.id === "selectedDiv"){
                this.id = this.dataset.originalId;
           }else{
                this.id = "selectedDiv";
           } 
        });
    }
    divItem1.addEventListener('dblclick' , function(){
        const span = this.querySelector(".div1span")
        let editInput = document.createElement('input');
        editInput.value = span.textContent;
        this.replaceWith(editInput);
        editInput.className = "editInput"; 
        editInput.focus();
        let oldValue = this.textContent;
        editInput.addEventListener('keydown', function(event){
            if(event.key === 'Enter'){
                this.replaceWith(divItem1);
                divItem1.textContent = this.value;
                let index = 
                memory1.indexOf(divItem1.textContent);
                memory1[index] = this.value;
                console.log(memory1);
            }
        }) 
    });


});

moveItem_right.addEventListener('click' , () => {
    const selectedItemDiv1 = document.querySelectorAll("#selectedDiv");
    selectedItemDiv1.forEach(item => {
        let index = memory1.indexOf(item.textContent);
        memory1.splice(index, 1);
        memory2.push(item.textContent);
        item.className = "itemDiv_2";
        resultDiv2.appendChild(item);
    }
    )
})



// id generator for second div
createIdGenerator2 = () => {
    let counter = 0;
    return function() {
        return `itemDiv_second_${counter++}`;
    };
};
const generateId2 = createIdGenerator2();

secondBtn.addEventListener('click' , () => {
    let inputValue = secondInput.value ;
    let divItem2 = document.createElement('div');
    let spanText = document.createElement('span');
    let delButton = document.createElement('button');
    if(inputValue !== ""){
        memory2.push(inputValue);
        spanText.textContent = inputValue;
        divItem2.appendChild(spanText);
        spanText.className = "div2Span";
        divItem2.id =  generateId2();
        divItem2.dataset.originalId = divItem2.id;
        divItem2.className = "itemDiv_2"; 
        secondInput.value = "" ;
        resultDiv2.appendChild(divItem2);
        delButton.textContent = "x";
        delButton.className = "deleteButton"
        divItem2.appendChild(delButton);
        delButton.addEventListener('click' , function(){
            let index = memory2.indexOf(divItem2.textContent);
            memory2.splice(index, 1);
            divItem2.remove();
            console.log(memory2);
        })
        divItem2.addEventListener('click' , function() {
            if(this.id === "selectedDiv"){
                this.id = this.dataset.originalId;
            }else{
                this.id = "selectedDiv";
            }
        }); 
    }
    divItem2.addEventListener('dblclick' , function(){
        let span = this.querySelector(".div2Span");
        let editInput = document.createElement('input');
        editInput.value = span.textContent;
        this.replaceWith(editInput);
        editInput.className = "editInput";
        editInput.focus();
        let oldValue = this.textContent;
        editInput.addEventListener('keydown', function(event){
            if(event.key === 'Enter'){
                this.replaceWith(divItem2);
                divItem2.textContent = this.value;
                let index =
                memory2.indexOf(divItem2.textContent);
                memory2[index] = this.value;
                console.log(memory2);
            }
        })
    });
});

moveItem_left.addEventListener('click' , () => {
    const selectedItemDiv2 = document.querySelectorAll("#selectedDiv");
    selectedItemDiv2.forEach(item => {
        let index = memory2.indexOf(item.textContent);
        memory2.splice(index, 1);
        memory1.push(item.textContent);
        item.className = "itemDiv_1";
        resultDiv1.appendChild(item);
    })
})
