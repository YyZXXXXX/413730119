let angle = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0) 
  angleMode(DEGREES) //設定使用到角度，採用數字的方式0~360
  frameRate (10) //進入draw的函數，每秒執行10次就好(速度變慢)
}

function draw() { //開始畫圖，每秒會進入draw()會執行60次
  background(0);
  translate(width/2,height/2)//設定原點(0,0)在視窗的中心
  //視窗的中心點畫一個600*600的方形，框線為白色，不填滿顏色
  noFill()
  stroke(255) //框線為白色
  rectMode(CENTER) //設定方形的中心點為座標點
 // rotate(sin(angle)*40)
  //rect(0,0,600,600,100)
  //let r = random(50,255) //抽一個亂數，亂數的值會介於50(包含)~~255(不包含)間 顏色
  //let g = random(50,255) //抽一個亂數，亂數的值會介於50(包含)~~255(不包含)間
  //let b = random(50,255) //抽一個亂數，亂數的值會介於50(包含)~~255(不包含)間
  let r = map(sin(frameCount),-1,1,50,255) //對應，sin的值介於-1~1之間              
  let g = map(sin(frameCount/2),-1,1,50,255)//對應
  let b = map(sin(frameCount/4),-1,1,50,255)
 stroke(r,g,b)
  for(let i=0;i<200;i=i+1){
    rotate(sin(angle-i*2)*5) //三角函數sin的值介於-1~1間，*40之後，旋轉角度介於-40~40間
  rect (0,0,600-i*3,600-i*3,100)
}
  angle = angle+10
  
}
