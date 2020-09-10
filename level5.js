class level_5{
    l5q =  ["தியாழினி", "குழலினி","மக்கள்", "மழலைச்சொல்", "தென்பதம்" ,"தவர்","கேளா"];
    l5ca = ["குழலினி", "தியாழினி","தென்பதம்", "மக்கள்", "மழலைச்சொல்" ,"கேளா","தவர்"]; 
        
  constructor(){
    level5_btn = createButton('Level - 5')
    ua = [];
 
    }
  hide(){
     level2_btn.hide();
     level3_btn.hide();
    level1_btn.hide();
    level4_btn.hide();
    level5_btn.hide();
   // this.greeting.hide();
     }
    
    display(){
    level5_btn.position(displayWidth/2 - 70, displayHeight/1.5 )
    level5_btn.class("customButton");
    level5_btn.mousePressed(()=>{
      level1_btn.hide();
    level2_btn.hide();
    level3_btn.hide();
    level4_btn.hide();
    level5_btn.hide();
      createQuestion(this.l5q,this.l5ca);
    })
    
    }


}