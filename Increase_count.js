for (i = 0; i < 25; i++){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
        }
    };

    xhttp.open("GET", "https://camo.githubusercontent.com/USE_your_generated_link", true);
    xhttp.send();
    
    var k = i+1;
    document.getElementById("demooo").innerHTML += "i: " + k + "<br>";
}
