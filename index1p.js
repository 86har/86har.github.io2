console.log("connection to index from javascript \n 最終更新 2月22日");

document.getElementById("js_make_button").addEventListener('mouseout', () => {
    document.getElementById("js_make_button").className="make_button_beffor";
});
document.getElementById("js_make_button").addEventListener('mouseover', () => {
    document.getElementById("js_make_button").className="make_button_affter";
});


document.getElementById("js_make_ok").addEventListener('mouseout', () => {
    document.getElementById("js_make_ok").className="make_ok_beffor";
});
document.getElementById("js_make_ok").addEventListener('mouseover', () => {
    document.getElementById("js_make_ok").className="make_ok_affter";
});


document.getElementById("js_make_no").addEventListener('mouseout', () => {
    document.getElementById("js_make_no").className="make_no_beffor";
});
document.getElementById("js_make_no").addEventListener('mouseover', () => {
    document.getElementById("js_make_no").className="make_no_affter";
});

document.getElementById("js_delete_btn").addEventListener('mouseout', () => {
    document.getElementById("js_delete_btn").className="make_delete_beffor";
});
document.getElementById("js_delete_btn").addEventListener('mouseover', () => {
    document.getElementById("js_delete_btn").className="make_delete_affter";
});

document.getElementById("js_cansel_btn").addEventListener('mouseout', () => {
    document.getElementById("js_cansel_btn").className="make_cansel_beffor";
});
document.getElementById("js_cansel_btn").addEventListener('mouseover', () => {
    document.getElementById("js_cansel_btn").className="make_cansel_affter";
});

document.getElementById("js_make_button").onclick = function (){
    document.getElementById("js_make_button").style.display="none"
    document.getElementById("js_make_button").className="make_button_push";
    setTimeout( 'document.getElementById("js_make_button").className="make_button_beffor"', 100);
    document.getElementById("js_makes").style.display = "";
		// document.getElementById("(ここにIdを入力する)").onclick = function() {(ここに実行命令を入力する)}
}

document.getElementById("js_make_no").onclick = function() {
    document.getElementById("js_makes").style.display="none";
    document.getElementById("js_make_button").style.display="";
    document.getElementById("js_make_input").value="";
}



document.getElementById("js_delete_btn").onclick = function(){
    let result = confirm("リセットしますか？\n(リセットされた内容は復元できません)");
    if(result){
        location.href = "" ;
    }
}

document.getElementById("js_make_ok").onclick = function() {
    console.log("button click ok")
    if(document.getElementById("js_make_input").value==""){
        alert("チェックリストの内容が空欄です。\n内容を入力して下さい。")
    }else{
        console.log("1ok")
        if(document.getElementById("js_check_1").textContent=="undefind"){
            document.getElementById("js_delete_btn").style.display="";
            document.getElementById("js_table").style.display="";
            console.log("test1ok");
            document.getElementById("js_checks_1").style.visibility="visible";
            document.getElementById("js_check_1").innerText=document.getElementById("js_make_input").value;
            document.getElementById("js_make_input").value="";
            }else if(document.getElementById("js_check_2").innerText=="undefind"){
                console.log("test2ok")
                document.getElementById("js_checks_2").style.display="";
                document.getElementById("js_check_2").innerText=document.getElementById("js_make_input").value;
                document.getElementById("js_make_input").value="";
                }else if(document.getElementById("js_check_3").innerText=="undefind"){
                    console.log("test3ok")
                    document.getElementById("js_checks_3").style.display="";
                    document.getElementById("js_check_3").innerText=document.getElementById("js_make_input").value;
                    document.getElementById("js_make_input").value="";
                    }else if(document.getElementById("js_check_4").innerText=="undefind"){
                        console.log("test4ok")
                        document.getElementById("js_checks_4").style.display="";
                        document.getElementById("js_check_4").innerText=document.getElementById("js_make_input").value;
                        document.getElementById("js_make_input").value="";
                        }else if(document.getElementById("js_check_5").innerText=="undefind"){
                            console.log("test5ok")
                            document.getElementById("js_checks_5").style.display="";
                            document.getElementById("js_check_5").innerText=document.getElementById("js_make_input").value;
                            document.getElementById("js_make_input").value="";
                            }else if(document.getElementById("js_check_6").innerText=="undefind"){
                                console.log("test6ok")
                                document.getElementById("js_checks_6").style.display="";
                                document.getElementById("js_check_6").innerText=document.getElementById("js_make_input").value;
                                document.getElementById("js_make_input").value="";
                                }else if(document.getElementById("js_check_7").innerText=="undefind"){
                                    console.log("test7ok")
                                    document.getElementById("js_checks_7").style.display="";
                                    document.getElementById("js_check_7").innerText=document.getElementById("js_make_input").value;
                                    document.getElementById("js_make_input").value="";
                                    }else if(document.getElementById("js_check_8").innerText=="undefind"){
                                        console.log("test8ok")
                                        document.getElementById("js_checks_8").style.display="";
                                        document.getElementById("js_check_8").innerText=document.getElementById("js_make_input").value;
                                        document.getElementById("js_make_input").value="";
                                        }else if(document.getElementById("js_check_9").innerText=="undefind"){
                                            console.log("test9ok")
                                            document.getElementById("js_checks_9").style.display="";
                                            document.getElementById("js_check_9").innerText=document.getElementById("js_make_input").value;
                                            document.getElementById("js_make_input").value="";
                                            }else if(document.getElementById("js_check_10").innerText=="undefind"){
                                                console.log("test10ok")
                                                document.getElementById("js_checks_10").style.display="";
                                                document.getElementById("js_check_10").innerText=document.getElementById("js_make_input").value;
                                                document.getElementById("js_make_input").value="";
                                                }else{
                                                    confirm("これ以上追加するには項目を削除してください")
                                                }
                                            }
                                        }

