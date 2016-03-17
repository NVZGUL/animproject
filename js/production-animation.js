    var animation_data; 
    var current_anim = 0;

    var canvas = Snap("#animation-canvas");
    var paper = canvas.g(), box;
    var temp;
    var appearTime = 1500, disappearTime = 200;
    var appearMatrix = new Snap.Matrix(),
      zeroscaleMatrix = new Snap.Matrix();
    canvas.append(paper);

    var dairy_products_data = $.getJSON($("div[data-json]").attr("data-json"), function(json){
        for( var i = 0; i < json.length;i++){
          $("#lsv-dairy-products__list").append("<li class='lsv-dairy-products__list-item' data-item-order="+i+">" + json[i].title + "</li>");
        }
        $(".lsv-dairy-products__list-item").click(function(){
          animation_data = json[$(this).attr("data-item-order")];
          initProduct();
        });
        animation_data = json[0];
        initProduct();
    });

    function stepAnimation(){
      var element = paper.select("svg");
      box = element.getBBox();
      switch (current_anim % animation_data.steps.length){
        case 1:
          var car = element.select("#car");
          var carMatrix = new Snap.Matrix();
          carMatrix.translate(box.w+100,0);
          car.animate({transform: carMatrix}, appearTime, mina.linear, function(){
            car.transform(carMatrix.translate(-box.w-100,0));
          });
          break;
        case 2:
          var glass = element.select("#glass");
          //infiniteGlass();
          function infiniteGlass(){
            var glassMatrix = new Snap.Matrix();
            glassMatrix.translate(0,25);
            glass.stop().animate({transform: glassMatrix},2*appearTime,
              function(){
              var glass1Matrix = new Snap.Matrix();
              glass1Matrix.translate(0,0);
              glass.stop().animate({transform:glass1Matrix},2*appearTime,function(){
                glass.attr({transform:glass1Matrix});
                infiniteGlass();
              });
            }
            );
           
          }
          infiniteGlass();
          break;
        case 3:
          var galka = element.selectAll(".st10");
          var myTime = 1000;
          for(var i_galka = 0; i_galka < galka.length; i_galka++){
                myMatrix = new Snap.Matrix();
            }
            
            var myMatrix =[];
            for (var i_galka = 0; i_galka < 5; ++i_galka){
              myMatrix.push(new Snap.Matrix());
              myMatrix[i_galka].scale(1,1,galkaBbox[i_galka].cx,galkaBbox[i_galka].cy);
              setTimeout(function(){
                galka[i_galka].animate({transform:myMatrix},myTime,mina.elastic);
                i_galka++;
              }
              ,500*i_galka);
            }
            i_galka=0;
          break;
        case 5: 
          var drop = element.select("#drop");
          var dropMatrix = new Snap.Matrix();
          console.log("drop here!");
          dropMatrix.translate(+0,+125);
          drop.animate({transform: dropMatrix}, appearTime, mina.linear, function(){
            drop.addClass("myOpacity0");
          });
          break;
        case 6:
          var hour = element.select("#hour_x5F_arrow");
          var clock = element.select("#clock");
          infiniteClock();
          function infiniteClock(){
            var hourMatrix = new Snap.Matrix();
            hourMatrix.rotate(90,clock.getBBox().cx,clock.getBBox().cy);
            hour.stop().animate({transform: hourMatrix}, appearTime, function(){
              var h1Matrix = new Snap.Matrix();
              h1Matrix.rotate(360,clock.getBBox().cx,clock.getBBox().cy);
              hour.attr({transform:h1Matrix});
              infiniteClock();
            });
          }
          break;
        case 9:
          var homoTime = 3000;
          function animateVerh(){
              var sharik1 = element.select("#mySharik1");
              var sharik2 = element.select("#mySharik2");
              var sharik3 = element.select("#mySharik3");
              var sharik4 = element.select("#mySharik4");
              var sharik5 = element.select("#mySharik5");
              var sharik6 = element.select("#mySharik6");
              var sharik1Matrix = new Snap.Matrix();
              var sharik2Matrix = new Snap.Matrix();
              var sharik3Matrix = new Snap.Matrix();
              var sharik4Matrix = new Snap.Matrix();
              var sharik5Matrix = new Snap.Matrix();
              var sharik6Matrix = new Snap.Matrix();

              function infinitySharik1(){
                sharik1Matrix.translate(0,50);
                sharik1.stop().animate({transform: sharik1Matrix},homoTime*0.5,mina.linear,function(){
                setTimeout(function(){
                sharik1Matrix.translate(0,-50);
                sharik1.attr({transform:sharik1Matrix});
                infinitySharik1();},homoTime*0.5);
              });
              }
              infinitySharik1();

              function infinitySharik2(){
                sharik2Matrix.translate(0,100);
                sharik2.stop().animate({transform: sharik2Matrix},homoTime,mina.linear,function(){
                  sharik2Matrix.translate(0,-100);
                  sharik2.attr({transform:sharik2Matrix});
                  infinitySharik2();
              });
              }
              infinitySharik2();

              function infinitySharik3(){
                sharik3Matrix.translate(0,30);
                sharik3.stop().animate({transform: sharik3Matrix},homoTime*0.3,mina.linear,function(){
                  setTimeout(function(){
                  sharik3Matrix.translate(0,-30);
                  sharik3.attr({transform:sharik3Matrix});
                  infinitySharik3();},homoTime - homoTime*0.3);
              });
              }
              infinitySharik3();

              function infinitySharik4(){
                sharik4Matrix.translate(0,90);
                sharik4.stop().animate({transform: sharik4Matrix},homoTime*0.9,mina.linear,function(){
                  setTimeout(function(){
                  sharik4Matrix.translate(0,-90);
                  sharik4.attr({transform:sharik4Matrix});
                  infinitySharik4();},homoTime - homoTime*0.9);
              });
              }
              infinitySharik4();

              function infinitySharik5(){
                sharik5Matrix.translate(0,30);
                sharik5.stop().animate({transform: sharik5Matrix},homoTime*0.3,mina.linear,function(){
                  setTimeout(function(){
                  sharik5Matrix.translate(0,-30);
                  sharik5.attr({transform:sharik5Matrix});
                  infinitySharik5();},homoTime - homoTime*0.3);
              });
              }
              infinitySharik5();

              function infinitySharik6(){
                sharik6Matrix.translate(0,50);
                sharik6.stop().animate({transform: sharik6Matrix},homoTime*0.5,mina.linear,function(){
                  setTimeout(function(){
                  sharik6Matrix.translate(0,-50);
                  sharik6.attr({transform:sharik6Matrix});
                  infinitySharik6();},homoTime*0.5);
              });
              }
              infinitySharik6();
            }
          animateVerh();


          setTimeout(function(){
            function infinityIDShariki2(){
              var shariki_niz = element.select("#shariki_2");
              shariki_niz.addClass("myOpacity1");
              var shariki_nizMatrix = new Snap.Matrix();
              shariki_nizMatrix.translate(0,box.h+50);
              shariki_niz.stop().animate({transform: shariki_nizMatrix},homoTime,mina.linear,function(){
                shariki_nizMatrix.translate(0,-box.h-50);
                shariki_niz.attr({transform: shariki_nizMatrix});
                infinityIDShariki2();
              });
            }
            infinityIDShariki2();
          },200);
          setTimeout(function (){
            function infinityIDShariki2_my(){
              var shariki_niz_my = element.select("#shariki_3");
              shariki_niz_my.addClass("myOpacity1");
              var shariki_niz_myMatrix = new Snap.Matrix();
              shariki_niz_myMatrix.translate(0,box.h+50);
              shariki_niz_my.stop().animate({transform: shariki_niz_myMatrix},homoTime,mina.linear,function(){
                shariki_niz_myMatrix.translate(0,-box.h-50);
                shariki_niz_my.attr({transform: shariki_niz_myMatrix});
                infinityIDShariki2_my();
              });
            }
            infinityIDShariki2_my();
          },1000);

          break;
        case 10:
           var myMatrix1 = [];
           for(var i_snowflakes = 0; i_snowflakes < snowflakes.length; ++i_snowflakes){
             myMatrix1.push(new Snap.Matrix());
             myMatrix1[i_snowflakes].scale(1,1,snowBbox[i_snowflakes].cx,snowBbox[i_snowflakes].cy);
             setTimeout(function infiniteSnowflakes(){
               snowflakes[i_snowflakes].animate({transform:myMatrix1},1000,mina.elastic);
               i_snowflakes++;
            }
            ,250*i_snowflakes);
          }
          i_snowflakes = 0;  
          break;
        case 11:
          var myMatrix1 = [];
           for(var i_snowflakes = 0; i_snowflakes < snowflakes.length; ++i_snowflakes){
             myMatrix1.push(new Snap.Matrix());
             myMatrix1[i_snowflakes].scale(1,1,snowBbox[i_snowflakes].cx,snowBbox[i_snowflakes].cy);
             setTimeout(function infiniteSnowflakes(){
               snowflakes[i_snowflakes].animate({transform:myMatrix1},1000,mina.elastic);
               i_snowflakes++;
            }
            ,250*i_snowflakes);
          }
          i_snowflakes = 0;
          break;
        case 12:
          var car = element.select("#car");
          var carMatrix = new Snap.Matrix();
          console.log("car 111");
          carMatrix.translate(-box.w-100,0);
          car.animate({transform: carMatrix}, appearTime, mina.linear, function(){
            car.transform(carMatrix.translate(box.w+100,0));
          });
          break;
        default: console.log("defualt case in step animation");
      }
    }
    var snowflakes;
    var galkaBbox =[];
    var snowBbox = [];    
    function beforeAnimation(data){
      paper.remove();
      paper = canvas.g();
      paper.append(data);
      var element = paper.select("svg");
      box = canvas.getBBox();
      appearMatrix = new Snap.Matrix();
      zeroscaleMatrix = new Snap.Matrix();
      zeroscaleMatrix.scale(0,0,box.cx,box.cy);
      appearMatrix.scale(0.8,0.8,box.cx,box.cy);
      paper.transform(zeroscaleMatrix);
      //do some manipulation before playing step animation
      switch (current_anim % animation_data.steps.length){
        case 1:
          var car = element.select("#car");
          var carMatrix = new Snap.Matrix();
          carMatrix.translate(-box.w,0);
          car.transform(carMatrix);
          break;
        case 2:
          break;
        case 3:
          var galka = element.selectAll(".st10");
          galka.forEach(function(el,index){
            galkaBbox.push(el.getBBox());
          });
          for(var i=0; i < galka.length; i++) {
            zero1Matrix = new Snap.Matrix();
            //zero1Matrix.scale(0,0,box1.cx,box1.cx);
            zero1Matrix.scale(0,0,galkaBbox[i].cx,galkaBbox[i].cy);
            galka[i].transform(zero1Matrix);
          }
          break;
        case 9: 
          var shariki_niz = element.select("#shariki_2");
          var shariki_niz2 = element.select("#shariki_3");
          shariki_niz.addClass("myOpacity0");
          shariki_niz2.addClass("myOpacity0");
          var shariki_niz2Matrix = new Snap.Matrix();
          shariki_niz2Matrix.translate(0,-50);
          break;
        case 10:
          snowflakes = [element.select(".st4"),element.select(".st5"),element.select(".st6"),element.select(".st7"),element.select(".st8")];
          snowflakes.forEach(function(el,index){
            snowBbox.push(el.getBBox());
          });
          for(var j_snowflakes = 0; j_snowflakes < snowflakes.length; j_snowflakes++){
            snowflakesMatrix = new Snap.Matrix();  
            snowflakesMatrix.scale(0,0,snowBbox[j_snowflakes].cx,snowBbox[j_snowflakes].cy);
            snowflakes[j_snowflakes].transform(snowflakesMatrix);
          }
          break;
        case 11:
          snowflakes = [element.select(".st8"),element.select(".st9"),element.select(".st10"),element.select(".st11"),element.select(".st12")];
          snowflakes.forEach(function(el,index){
            snowBbox.push(el.getBBox());
          });
          for(var j_snowflakes = 0; j_snowflakes < snowflakes.length; j_snowflakes++){
            snowflakesMatrix = new Snap.Matrix();  
            snowflakesMatrix.scale(0,0,snowBbox[j_snowflakes].cx,snowBbox[j_snowflakes].cy);
            snowflakes[j_snowflakes].transform(snowflakesMatrix);
          }
          var snow = element.selectAll(".st2");
          snow.forEach(function(el,index){
            snowBbox.push(el.getBBox());
          });
          for(var j_my2 = 0; i < snow.length; j_my2++) {
            snowMatrix = new Snap.Matrix();
            //zero1Matrix.scale(0,0,box1.cx,box1.cx);
            snowMatrix.scale(0,0,snowBbox[j_my2].cx,snowBbox[j_my2].cy);
            snow[j_my2].transform(snowMatrix);
          }
          break;
        case 12:
          var car = element.select("#car");
          var carMatrix = new Snap.Matrix();
          carMatrix.translate(+box.w,0);
          car.transform(carMatrix);
          break;
        default: console.log("defualt case before playing animation "+ (current_anim % animation_data.steps.length));
      }
      onLoadSVG();
    }

    function onLoadSVG(data){
      paper.animate({transform: zeroscaleMatrix}, disappearTime, mina.easeout, function(){
          // paper.remove();
          // paper = canvas.g();
          // paper.append(data);
          // box = canvas.getBBox();
          // appearMatrix = new Snap.Matrix();
          // zeroscaleMatrix.scale(0,0,box.cx,box.cy);
          // appearMatrix.scale(0.8,0.8,box.cx,box.cy);
          // paper.transform(zeroscaleMatrix);
          paper.animate({transform: appearMatrix}, appearTime, mina.elastic,stepAnimation);
      });
    }
    function startNextAnim(){
       paper.stop();
      $("#lsv-dairy-products__tooltip-info").removeClass("active");
      $("#lsv-dairy-products__tooltip-good").removeClass("active");

      paper.animate({transform: zeroscaleMatrix}, disappearTime, mina.easeout, function(){
          // paper.remove();
          // paper = canvas.g();
          Snap.load(animation_data.steps[++current_anim % animation_data.steps.length].img, beforeAnimation);
          $("#lsv-production__description-header").text(animation_data.steps[current_anim % animation_data.steps.length].header);
          $("#lsv-production__description").text(animation_data.steps[current_anim % animation_data.steps.length].description);
          if( (current_anim % animation_data.steps.length != 0 ) && (current_anim % animation_data.steps.length != (animation_data.steps.length-1))){
            $("#lsv-dairy-products__next-animation>label").html("Следующий <br> шаг");
          }
          else{
            (current_anim % animation_data.steps.length == 0 )? $("#lsv-dairy-products__next-animation>label").html("Посмотреть <br> производство") : $("#lsv-dairy-products__next-animation>label").html("Вернулься <br> в начало");
          }
      });
    }
    function initProduct(){
      current_anim = 0;
      Snap.load(animation_data.steps[current_anim].img, beforeAnimation);
      $("#lsv-dairy-products__product-title>h2").text(animation_data.title);
      $("#lsv-dairy-products__tooltip-good>p").html(animation_data.goodies);
      $("#lsv-dairy-products__tooltip-info>p").html(animation_data.info);
      $("#lsv-production__description-header").text(animation_data.steps[current_anim].header);
      $("#lsv-production__description").text(animation_data.steps[current_anim].description);
      $("#lsv-dairy-products__tooltip-info").removeClass("active");
      $("#lsv-dairy-products__tooltip-good").removeClass("active");
    }
    
    $("#lsv-dairy-products__next-animation").click(startNextAnim);