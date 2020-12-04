let mainAppContainer = document.getElementById("app");

let localStorage = [];
localStorage["post"] = [];
let post = [];

// let postAddPage = `
// <div class="add-post">
//     <form onsubmit="event.preventDefault();">
//         <input type="text" name="title" id="post-title">
//         <textarea name="text" id="post-text" cols="30" rows="10"></textarea>
//         <input type="text" name="post-category" id="post-cat">
//         <button onclick="addPost()">პოსტის დამატება</button>
//     </form>
// </div>
// `;

function showAddPost(){
    let addPostContaienr = document.createElement("div");
        addPostContaienr.setAttribute("class","add-post");


    console.log(addPostContaienr);
    let formElement = document.createElement("form");
        formElement.addEventListener("submit", (event)=>{
            addPost();
            event.preventDefault();
        });
    let titleElement = document.createElement("input");
        titleElement.setAttribute("type","text");
        titleElement.setAttribute("name","title");
        titleElement.setAttribute("id","post-title");
    let textElement = document.createElement("textarea");
        textElement.setAttribute("name","text");
        textElement.setAttribute("id","post-text");
        textElement.setAttribute("cols","30");
        textElement.setAttribute("rows","30");
    let catElement = document.createElement("input");
        catElement.setAttribute("type","text");
        catElement.setAttribute("name","post-category");
        catElement.setAttribute("id","post-cat");

    let buttonElement = document.createElement("button");
        buttonElement.innerText="Save";
        buttonElement.addEventListener("onclick",function(){
            
        });



    formElement.appendChild(titleElement);
    formElement.appendChild(textElement);
    formElement.appendChild(catElement);
    formElement.appendChild(buttonElement);
    addPostContaienr.appendChild(formElement);


    mainAppContainer.appendChild(addPostContaienr);
}


function addPost(){
    let title = document.getElementById("post-title");
    let text = document.getElementById("post-text");
    let cat = document.getElementById("post-cat");
    post.push({title:title.value,text:text.value,cat:cat.value});
    localStorage["post"] = post;
    
    title.value = "";
    text.value = "";
    cat.value = "";

    msgBoxWindows("პოსტი ვერ დაემატა","error");



}


function msgBoxWindows(text,status){
    let popupContainer = document.createElement("div");
        popupContainer.setAttribute("id","popup");
        popupContainer.setAttribute("class",status);
    let popupTextContainer = document.createElement("div");
        popupTextContainer.setAttribute("class","popupText");

        popupTextContainer.innerText = text;  

        popupContainer.appendChild(popupTextContainer);

    mainAppContainer.appendChild(popupContainer);
    setTimeout(function(){ 
        document.getElementById("popup").remove();
    }, 3000);
}



function showPosts(){
   
    let postsElement = document.createElement("div");
    postsElement.setAttribute("id", "posts");
    
    localStorage.post.forEach(element => {
        console.log(element)
            let postElement = document.createElement("div")
            postElement.setAttribute("class","post");

            let postTitleElement = document.createElement("div");
                postTitleElement.setAttribute("class","title");
                postTitleElement.innerHTML = element.title;
            let postTextElement = document.createElement("div");
                postTextElement.setAttribute("class","text");
                postTextElement.innerHTML = element.text;
            let postCatElement = document.createElement("div");
                postCatElement.setAttribute("class","cat");
                postCatElement.innerHTML = element.cat;

            postElement.appendChild(postTitleElement);
            postElement.appendChild(postTextElement);
            postElement.appendChild(postCatElement);

            postsElement.appendChild(postElement);

        });
        
        
    mainAppContainer.innerHTML = "";   
    mainAppContainer.appendChild(postsElement);
        
    }




Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}