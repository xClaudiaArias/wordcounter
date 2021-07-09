let enterkey = 0;
let paraLength = 0;

let twitterNum = parseInt($("#twitter-num").text());
let facebookNum = parseInt($("#facebook-num").text());


$("#text-area").on('keydown', function(e) { 
        // # logging the LETTERS ||| this include the spaces --- FIX LATE
        let length_of_letters = e.target.value.length;

        $('#letters-num').text("" + length_of_letters);
        if (e.target.value.length === 0){
            $('#letters-num').text("0")
        }

        // ---------------------
        let wordArray = "";
        wordArray += e.target.value;


        // WORD COUNTER 

        $('#words-num').text(""  + wordArray.split(" ").length)
        if (e.target.value.length === 0){
            $('#words-num').text("0")
        }

        // SENTENCE COUNTER 

        let sentenceLength = wordArray.split(".").length - 1;
        $('#sentences-num').text(""  + sentenceLength)
        if (e.target.value.length === 0){
            $('#sentences-num').text("0")
        }

        // PARAGRAPH COUNTER


        if(e.keyCode == 13){
            enterkey += 1;
        }


        if (enterkey >= 2 || $('#sentences-num').val() === 5) {
            paraLength++
            enterkey = 0
            $('#paragraphs-num').text(""  + paraLength)
        }

        //  twitter
        let removeTwitterNum = twitterNum - parseInt($('#letters-num').text())

        if (removeTwitterNum  < 0){
            $("#twitter-num").text("" + (removeTwitterNum))
            $("#twitter-num").css("color", "red")
        }  else if (removeTwitterNum == 0){
            $('#twitter-num').text("280")
        } else if ((removeTwitterNum > 0)) {
            $('#twitter-num').text("" + $('#letters-num').text())
            $("#twitter-num").css("color", "black")
        }
        
        if (e.target.value.length == 0){
            $('#twitter-num').text("280")
        }

        // facebook 

        let removefacebookNum = facebookNum - parseInt($('#letters-num').text())


        if (removefacebookNum  < 0){
            $("#facebook-num").text("" + (removefacebookNum))
            $("#facebook-num").css("color", "red")
        }  else if (removefacebookNum == 0){
            $('#facebook-num').text("250")
        } else if ((removefacebookNum > 0)) {
            $('#facebook-num').text("" + $('#letters-num').text())
            $("#facebook-num").css("color", "black")
        }
        
        if (e.target.value.length == 0){
            $('#facebook-num').text("250")
        }
        

});


$("#clear").on("click", function(){
    location.reload();
})

$("#copy").on("click", function(){
    document.execCommand("copy");
})

