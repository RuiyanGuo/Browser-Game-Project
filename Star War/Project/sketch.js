new p5();


//颜色
var c1=Math.floor(Math.random()*500)
var c2=Math.floor(Math.random()*500)
var c3=Math.floor(Math.random()*500)

var c4=Math.floor(Math.random()*500)
var c5=Math.floor(Math.random()*500)
var c6=Math.floor(Math.random()*500)

var c7=Math.floor(Math.random()*500)
var c8=Math.floor(Math.random()*500)
var c9=Math.floor(Math.random()*500)

//球1小 数字位置
//var num1=Math.floor(Math.random()*10+1)
//var num2=Math.floor(Math.random()*30+1)
//球1小
var x=Math.floor(Math.random()*560+20)
var y=20
var w=Math.floor(Math.random()*5+1)//动态控制
var m=Math.floor(Math.random()*5+1)//动态控制

var x2=Math.floor(Math.random()*560+20)
var y2=20
var w2=Math.floor(Math.random()*5+1)//动态控制
var m2=Math.floor(Math.random()*5+1)//动态控制

var x4=300
var y4=20
var w4=-5//动态控制
var m4=5//动态控制

var x3=20
var y3=20
var w3=5//动态控制
var m3=5//动态控制

var x6=580
var y6=20
var w6=-5//动态控制
var m6=5//动态控制

var x5=Math.floor(Math.random()*560+20)
var y5=20
var w5=Math.floor(Math.random()*5+1)//动态控制
var m5=Math.floor(Math.random()*5+1)//动态控制

//球2大
//var q=80
//var w=80
//check
var tnt=false
var tnt2=false
var tnt4=false
//var cld1=false
//var cld2=false
//
var xc=301//飞机球坐标
var yc=573.5//飞机的坐标
//炮弹
var num=0
var tf1=false
var ax=[301,301,301,301,301,301,301,301]
var ay=[573.5,573.5,573.5,573.5,573.5,573.5,573.5,573.5]
var shoot=[false,false,false,false,false,false,false,false]
var cld=[false,false,false,false,false,false,false,false]
//炮弹结束
//new
var n=301
var e=100

var sum=0
var root=false











function setup() {
    createCanvas(600, 750);
//      frameRate(30)
                 }



function draw(){
  	            background(255 , 204, 204 );

//                flypac2()
if(root==true)
{
               textSize(30)
               text(sum,540,40)


if((Math.abs(xc-x)<=32.5&&Math.abs(yc-y)<=32.5)||(Math.abs(xc-x2)<=32.5&&Math.abs(yc-y2)<=32.5)||(Math.abs(xc-x3)<=32.5&&Math.abs(yc-y3)<=32.5)||(Math.abs(xc-x4)<=32.5&&Math.abs(yc-y4)<=32.5)||(Math.abs(xc-x5)<=32.5&&Math.abs(yc-y5)<=32.5)||(Math.abs(xc-x6)<=32.5&&Math.abs(yc-y6)<=32.5))
  {
    text("Game Over",210,210)
  }

else {


                drawpac()
                flypac()
                flypac2()
                flypac4()
                flypac3()//black
               flypac5()//black
//                flypac6()//black



    }

if(!((Math.abs(xc-x)<=32.5&&Math.abs(yc-y)<=32.5)||(Math.abs(xc-x2)<=32.5&&Math.abs(yc-y2)<=32.5)||(Math.abs(xc-x3)<=32.5&&Math.abs(yc-y3)<=32.5)||(Math.abs(xc-x4)<=32.5&&Math.abs(yc-y4)<=32.5)||(Math.abs(xc-x5)<=32.5&&Math.abs(yc-y5)<=32.5)||(Math.abs(xc-x6)<=32.5&&Math.abs(yc-y6)<=32.5)))
{
if(xc>45&&xc<555&&yc<673.5&&yc>12.5)
  {

                if (keyIsDown(87)) {               //w上
                  sameposition()

                 yc=yc-10;
               } else if (keyIsDown(83)) {          //s下
                 sameposition()
                 yc=yc+10;
                }
                if (keyIsDown(65)) {                //A左
                  sameposition()
                 xc=xc-10;
               } else if (keyIsDown(68)) {          //D右
                 sameposition()
                 xc=xc+10;
                }
  }

else if(xc<=45)
       {
         if (keyIsDown(87)) {               //w上
           sameposition()

          yc=yc-10;
        } else if (keyIsDown(83)) {          //s下
          sameposition()
          yc=yc+10;
         }
         if (keyIsDown(65)) {                //A左
           sameposition()
          xc=45;
        } else if (keyIsDown(68)) {          //D右
          sameposition()
          xc=xc+10;
         }
       }

else if(xc>=555)
       {
         if (keyIsDown(87)) {               //w上
           sameposition()

          yc=yc-10;
        } else if (keyIsDown(83)) {          //s下
          sameposition()
          yc=yc+10;
         }
         if (keyIsDown(65)) {                //A左
           sameposition()
          xc=xc-10;
        } else if (keyIsDown(68)) {          //D右
          sameposition()
          xc=555
         }
       }
     if(yc>=673.5)
       {
         if (keyIsDown(87)) {               //w上
           sameposition()

          yc=yc-10;
        } else if (keyIsDown(83)) {          //s下
          sameposition()
          yc=673.5
         }
         if (keyIsDown(65)) {                //A左
           sameposition()
          xc=xc-10;
        } else if (keyIsDown(68)) {          //D右
          sameposition()
          xc=xc+10;
         }
       }
else if(yc<=12.5)
       {
         if (keyIsDown(87)) {               //w上
           sameposition()

          yc=12.5
        } else if (keyIsDown(83)) {          //s下
          sameposition()
          yc=yc+10;
         }
         if (keyIsDown(65)) {                //A左
           sameposition()
          xc=xc-10;
        } else if (keyIsDown(68)) {          //D右
          sameposition()
          xc=xc+10;
         }
       }

}






  //              num=keyCode;
                for(i=0;i<ax.length;i++)
                {
                if (keyIsDown(76))
                  {
                 shoot[i]=true
                  }
                }
              }
                }






