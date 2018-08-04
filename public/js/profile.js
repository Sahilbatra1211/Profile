
$(function(){

    let top=$('#lin');
    let btn1=$('#btn1');
    let input=$('.input');
    let btn2=$('#btn2');
    let btn3=$('#btn3');
    let btn4=$('#btn4');
    let btn5=$('#btn5');
    let btn6=$('#btn6');
    let btn7=$('#btn7');
    let btn8=$('#btn8');
    let btn9=$('#btn9');
    let btn10=$('#btn10');
    let btn11=$('#btn11');
    let btn12=$('#btn12');

    let nav1=$('#v-pills-home-tab');
    let nav2=$('#v-pills-profile-tab');
    let nav3=$('#v-pills-messages-tab');
    let nav4=$('#v-pills-settings-tab ');
    let nav5=$('#v-pills-home2-tab');
    let nav6=$('#v-pills-profile2-tab');
    let nav7=$('#v-pills-messages2-tab');
    let remove=$('.remive');
    let text=$('.inpi');
    let p1=$('.p1');
    let p2=$('.p2');
    let img=$('#imgInp');



            btn10.click(function(){
                remove.remove();
                $.post(
                    '/auth/',
                    { value1:value1,
                        value2:value2,
                        value3:value3,
                        value4:value4,
                        value5:value5,
                        value6:value6,
                        value7:value7,
                        value8:value8,
                        value9:value9,
                        value10:value10},
                    function (data) {
                        console.log(data);


                    }
                )
            });






    btn1.click(function(){
        console.log("sahil");
        top.empty();
    });
    let value1,value2,value3,value4,value5,value6,value7,value8,value9,value10;

    btn2.click(function(){
        value1=input.val();
        console.log();
        top.text(value1);
        input.val(" ");
    })

    btn3.click(function(){
        value2=input.val();
        nav1.empty();
        nav1.text(value2);
        input.val("");
    })
    btn4.click(function(){
        value3=input.val();

        nav2.empty();
        nav2.text(value3);
        input.val("");
    })
    btn5.click(function(){
        value4=input.val();

        nav3.empty();
        nav3.text(value4);
        input.val("");
    })
    btn6.click(function(){
        value5=input.val();

        nav4.empty();
        nav4.text(value5);
        input.val("");
    })
    btn7.click(function(){
        value6=input.val();

        nav5.empty();
        nav5.text(value6);
        input.val("");
    })
    btn8.click(function(){
        value7=input.val();

        nav6.empty();
        nav6.text(value7);
        input.val("");
    })
    btn9.click(function(){
        value8=input.val();

        nav7.empty();
        nav7.text(value8);
        input.val("");
    })


    btn11.click(function(){

        value9=text.val();

        p1.empty();
        p1.text(value9);
        text.val(" ");
    })
    btn12.click(function(){

        value10=text.val();

        p2.empty();
        p2.text(value10);
        text.val(" ");
    })



});