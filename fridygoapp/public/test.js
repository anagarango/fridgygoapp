function mainFunction(purpose, edit, text, data){

    //h3
    let h3 = document.createElement('h3');
    h3.append(document.createTextNode(purpose));
    
    
    //buttons edit and remove
    let topT = document.createElement('div');
        topT.classList.add('topthird');
    
    var i = document.createElement('button')
    i.classList.add('edit-me');
    i.append(document.createTextNode(edit));
    
    var x = document.createElement('button')
    x.classList.add('remove-me');
    x.append(document.createTextNode('Remove'));
    
    topT.append(i);
    topT.append(x)
    
    
    //input
    let middle = document.createElement('div');
        middle.classList.add('middlethird');
    let input = document.createElement(text);
        input.classList.add('changesensitive');
        middle.append(input);
    
    //reveal input
    i.addEventListener('click', function(){
        middle.style.display = "block";
    })
    
    //remove
    x.addEventListener('click', function(){
        mainDiv.remove();
    })
    
    
    // ADD buttons
    let bottom = document.createElement('div');
        bottom.classList.add('bottomthird');
    
    let buttonH = document.createElement('button');
        buttonH.classList.add('add', 'add-heading');
        buttonH.append(document.createTextNode('+ Heading'));
        buttonH.addEventListener("click", function(){
            buttonH.parentElement.parentElement.after(mainFunction("Heading", "Edit heading", "input"));
        })
    let buttonI = document.createElement('button');
        buttonI.classList.add('add', 'add-image');
        buttonI.append(document.createTextNode('+ Image'));
        buttonI.addEventListener("click", function(){
            buttonI.parentElement.parentElement.after(mainFunction("Image", "Edit image", "input"));
        })
    let buttonQ = document.createElement('button');
        buttonQ.classList.add('add', 'add-quote');
        buttonQ.append(document.createTextNode('+ Quote'));
        buttonQ.addEventListener("click", function(){
            buttonQ.parentElement.parentElement.after(mainFunction("Quote", "Edit quote", "textarea"));
        })
    let buttonP = document.createElement('button');
        buttonP.classList.add('add', 'add-paragraph');
        buttonP.append(document.createTextNode('+ Paragraph'));
        buttonP.addEventListener("click", function(){
            buttonP.parentElement.parentElement.after(mainFunction("Paragraph", "Edit paragraph", "textarea"));
        })
    
    bottom.append(buttonH);
    bottom.append(buttonI);
    bottom.append(buttonQ);
    bottom.append(buttonP);
    
    
    //main div
    let mainDiv = document.createElement('div');
      mainDiv.classList.add('edit-chunk');
      mainDiv.setAttribute('data-view-hint', data);
    
    mainDiv.append(h3);
    mainDiv.appendChild(topT);
    mainDiv.append(middle);
    mainDiv.append(bottom);
    
    
    
    return mainDiv;
    
    }
    
    var buttonHClick = document.querySelector(".add.add-heading");
    buttonHClick.addEventListener("click", function(){
        document.querySelector(".edit-chunk").after(mainFunction("Heading", "Edit heading", "input", "heading"))
    });
    
    var buttonIClick = document.querySelector(".add.add-image");
    buttonIClick.addEventListener("click", function(){
        document.querySelector(".edit-chunk").after(mainFunction("Image", "Edit image", "input", "img"))
    })
    
    var buttonQClick = document.querySelector(".add.add-quote");
    buttonQClick.addEventListener("click", function(){
        document.querySelector(".edit-chunk").after(mainFunction("Quote", "Edit quote", "textarea", "quote"))
    })
    
    var buttonPClick = document.querySelector(".add.add-paragraph");
    buttonPClick.addEventListener("click", function(){
        document.querySelector(".edit-chunk").after(mainFunction("Paragraph", "Edit paragraph", "textarea", "paragraph"))
    })
    
    
    
    function buildContent(){
    
        var buttonEdit = document.querySelector(".edit-chunk button.edit-me");
        var buildButton = document.querySelector(".sec-view > button")
    
        if (buttonEdit.innerText.contains("image")){
            buildButton.addEventListener("click", function(){
                document.querySelector(".sec-view img").src = buttonEdit.parentElement.parentElement.querySelector(".middlethird > input").value;
            })
        }
    }