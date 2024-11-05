let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r =10


  font = loadFont("RubikWetPaint-Regular.ttf") 


function setup() { //設定初始內容，只會執行一次
  createCanvas(windowWidth, windowHeight); //產生一個畫布
  background("#fdfcdc") //設定背景顏色
  angleMode(DEGREES)//設定三角函數的角度用0~360
}

points = font.textToPoints("aespa", -300, 80, 200, {
  sampleFactor:0.1
});
 
function draw() { //畫圖，每秒會畫60次
  //background(220); //灰白色(0黑~255白)
  background("#fdfcdc")
  rectMode(CENTER) //設定方形的座標點放在方形中間
  noFill() //以下所畫的物件，不要充滿顏色
  stroke("#f08080") //框線顏色
  strokeWeight(5) //框線的粗細
  //宣告變數
  var rect_width = 50 +mouseX/10 //方形的寬度
  var bc_width = 50 +mouseY/10  //大圓的寬度
  var sc_width =25 +mouseX/25   //小圓的寬度
  //for迴圈
  //i=0: i為變數，要i從0開始(設定i的初始值)
  //i<20:條件判斷，當條件成立時，就繼續進到迴圈內的程式碼執行
  //i=i+1 :i值每次改變的差距值，當回圈內程式碼執行一次完畢後，1值會自動+1
  for(let j=0;j<20;j=j+1){ //產生第幾排，共20排
   for(let i=0;i<40;i=i+1){ //產生一整排的物件(兩個圓加上一個方形)，每排有40圓物件
    if(i<5){ //第0~4排共5排設定的顏色
      stroke("#b5838d")
    }else if(i<10) { //第5~9排共五排設定的顏色
      stroke("#e5989b")
    }
    ellipse(25+50*i,25+50*j,bc_width) //座標(x軸,y軸,寬度,高度)
    rect(25+50*i,25+50*j,rect_width) //畫方形，在座標(x:25,y:25)畫一個直徑為50的方形
    ellipse(50+50*i,50+50*j,sc_width)//畫小圓
  }
 }  
 translate(width/2,height/2)  //把原本原點(0,0)在左上角，改為到畫布中心點(width/2-300,height/2-120)為原點(0,0)
 rotate((frameCount)%360) //依照framecount除以360求於數
  for (let i=0; i<points.length-1; i++) { 
  //text(str(i),points[i].x,points[i].y) //在(points[i].x,points[i].y)座標上，顯示一個文字(數字)
  //fill("#e0aaff")
  //noStroke()
  //strokeWeight(1)
  //ellipse(points[i].x+r*sin(angle+i*25),points[i].y+r*sin(angle+i*25),10)
  stroke("#f4acb7") //條線的顏色
  strokeWeight(5) //線條的粗細
  line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*25),points[i+1].x+r*sin(angle+i*25),points[i+1].y) //畫線，兩個點構成一條線
  //畫線，兩個點第一個點(points[i].x,points[i].y)，第二個點(point{i+1.x,points[i+1].y)
 } 
 angle = angle+10
}