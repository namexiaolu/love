window.onload=function(){
    var search = document.getElementById("search");
    
    search.onmousemove=function(){
        var searchInput = document.getElementById("searchInput");
        searchInput.style.display = "inline";
        var width = search.offsetWidth;
        console.log(width);
        // alert(width);
        
        setInterval(function(){
            width = width + 10;
            searchInput.style.width = width + "px"; 
        },500);
    };

};