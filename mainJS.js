//public variables

let aUsersturns = [];
let aDealerturns = [];

let userscore = 26;
let dealerscore = 26;

let deck1 = randoSequence(2, 14);
let deck2 = randoSequence(2, 14);
let deck3 = randoSequence(2, 14);
let deck4 = randoSequence(2, 14);
let decko = deck1.concat( deck2 ).concat(deck3).concat(deck4);
let cnt = 0;




//loto
function lotocards() {

    if (cnt !== 0 && cnt <52  ) {  
        var usercard = decko[cnt-1];
    
        aUsersturns.push(usercard);

        var usercardoutput = "";
        if(usercard === 11) {
            usercardoutput = "J"
        } else if(usercard === 12) {
            usercardoutput = "Q";
        } else if(usercard === 13) {
        usercardoutput = "K";
        } else if(usercard === 14) {
            usercardoutput = "A";
    
        } else {
        usercardoutput = usercard;
    }

    } else if(cnt===0)  {
        usercardoutput = "";
    }   else {
        usercardoutput = "End Game";
    }
    //}

    document.getElementById("usercardnum").innerHTML = usercardoutput;

    if ( cnt <52  ) {  
    
        var dealercard = decko[cnt];
        aDealerturns.push(dealercard);

        var dealercardoutput = "";
        if(dealercard === 11) {
            dealercardoutput = "J"
        } else if(dealercard === 12) {
            dealercardoutput = "Q";
        } else if(dealercard === 13) {
            dealercardoutput = "K";
        } else if(dealercard ===14) {
            dealercardoutput = "A";
        } else {
        dealercardoutput = dealercard;
        }
    } else {
        dealercardoutput='End Game';
    }

    document.getElementById("dealercardnum").innerHTML = dealercardoutput;

    if (cnt >0 && cnt <53 ){
    document.getElementById("userchar").innerHTML = document.getElementById("dealerchar").innerHTML;
    document.getElementById("userbigchar").innerHTML = document.getElementById("dealerchar").innerHTML;
    document.getElementById("userbigchar").style.color = "red";
    document.getElementById("userchar").style.color = "red";
    }
    ////////////////////////////////////////////////////////////////////////////
    //
    //////////////////////////////////////////////////////////////////////

    var dealerchar = Math.floor(Math.random() * 2 + 1);
    switch(dealerchar) {
        case 1:
            dealerchar = "&hearts;";
            document.getElementById("dealerchar").style.color = "red";
            document.getElementById("dealerbigchar").style.color = "red";
        break;

        case 2:
            dealerchar = "&diams;";
            document.getElementById("dealerchar").style.color = "red";
            document.getElementById("dealerbigchar").style.color = "red";
        break;
        
    }
    document.getElementById("dealerchar").innerHTML = dealerchar;
    document.getElementById("dealerbigchar").innerHTML = dealerchar;

     
////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////

//var userchar = Math.floor(Math.random() * 2 + 1);

//switch(userchar) {
//     case 1:
//         userchar = "&hearts;";
//         document.getElementById("userchar").style.color = "red";
//         document.getElementById("userbigchar").style.color = "red";
//     break;


//     case 2:
//         userchar = "&diams;";
//         document.getElementById("userchar").style.color = "red";
//         document.getElementById("userbigchar").style.color = "red";
//     break;
    
// }


////////////////////////////////////////////////////////////////
////
/////////////////////////////////////////////////////

    //Display Turns:
    var dealerturns = cnt;
    // var i;
    // for(i = 0; i < aDealerturns.length; i++) {
    dealerturns = dealerturns + 1;
    document.getElementById("dealerturns").innerHTML = dealerturns
    document.getElementById("dealerturns").innerHTML = dealerturns
    cnt= dealerturns
    // }

    // var userturns = "";
    // var j;
    // for(j = 0; j < aUsersturns.length; j++) {
    //     userturns = userturns + aUsersturns[j] + ", ";
    //     document.getElementById("userturns").innerHTML = userturns
    // }

    

    // chekingscores();
}