function drawpac() {






//    fill(color(c3, c1, c2));
//   ellipse(q, w, 90, 90)
//   fill(color(0, 0, 0));
//   text(num2,q-5 ,w+4 )







fill(color(255, 0,0));
    ellipse(n,e,20,20)
//1
for(i=0;i<ax.length;i++)
{
  if((Math.abs(ax[i]-x)<=26&&Math.abs(ay[i]-y)<=26)||(Math.abs(ax[i]-x2)<=26&&Math.abs(ay[i]-y2)<=26)||(Math.abs(ax[i]-x4)<=26&&Math.abs(ay[i]-y4)<=26))
     {
       sum=sum+1
       cld[i]=true
     }

  if((Math.abs(ax[i]-x)<=26&&Math.abs(ay[i]-y)<=26))
   {
     tnt=true
   }
  if((Math.abs(ax[i]-x2)<=26&&Math.abs(ay[i]-y2)<=26))
   {
     tnt2=true
   }
  if((Math.abs(ax[i]-x4)<=26&&Math.abs(ay[i]-y4)<=26))
   {
     tnt4=true
   }



    if(cld[i]==false)
  	{ellipse(ax[i], ay[i], 10, 10)}

}
/*
for(i=0;i<ax.length;i++)
{
if(Math.abs(ax[i]-x)<=25&&Math.abs(ay[i]-y)<=25)
   {cld[i]=true

   }
}
*/
//2
for(i=0;i<ax.length;i++)
{
if((shoot[i]==true))
{ay[i]-=parseInt(Math.round(10-0.8*i))}
}

//3炮弹
for(i=0;i<ax.length;i++)
{
if(ay[i]<=-5||(Math.abs(ax[i]-x)<=26&&Math.abs(ay[i]-y)<=26)||(Math.abs(ax[i]-x2)<=26&&Math.abs(ay[i]-y2)<=26)||(Math.abs(ax[i]-x4)<=26&&Math.abs(ay[i]-y4)<=26))
  { shoot[i]=false
    //text(shoot[i],300,200)
      cld[i]=false
  }
if(shoot[i]==false)
  {
     sameposition()
  }

           }

    //       for(i=0;i<ax.length;i++)
    //       {
    //         if((Math.abs(ax[i]-x)<=25&&Math.abs(ay[i]-y)<=25))
    //         {tnt=true}
    //       }



ellipse(xc ,yc ,25 ,25 );

fill(color(102, 102, 51));
   strokeWeight(5);
   point(xc+15,yc+12.5);//1
   point(xc+45,yc+12.5);//2
   point(xc+45,yc+38.5);//3
   point(xc+8,yc+42.5);//4
   point(xc+8,yc+59.5)//4.25
   point(xc+26.5,yc+59.5)//4.5
   point(xc+24.5,yc+72.5)//5
   point(xc-1,yc+76.5)//5.5

   point(xc-28.5,yc+72.5)//6
   point(xc-30.5,yc+59.5)//6.5
   point(xc-12,yc+59.5)//6.75
   point(xc-12,yc+42.5)//7
   point(xc-45,yc+38.5)//8
   point(xc-45,yc+12.5)//9
   point(xc-15,yc+12.5)//10
   strokeWeight(2);

//   noFill();
   beginShape();
   curveVertex(xc+15,yc+12.5);//1
   curveVertex(xc+15,yc+12.5);
   curveVertex(xc+45,yc+12.5);//2
   curveVertex(xc+45,yc+12.5);
   curveVertex(xc+45,yc+38.5)//3
   curveVertex(xc+8,yc+42.5)//4
   curveVertex(xc+8,yc+59.5)//4.25
   curveVertex(xc+26.5,yc+59.5)//4.5
   curveVertex(xc+24.5,yc+72.5)//5
   curveVertex(xc-1,yc+76.5)//5.5

   curveVertex(xc-28.5,yc+72.5)//6
   curveVertex(xc-30.5,yc+59.5)//6.5
   curveVertex(xc-12,yc+59.5)//6.75
   curveVertex(xc-12,yc+42.5)//7
   curveVertex(xc-45,yc+38.5)//8
   curveVertex(xc-45,yc+12.5)//9
   curveVertex(xc-45,yc+12.5)//9

   curveVertex(xc-15,yc+12.5)//10
   curveVertex(xc-15,yc+12.5)
   curveVertex(xc+15,yc+12.5);//1
   curveVertex(xc+15,yc+12.5);


   endShape();


		}




    function flypac()
             {

               //球1小
               if((tnt==false))
                {
                  fill(color(c1, c2, c3));
                  ellipse(x ,y ,40 ,40 );
    //               fill(color(0, 0, 0));
    //               text(num1,x-3 ,y+3 )
                }


               if((tnt==true))
               {
                 tnt=false
                  c1=Math.floor(Math.random()*500)
                  c2=Math.floor(Math.random()*500)
                  c3=Math.floor(Math.random()*500)
                 //球1小 数字位置
    //              num1=Math.floor(Math.random()*10+1)
    //              num2=Math.floor(Math.random()*30+1)
                 //球1小
                  x=Math.floor(Math.random()*560+20)
                  y=20
                  w=Math.floor(Math.random()*5+1)//动态控制
                  m=Math.floor(Math.random()*5+1)//动态控制
               }



                   x=x+w
                   y=y+m
                   if((x==579)||(x==578)||(x==577)||(x==576)||(x==575))
                   {
                     w=-Math.floor(Math.random()*5+1)
                   }
                   if((x==21)||(x==22)||(x==23)||(x==24)||(x==25))
                   {
                     w=Math.floor(Math.random()*5+1)
                   }

                   if((y==21)||(y==22)||(y==23)||(y==24)||(y==25))
                   {
                     m=Math.floor(Math.random()*5+1)
                   }
                   if((y==729)||(y==728)||(y==727)||(y==726)||(y==725))
                   {
                     tnt=true
                   }

    }


    function flypac2()
             {

               //球1小
               if((tnt2==false))
                {
                  fill(color(c4, c5, c6));
                  ellipse(x2 ,y2 ,40 ,40 );
    //               fill(color(0, 0, 0));
    //               text(num1,x-3 ,y+3 )
                }


               if((tnt2==true))
               {
                 tnt2=false
                  c4=Math.floor(Math.random()*500)
                  c5=Math.floor(Math.random()*500)
                  c6=Math.floor(Math.random()*500)
                 //球1小 数字位置
    //              num1=Math.floor(Math.random()*10+1)
    //              num2=Math.floor(Math.random()*30+1)
                 //球1小
                  x2=Math.floor(Math.random()*560+20)
                  y2=20
                  w2=Math.floor(Math.random()*5+1)//动态控制
                  m2=Math.floor(Math.random()*5+1)//动态控制
               }



                   x2=x2+w2
                   y2=y2+m2
                   if((x2==579)||(x2==578)||(x2==577)||(x2==576)||(x2==575))
                   {
                     w2=-Math.floor(Math.random()*5+1)
                   }
                   if((x2==21)||(x2==22)||(x2==23)||(x2==24)||(x2==25))
                   {
                     w2=Math.floor(Math.random()*5+1)
                   }

                   if((y2==21)||(y2==22)||(y2==23)||(y2==24)||(y2==25))
                   {
                     m2=Math.floor(Math.random()*5+1)
                   }
                   if((y2==729)||(y2==728)||(y2==727)||(y2==726)||(y2==725))
                   {
                     tnt2=true
                   }

    }





    function flypac4()
             {

               //球1小
               if((tnt4==false))
                {
                  fill(color(c7, c8, c9));
                  ellipse(x4 ,y4 ,40 ,40 );
    //               fill(color(0, 0, 0));
    //               text(num1,x-3 ,y+3 )
                }


               if((tnt4==true))
               {
                 tnt4=false
                  c7=Math.floor(Math.random()*500)
                  c8=Math.floor(Math.random()*500)
                  c9=Math.floor(Math.random()*500)
                 //球1小 数字位置
    //              num1=Math.floor(Math.random()*10+1)
    //              num2=Math.floor(Math.random()*30+1)
                 //球1小
                  x4=300
                  y4=20
                  w4=5//动态控制
                  m4=5//动态控制
               }

               x4=x4+w4
               y4=y4+m4


               if((x4==575))
               {
                 w4=-5
               }
               if((x4==25))
               {
                 w4=5
               }

               if((y4==25))
               {
                 m4=5
               }
               if((y4==725))
               {
                 m4=-5
               }
  }








    function flypac3()
             {

               //球1小

                  fill(color(0, 0, 0));
                  ellipse(x3 ,y3 ,40 ,40 );


                   x3=x3+w3
                   y3=y3+m3


                   if((x3==575))
                   {
                     w3=-5
                   }
                   if((x3==25))
                   {
                     w3=5
                   }

                   if((y3==25))
                   {
                     m3=5
                   }
                   if((y3==725))
                   {
                     m3=-5
                   }
    }


    function flypac6()
             {

               //球1小

                  fill(color(0, 0, 0));
                  ellipse(x6 ,y6 ,40 ,40 );


                   x6=x6+w6
                   y6=y6+m6


                   if((x6==575))
                   {
                     w6=-5
                   }
                   if((x6==25))
                   {
                     w6=5
                   }

                   if((y6==25))
                   {
                     m6=5
                   }
                   if((y6==725))
                   {
                     m6=-5
                   }
    }


    function flypac5()
             {

               //球1小

                  fill(color(0, 0, 0));
                  ellipse(x5 ,y5 ,40 ,40 );

                  x5=x5+w5
                  y5=y5+m5
                  if((x5==579)||(x5==578)||(x5==577)||(x5==576)||(x5==575))
                  {
                    w5=-Math.floor(Math.random()*5+1)
                  }
                  if((x5==21)||(x5==22)||(x5==23)||(x5==24)||(x5==25))
                  {
                    w5=Math.floor(Math.random()*5+1)
                  }

                  if((y5==21)||(y5==22)||(y5==23)||(y5==24)||(y5==25))
                  {
                    m5=Math.floor(Math.random()*5+1)
                  }
                  if((y5==729)||(y5==728)||(y5==727)||(y5==726)||(y5==725))
                  {
                    m5=-Math.floor(Math.random()*5+1)
                  }

    }











    function sameposition()
             {
               for(i=0;i<ax.length;i++)
               {
               if(shoot[i]==false)
             {
              ax[i]=xc
              ay[i]=yc
             }
               }
             }







    function keyPressed() {
/*
     if (keyCode === 87) {               //w上
       sameposition()
      yc=yc-20;
    } else if (keyCode === 83) {          //s下
      sameposition()
      yc=yc+20;
     }
     if (keyCode === 65) {                //A左
       sameposition()
      xc=xc-20;
    } else if (keyCode === 68) {          //D右
      sameposition()
      xc=xc+20;
     }
*/




     num=keyCode;
     for(i=0;i<ax.length;i++)
     {
     if (keyCode==76)
       {
      shoot[i]=true
       }
     }

    if(keyCode==13)
    {
      root=true
    }


   }
