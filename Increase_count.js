for (i = 0; i < 25; i++){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
        }
    };

    xhttp.open("GET", "https://camo.githubusercontent.com/709bcaad4aa71cc04d1f03117639a626353738ae694a9f0b1123c9dff0a6b1ad/68747470733a2f2f70726f66696c652d636f756e7465722e676c697463682e6d652f6d6f686974736861726d612d6969746a2f636f756e742e737667", true);
    xhttp.send();
    
    var k = i+1;
    document.getElementById("demooo").innerHTML += "i: " + k + "<br>";
}
