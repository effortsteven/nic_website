   
// grobal functions-----------------------------

// welcome page time counter
    function now(){
            var today = new Date();
            var cd = today.getDate();
            var cm = today.getMonth()+1;
            var cy = today.getFullYear();
            // p stands for past
            var d, m, y, pd, pd, py,r;
            pd = 16,pm = 10,py = 1963;
            d = cd - pd,m = cm - pm,y = cy - py;
            if((m>0) && (d!=0||d==0)){r =  y;}else if((m==0) && (d>=0)){r = y;}else if((m==0) && (d<0)){r = y-1;}else if((m<0) && (d!=0||d==0)){r = y-1;}
            return r;
        }

// read more function
    function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// pull up botton
// $('body').prepend('<a href="#" id="mytop"><i class="icon-arrow-up32"></i></a>');
$('body').prepend(`<a id="mytop" href="#" class=" btn btn-just-icon btn-round"><i class="fab-icon-open material-icons">keyboard_arrow_up</i></a>`);

// add to head link

$('head').append('<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">');

// scroll button styled
$(window).scroll(function(){
    if ($(window).scrollTop() > 200){
        $('#mytop').fadeIn(3000);
        $('#mytop').css('bottom','20px');
    }else{
      $('#mytop').css('bottom','-50px');
    }
});

$(' a #mytop').click(function(e){
  e.preventDefault();
    $('body').animate({
        scrollTop: 0
    }, 1000)

    return false;
});

$('#sideBtn').click(function(e){
  e.preventDefault();
  $('.collapse_1').css('display','block');
  $('.collapse_1').addClass('animated slideInLeft');
});
  


 if(window.innerWidth <= 600){

    $(document).mouseup(function(e){
      var myDiv = $('.collapse_1');
      if(!myDiv.is(e.target) && myDiv.has(e.target).length === 0){
        myDiv.hide('slow');
      }
    });
    $(document).mouseup(function(e){
      var myDiv = $('.collapse_1');
        myDiv.hide('slow');
    });
 }

 // add margin top on the nav links
 $('.navbar-nav').addClass('mt-3-nav');


// countries
var country_list = [
"Afghanistan","Albania","Algeria","Andorra","Angola",
"Anguilla","Antigua &amp; Barbuda","Argentina","Armenia",
"Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
"Bangladesh","Barbados","Belarus","Belgium","Belize","Benin",
"Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina",
"Botswana","Brazil","British Virgin Islands","Brunei",
"Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon",
"Cape Verde","Cayman Islands","Chad","Chile","China",
"Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire",
"Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark",
"Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
"El Salvador","Equatorial Guinea","Estonia","Ethiopia",
"Falkland Islands","Faroe Islands","Fiji","Finland","France",
"French Polynesia","French West Indies","Gabon","Gambia",
"Georgia","Germany","Ghana","Gibraltar","Greece","Greenland",
"Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau",
"Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India",
"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy",
"Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait",
"Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia",
"Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia",
"Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania",
"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat",
"Morocco","Mozambique","Namibia","Nepal","Netherlands",
"Netherlands Antilles","New Caledonia","New Zealand","Nicaragua",
"Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama",
"Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda",
"Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite",
"Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone",
"Singapore","Slovakia","Slovenia","South Africa",
"South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia",
"St Vincent","St. Lucia","Sudan","Suriname","Swaziland",
"Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
"Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia",
"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine",
"United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela",
"Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
];


// start email checker
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
//end email_checker

//page loader
 $(document).ready(function(){
      $('#wrap-loader').fadeOut(2000,function(){
        $( this ).remove();
      });
    });
// end page loader

// ---------------------CHAT BOX JS------------------------
$(".chat-div-messages").animate({ scrollTop: $(document).height() }, "slow");

var userName;
            
function newMessage() {
    let message = $(".chat-div .message-input input").val();
    let num = $('.chat-div-header .user-num').text();
    if($.trim(message) == '') {
        return false;
    }
    let d = new Date();
        let dd = d.getDate();
        let mm = d.getMonth() + 1;
        let yy = d.getFullYear();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let dis = dd+'-'+mm+'-'+yy+ ' '+min+':'+sec;
    $(`<div class="col-lg-12 sent"><p style="margin-bottom:0;">` + message +`</p><small style="font-size:10px; color: wheat; float: right">
            <span style="font-size:8px; color: white">
                `+dis+`
            </span>
            Delivered
        </small></div>`).appendTo($('.chat-div-messages'));
    $('.message-input input').val(null);
    $(".chat-div-messages").animate({ scrollTop: $(document).height() }, 1500);

    let data = [];
    let test = JSON.parse( localStorage.getItem(num));
    if(test){
      data = JSON.parse( localStorage.getItem(num));
    }
    var meseg_id = Math.random();
var list  = 
    {
      meseg_id: meseg_id,
   content: message,
   time: dis
   }
   ;
   data.push(list);
  //  data.pop();
   console.log(data);
localStorage.setItem(num,JSON.stringify(data));

};

  function get_num(){
    let num  = $(".chat-div-num .message-input input").val();
    userName = $(".chat-div-num .message-input input").val();
    if($.trim(num) == '') {
      return false;
    }
    $('.user-num').text(num);
    $('.chat-div').css('display','inline-block');
    $('.chat-div-num').css('display','none');
    
    let data = [];
    data = JSON.parse( localStorage.getItem('sent_3'));
    if(data){
      console.log('available')
    }
  }

$('.submit').click(function() {
  newMessage();
});

$('.submit-num').click(function(){
  get_num();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});
// --------------------------CHAT BOX ENDS JS HERE---------------

//welcome note animation

function animate_text(text_val){
  
var text, index, el, first_text;
el = document.getElementById('animate_text');
text = text_val;
first_text = el.innerText;
index = 0;

setInterval(function(){
    el.innerHTML = el.innerHTML + text[index];
    index = index + 1;
    if(index>text.length){
        index=0;
        el.innerHTML = first_text;
    } 
},200)
}

// read more function

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}