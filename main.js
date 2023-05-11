var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var tableRow = document.getElementById("tableRow")
var siteArr;

(function () {
    if (localStorage.getItem("data") == null) {
        siteArr = []
    }
    else {
        siteArr = JSON.parse(localStorage.getItem("data"))
    }
display(siteArr);
})();

function addSite() {

    {
        var site = {
            sName: siteName.value,
            sURL: siteURL.value
        };
        if (!site.sURL.includes("https://"))
        {
            site.sURL="https://"+site.sURL;
        }
    
        siteArr.push(site)
        localStorage.setItem("data", JSON.stringify(siteArr))
        display(siteArr);
        clearinputs();

     
    }

}

function display(Arr) {
    var box = ''
    for (var i = 0; i < Arr.length; i++) {
        box += `
        <div class="col-6 pb-5">
        ${Arr[i].sName}
        </div>
        <div class=" col-2">
        <a href="${Arr[i].sURL}" target="_blank"><button class="btn btn-info"> Visit</button></a>
        </div>

       <div class="col-2">
       <button class="btn btn-danger" onclick="deletebookmark(${i})">Delete</button>
       </div>
       
       `
    }
    Row.innerHTML = box
}

function deletebookmark(index) {
siteArr.splice(index,1)
localStorage.setItem("data",JSON.stringify(siteArr))
display(siteArr)
}

function clearinputs(){
    siteName.value="";
    siteURL.value="";
}