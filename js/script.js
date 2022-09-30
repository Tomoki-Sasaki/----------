
var inputPlace = "";

function onTenkey( num ){
    //alert( num );

    if( inputPlace == "" ){
        return;
    }
    //alert( num );
    var obj;
    if( num == "RET" ){
        if( inputPlace == "num" ){
            obj = document.getElementById( "pass" );
        } else if( inputPlace == "pass" ){
            obj = document.getElementById( "login" );
        } else {
            obj = document.getElementById( "num" );
        }
        obj.focus();
        return;
    }

    //alert( inputPlace);
    obj = document.getElementById( inputPlace );
    //alert( obj.value );
    if( num == "BS" ){
        var str = obj.value;
        if( str.length > 0 ){
            obj.value = str.substr( 0, str.length -1 );
        }
    } else if( num =="AC" ){
        var str = obj.value;
        if( str.length > 0 ){
            obj.value = str.substr( 0, str.length -10 );
        }
    } else {
        obj.value += num;
    } 
}

function onNum(){
    //alert( inputPlace );
    inputPlace = "num";
}

function onDsc(){
    //alert( inputPlace );
    inputPlace = "dsc";
}

function onPnt(){
    //alert( inputPlace );
    inputPlace = "pnt";
}


function onPass(){
    //alert( inputPlace );
    inputPlace = "pass";
}


function viewChange(){
    if(document.getElementById('selchg')){
        id = document.getElementById('selchg').value;
        if(id == 'stf'){
            document.getElementById('tax').style.display = "none";
            document.getElementById('taxvol').style.display = "none";
            document.getElementById('staff').style.display = "";
        }else{
            document.getElementById('tax').style.display = "";
            document.getElementById('taxvol').style.display = "";
            document.getElementById('staff').style.display = "none";
        }
    }
    window.onload = viewChange;
}


function viewChange2(){
    if(document.getElementById('tax')){
        id = document.getElementById('tax').value;
        if(id == 'tax-exempt'){
            document.getElementById('taxvol').style.display = "none";
        }else{
            document.getElementById('taxvol').style.display = "";
        }
    }
    window.onload = viewChange;
}



