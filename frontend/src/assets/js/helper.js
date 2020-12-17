/* ISPISUJE SVE NASTAVNIKE U TABLICU */
function svi(datapassed){

    var podatci = JSON.parse(datapassed);
    var truedata = podatci['data'];
    
    /*for(x=0; x<podatci['data'].length; x++){
        document.getElementById("showData").innerHTML = document.getElementById("showData").innerHTML + ' ' + podatci['data'][x]['mat_br'] + ' ' + podatci['data'][x]['ime'] + ' ' + podatci['data'][x]['prezime'] + '<br>';
    };*/

    // EXTRACT VALUE FOR HTML HEADER. 
    var col = [];
    for (var i = 0; i < truedata.length; i++) {
        for (var key in truedata[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.className = "table table-striped d-flex justify-content-between";
    //var el = document.getElementsByTagName("table");
    //el.className = "table table-striped";
    
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < truedata.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = truedata[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
};

/* ISPISUJE NASTAVNIKA U TABLICU */
function jedan(datapassed){
    var podatci = JSON.parse(datapassed);
    var truedata = podatci['data'];
    /* PROVJERAVAMO JE LI JSON PRAZAN */
    if(truedata.length > 0 ){
        // EXTRACT VALUE FOR HTML HEADER. 
        var col = [];
        for (var i = 0; i < truedata.length; i++) {
            for (var key in truedata[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.className = "table table-striped d-flex justify-content-between"; // BOOTSTRAP

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < truedata.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = truedata[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
    else{
        /* POST REQ DAJE PRAZAN JSON ZA IME ILI PREZIME */
        console.log("REMINDER: POST REQ resulted with empty JSON for either 'ime' or 'prezime'.");
        return;
    }
};

/* PRAVI TOKEN ZA PRIJAVU */
function makeToken() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 50; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
};

/* PRAVI NOVU OBAVIJEST/POST */
function makeNewPost(srcImg, naslov, sadrzaj, datum, autor){
    let doc = document.getElementById('novaObj');
    let text = `<div class="card mb-4"><img class="card-img-top" src="${srcImg}" alt="Card image cap"><div class="card-body"><h2 class="card-title">${naslov}</h2><p class="card-text">${sadrzaj}</p></div><div class="card-footer text-muted">Objavljeno ${datum}<br>Autor: <a href="#">${autor}</a></div></div>`;
    let prev = doc.innerHTML;
    doc.innerHTML = text + prev;
};

/* PRAVI NOVU CARNET OBJAVU */
function makeNewCarnet(datum,urlcar,naslov,sadrzaj){
    let doc = document.getElementById('newCarnet');
    let text = `<div class="card-body"><p>${datum}<br><a href="${urlcar}">${naslov}</a><br>${sadrzaj}</p></div>`;
    let prev = doc.innerHTML;
    doc.innerHTML = text + prev;
};