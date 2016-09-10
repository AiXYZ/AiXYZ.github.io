//gregorian to hijri
function intPart(floatNum){
	if (floatNum< -0.0000001){
		 return Math.ceil(floatNum-0.0000001);
		}
	return Math.floor(floatNum+0.0000001);	
}				

d=parseInt(gregorianDateFromtextBox[0],10);
m=parseInt(gregorianDateFromtextBox[1],10);
y=parseInt(gregorianDateFromtextBox[2],10);

if ((y>1582)||((y==1582)&&(m>10))||((y==1582)&&(m==10)&&(d>14))){
	jd=intPart((1461*(y+4800+intPart((m-14)/12)))/4)+intPart((367*(m-2-12*(intPart((m-14)/12))))/12)-intPart( (3* (intPart(  (y+4900+    intPart( (m-14)/12)     )/100)    )   ) /4)+d-32075;
}else{
	jd = 367*y-intPart((7*(y+5001+intPart((m-9)/7)))/4)+intPart((275*m)/9)+d+1729777;
}

l=jd-1948440+10632;
n=intPart((l-1)/10631);
l=l-10631*n+354;
j=(intPart((10985-l)/5316))*(intPart((50*l)/17719))+(intPart(l/5670))*(intPart((43*l)/15238));
l=l-(intPart((30-j)/15))*(intPart((17719*j)/50))-(intPart(j/16))*(intPart((15238*j)/43))+29;
m=intPart((24*l)/709);
d=l-intPart((709*m)/24);
y=30*n+j-30;

var outputHijriDate = d + "/" + m + "/" + y;
