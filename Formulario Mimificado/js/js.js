var formElement=null,respuestaText1=null,respuestaText2=null,respuestaSelect=null,respuestaSelect1=null,respuestaSelectMultiple1=[],respuestaSelectMultiple2=[],respuestasCheckbox=[],respuestasCheckbox1=[],respuestasRadio=[],respuestasRadio1=[],respuestaRadio=null,respuestaSelectMultipleProfe=(respuestaText1=null,[]),nota=0;window.onload=function(){var e=1,t=10;setInterval(function(){document.getElementById("timer").innerHTML=e<10?"00:0"+t+":0"+e:"00:0"+t+":"+e,0==--e&&(t--,e=59),0==t&&1==e&&(document.getElementById("timer").innerHTML="Tiempo límite alcanzado",alert("Ups,se te ha acabado el tiempo.")),t<=-1&&(document.getElementById("timer").innerHTML=" ")},1e3),(formElement=document.getElementById("myform")).onsubmit=function(){return inicializar(),corregirText(),corregirText1(),corregirSelect(),corregirSelect1(),corregirMultiple1(),corregirMultiple2(),corregirCheckbox(),corregirCheckbox1(),corregirRadio(),corregirRadio1(),presentarNota(),!1}};var url="https://rawgit.com/mangel2500/Formulario/master/json.json",xhttp=new XMLHttpRequest;function gestionarJson(e){for(var t=JSON.parse(e),n=0;n<10;n++)document.getElementsByTagName("h2")[n].innerHTML=t.questions.question[n].title;respuestaText1=t.questions.question[0].answer,respuestaText2=t.questions.question[1].answer;var o=document.getElementsByTagName("select")[0],s=t.questions.question[2].option.length;for(n=0;n<s;n++){(c=document.createElement("option")).value=n+1,c.text=t.questions.question[2].option[n],o.appendChild(c)}respuestaSelect1=t.questions.question[2].answer;for(o=document.getElementsByTagName("select")[1],s=t.questions.question[3].option.length,n=0;n<s;n++){(c=document.createElement("option")).value=n+1,c.text=t.questions.question[3].option[n],o.appendChild(c)}respuestaSelect2=t.questions.question[3].answer;for(o=document.getElementsByTagName("select")[2],s=t.questions.question[4].option.length,n=0;n<s;n++){(c=document.createElement("option")).value=n+1,c.text=t.questions.question[4].option[n],o.appendChild(c)}for(o=document.getElementsByTagName("select")[3],s=t.questions.question[5].option.length,n=0;n<s;n++){(c=document.createElement("option")).value=n+1,c.text=t.questions.question[5].option[n],o.appendChild(c)}for(var r=t.questions.question[7].option.length,i=document.getElementsByClassName("checkbox")[0],a=0;a<r;a++){var l=document.createElement("input");(p=document.createElement("label")).innerHTML=t.questions.question[6].option[a],p.setAttribute("for","r7."+a),l.type="checkbox",l.name="respuesta7",l.id="r7."+a,i.appendChild(l),i.appendChild(p),i.appendChild(document.createElement("br"))}for(r=t.questions.question[7].option.length,i=document.getElementsByClassName("checkbox")[1],a=0;a<r;a++){l=document.createElement("input");(p=document.createElement("label")).innerHTML=t.questions.question[7].option[a],p.setAttribute("for","r8."+a),l.type="checkbox",l.name="respuesta8",l.id="r8."+a,i.appendChild(l),i.appendChild(p),i.appendChild(document.createElement("br"))}var u=document.getElementsByClassName("radio")[0];for(s=t.questions.question[8].option.length,n=0;n<s;n++){var c=document.createElement("input");(p=document.createElement("label")).innerHTML=t.questions.question[8].option[n],c.setAttribute("type","radio"),c.setAttribute("name","asd"),c.value=n+1,c.text=t.questions.question[2].option[n],u.appendChild(c),u.appendChild(p)}for(u=document.getElementsByClassName("radio")[1],s=t.questions.question[9].option.length,n=0;n<s;n++){var p;c=document.createElement("input");(p=document.createElement("label")).innerHTML=t.questions.question[9].option[n],c.setAttribute("type","radio"),c.setAttribute("name","zxc"),c.value=n+1,c.text=t.questions.question[2].option[n],u.appendChild(c),u.appendChild(p)}}function corregirText(){formElement.elements[0].value==respuestaText1?(darRespuestaHtml("P1: CORRECTA"),nota+=1):darRespuestaHtml("P1: INCORRECTA")}function corregirText1(){formElement.elements[1].value.toUpperCase()==respuestaText2?(darRespuestaHtml("P2: CORRECTA"),nota+=1):darRespuestaHtml("P2: INCORRECTA")}function corregirSelect(){formElement.elements[2].selectedIndex==respuestaSelect1?(darRespuestaHtml("P3: CORRECTA"),nota+=1):darRespuestaHtml("P3: INCORRECTA")}function corregirSelect1(){formElement.elements[3].selectedIndex==respuestaSelect2?(darRespuestaHtml("P4: CORRECTA"),nota+=1):darRespuestaHtml("P4: INCORRECTA,")}function corregirCheckbox(){var e=formElement,t=0,n=[];for(i=0;i<e.respuesta7.length;i++)if(e.respuesta7[i].checked){for(n[i]=!1,j=0;j<respuestasCheckbox.length;j++)i==respuestasCheckbox[j]&&(n[i]=!0);n[i]?(nota+=1/respuestasCheckbox.length,t++):nota-=1/respuestasCheckbox.length}darRespuestaHtml(2==t?"P5: CORRECTA":"P5: INCORRECTA")}function corregirCheckbox1(){var e=formElement,t=0,n=[];for(i=0;i<e.respuesta8.length;i++)if(e.respuesta8[i].checked){for(n[i]=!1,j=0;j<respuestasCheckbox1.length;j++)i==respuestasCheckbox1[j]&&(n[i]=!0);n[i]?(nota+=1/respuestasCheckbox1.length,t++):nota-=1/respuestasCheckbox1.length}darRespuestaHtml(2==t?"P6: CORRECTA":"P6: INCORRECTA, la respuesta correcta es [1.500€] y [1583$]")}function corregirMultiple1(){var e=formElement.elements[4],t=[],n=0,o=0;for(i=0;i<e.length;i++)e[i].selected&&(t[n]=e[i].value,n+=1);for(i=0;i<respuestaSelectMultiple1.length;i++)t[i]-1==respuestaSelectMultiple1[i]&&(o+=1);o==respuestaSelectMultiple1.length?(darRespuestaHtml("P5: Correcto"),nota+=1):darRespuestaHtml("P5: Incorrecto")}function corregirMultiple2(){var e=formElement.elements[5],t=[],n=0,o=0;for(i=0;i<e.length;i++)e[i].selected&&(t[n]=e[i].value,n+=1);for(i=0;i<respuestaSelectMultiple2.length;i++)t[i]-1==respuestaSelectMultiple2[i]&&(o+=1);o==respuestaSelectMultiple2.length?(darRespuestaHtml("P6: Correcto"),nota+=1):darRespuestaHtml("P6: Incorrecto")}function corregirRadio(){var e=formElement;for(i=0;i<e.asd.length;i++)e.asd[i].checked?(i,darRespuestaHtml1("P9: CORRECTA"),nota+=1):darRespuestaHtml("P9: INCORRECTA,")}function corregirRadio1(){var e=formElement;for(i=0;i<e.zxc.length;i++)e.zxc[i].checked?(i,darRespuestaHtml("P10: CORRECTA"),nota+=1):darRespuestaHtml("P10: INCORRECTA,")}function inicializar(){document.getElementById("notaFinal").innerHTML="",nota=0}function darRespuestaHtml(e){var t=document.createElement("p"),n=document.createTextNode(e);t.appendChild(n),document.getElementById("notaFinal").appendChild(t)}function presentarNota(){document.getElementById("notaFinal").innerHTML="Nota: "+nota.toFixed(2)+" puntos sobre 10"}xhttp.onreadystatechange=function(){4==this.readyState&&200==this.status&&gestionarJson(this.responseText)},xhttp.open("GET",url,!0),xhttp.send();var formElement=null,respuestaText1=null,respuestaText2=null,respuestaSelect=null,respuestaSelect1=null,respuestaSelectMultiple1=[],respuestaSelectMultiple2=[],respuestasCheckbox=[],respuestasCheckbox1=[],respuestasRadio=[],respuestasRadio1=[],respuestaRadio=null,respuestaSelectMultipleProfe=(respuestaText1=null,[]),nota=0;window.onload=function(){var e=1,t=10;setInterval(function(){document.getElementById("timer").innerHTML=e<10?"00:0"+t+":0"+e:"00:0"+t+":"+e,0==--e&&(t--,e=59),0==t&&1==e&&(document.getElementById("timer").innerHTML="Tiempo límite alcanzado",alert("Ups,se te ha acabado el tiempo.")),t<=-1&&(document.getElementById("timer").innerHTML=" ")},1e3),(formElement=document.getElementById("myform")).onsubmit=function(){return inicializar(),corregirText(),corregirText1(),corregirSelect(),corregirSelect1(),corregirMultiple1(),corregirMultiple2(),corregirCheckbox(),corregirCheckbox1(),corregirRadio(),corregirRadio1(),presentarNota(),!1}};var url="https://rawgit.com/mangel2500/Formulario/master/json.json",xhttp=new XMLHttpRequest;function gestionarJson(e){for(var t=JSON.parse(e),n=0;n<10;n++)document.getElementsByTagName("h2")[n].innerHTML=t.questions.question[n].title;respuestaText1=t.questions.question[0].answer,respuestaText2=t.questions.question[1].answer;var o=document.getElementsByTagName("select")[0],s=t.questions.question[2].option.length;for(n=0;n<s;n++){(c=document.createElement("option")).value=n+1,c.text=t.questions.question[2].option[n],o.appendChild(c)}respuestaSelect1=t.questions.question[2].answer;for(o=document.getElementsByTagName("select")[1],s=t.questions.question[3].option.length,n=0;n<s;n++){(c=document.createElement("option")).value=n+1,c.text=t.questions.question[3].option[n],o.appendChild(c)}respuestaSelect2=t.questions.question[3].answer;for(o=document.getElementsByTagName("select")[2],s=t.questions.question[4].option.length,n=0;n<s;n++){(c=document.createElement("option")).value=n+1,c.text=t.questions.question[4].option[n],o.appendChild(c)}for(o=document.getElementsByTagName("select")[3],s=t.questions.question[5].option.length,n=0;n<s;n++){(c=document.createElement("option")).value=n+1,c.text=t.questions.question[5].option[n],o.appendChild(c)}for(var r=t.questions.question[7].option.length,i=document.getElementsByClassName("checkbox")[0],a=0;a<r;a++){var l=document.createElement("input");(p=document.createElement("label")).innerHTML=t.questions.question[6].option[a],p.setAttribute("for","r7."+a),l.type="checkbox",l.name="respuesta7",l.id="r7."+a,i.appendChild(l),i.appendChild(p),i.appendChild(document.createElement("br"))}for(r=t.questions.question[7].option.length,i=document.getElementsByClassName("checkbox")[1],a=0;a<r;a++){l=document.createElement("input");(p=document.createElement("label")).innerHTML=t.questions.question[7].option[a],p.setAttribute("for","r8."+a),l.type="checkbox",l.name="respuesta8",l.id="r8."+a,i.appendChild(l),i.appendChild(p),i.appendChild(document.createElement("br"))}var u=document.getElementsByClassName("radio")[0];for(s=t.questions.question[8].option.length,n=0;n<s;n++){var c=document.createElement("input");(p=document.createElement("label")).innerHTML=t.questions.question[8].option[n],c.setAttribute("type","radio"),c.setAttribute("name","asd"),c.value=n+1,c.text=t.questions.question[2].option[n],u.appendChild(c),u.appendChild(p)}for(u=document.getElementsByClassName("radio")[1],s=t.questions.question[9].option.length,n=0;n<s;n++){var p;c=document.createElement("input");(p=document.createElement("label")).innerHTML=t.questions.question[9].option[n],c.setAttribute("type","radio"),c.setAttribute("name","zxc"),c.value=n+1,c.text=t.questions.question[2].option[n],u.appendChild(c),u.appendChild(p)}}function corregirText(){formElement.elements[0].value==respuestaText1?(darRespuestaHtml("P1: CORRECTA"),nota+=1):darRespuestaHtml("P1: INCORRECTA")}function corregirText1(){formElement.elements[1].value.toUpperCase()==respuestaText2?(darRespuestaHtml("P2: CORRECTA"),nota+=1):darRespuestaHtml("P2: INCORRECTA")}function corregirSelect(){formElement.elements[2].selectedIndex==respuestaSelect1?(darRespuestaHtml("P3: CORRECTA"),nota+=1):darRespuestaHtml("P3: INCORRECTA")}function corregirSelect1(){formElement.elements[3].selectedIndex==respuestaSelect2?(darRespuestaHtml("P4: CORRECTA"),nota+=1):darRespuestaHtml("P4: INCORRECTA,")}function corregirCheckbox(){var e=formElement,t=0,n=[];for(i=0;i<e.respuesta7.length;i++)if(e.respuesta7[i].checked){for(n[i]=!1,j=0;j<respuestasCheckbox.length;j++)i==respuestasCheckbox[j]&&(n[i]=!0);n[i]?(nota+=1/respuestasCheckbox.length,t++):nota-=1/respuestasCheckbox.length}darRespuestaHtml(2==t?"P5: CORRECTA":"P5: INCORRECTA")}function corregirCheckbox1(){var e=formElement,t=0,n=[];for(i=0;i<e.respuesta8.length;i++)if(e.respuesta8[i].checked){for(n[i]=!1,j=0;j<respuestasCheckbox1.length;j++)i==respuestasCheckbox1[j]&&(n[i]=!0);n[i]?(nota+=1/respuestasCheckbox1.length,t++):nota-=1/respuestasCheckbox1.length}darRespuestaHtml(2==t?"P6: CORRECTA":"P6: INCORRECTA, la respuesta correcta es [1.500€] y [1583$]")}function corregirMultiple1(){var e=formElement.elements[4],t=[],n=0,o=0;for(i=0;i<e.length;i++)e[i].selected&&(t[n]=e[i].value,n+=1);for(i=0;i<respuestaSelectMultiple1.length;i++)t[i]-1==respuestaSelectMultiple1[i]&&(o+=1);o==respuestaSelectMultiple1.length?(darRespuestaHtml("P5: Correcto"),nota+=1):darRespuestaHtml("P5: Incorrecto")}function corregirMultiple2(){var e=formElement.elements[5],t=[],n=0,o=0;for(i=0;i<e.length;i++)e[i].selected&&(t[n]=e[i].value,n+=1);for(i=0;i<respuestaSelectMultiple2.length;i++)t[i]-1==respuestaSelectMultiple2[i]&&(o+=1);o==respuestaSelectMultiple2.length?(darRespuestaHtml("P6: Correcto"),nota+=1):darRespuestaHtml("P6: Incorrecto")}function corregirRadio(){var e=formElement;for(i=0;i<e.asd.length;i++)e.asd[i].checked?(i,darRespuestaHtml1("P9: CORRECTA"),nota+=1):darRespuestaHtml("P9: INCORRECTA,")}function corregirRadio1(){var e=formElement;for(i=0;i<e.zxc.length;i++)e.zxc[i].checked?(i,darRespuestaHtml("P10: CORRECTA"),nota+=1):darRespuestaHtml("P10: INCORRECTA,")}function inicializar(){document.getElementById("notaFinal").innerHTML="",nota=0}function darRespuestaHtml(e){var t=document.createElement("p"),n=document.createTextNode(e);t.appendChild(n),document.getElementById("notaFinal").appendChild(t)}function presentarNota(){document.getElementById("notaFinal").innerHTML="Nota: "+nota.toFixed(2)+" puntos sobre 10"}xhttp.onreadystatechange=function(){4==this.readyState&&200==this.status&&gestionarJson(this.responseText)},xhttp.open("GET",url,!0),xhttp.send();