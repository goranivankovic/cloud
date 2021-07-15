


//Object that contains variables
let obj_varibels={

    numberZero:0,
    image:document.querySelector('.gallery_page_slider_images'),
    nav:document.querySelector('nav'),
    laz:false,
    menu:document.querySelector('.menu'),
    gallery_slider_left:document.querySelector('.gallery_page_slider_item1'),
    gallery_slider_right:document.querySelector('.gallery_page_slider_item2'),
    x:window.matchMedia("(max-width: 700px)"),
    menu_burger:document.querySelector('.menu_burger_pos'),
    menu_width768:document.querySelector('.menu_width768'),
    menu_item768:document.querySelectorAll('.menu_item768'),
    services_items:document.querySelectorAll('.services_page_items'),
    home_page_elem1:document.querySelector('.home_page_elem1'),
    home_page_elem2:document.querySelector('.home_page_elem2'),
    about_page_elem1:document.querySelector('.about_page_elem1'),
    about_page_elem2:document.querySelector('.about_page_elem2')
}





//Object that contains Functions
let obj_functions={


     //Change navbar background on scroll
    change_navBar_onScroll(){
        if (window.scrollY >= 70) {
        

            obj_varibels.nav.style.background="black"
            obj_varibels.nav.style.borderBottomLeftRadius='7px'
            obj_varibels.nav.style.borderBottomRightRadius='7px'
            obj_varibels.nav.style.opacity='0.55'
            
    
        
            
        }   else{
            
      
            
            obj_varibels.nav.style.background='transparent'
            obj_varibels.nav.style.opacity='1'
        
        
        } 




    },
 

  
     // slide image right
    async image_slide_right(){
        try{
       
            if (obj_varibels.numberZero == 5) {
                obj_varibels.numberZero=-1
                
            }
            obj_varibels.numberZero++;
         
    
        
        let response = await fetch('./JSON/images.json');
        let user = await response.json();
        obj_varibels.image.innerHTML=`<img id="gallery_page_slider_image" src="${user.data[obj_varibels.numberZero]}" height="100%" width="94%" alt="">`
    
    
     
        }catch(err){
            console.log(err);
    
        }

   },
  // slide image left
   async image_slide_left(){

    try{
        if (obj_varibels.numberZero <=0) {
            obj_varibels.numberZero=6
            }
    
            
            obj_varibels.numberZero--;
           
        
             
        let response = await fetch('./JSON/images.json');
        let user = await response.json();
        obj_varibels.image.innerHTML=`<img id="gallery_page_slider_image" src="${user.data[obj_varibels.numberZero]}" height="100%" width="94%" alt="">`
       
                
       
    
      
     
        }catch(err){
            console.log(err);
    
        }

   },
   //Burger bar toggle
   toggle_navbar(){


    //Open navbar
    if ( obj_varibels.laz==false) {
        obj_varibels.menu_width768.style.display='flex'
        obj_varibels.menu_width768.style.opacity='0.80'
        obj_varibels.laz=true
        obj_varibels.menu_burger.style.transform='rotate(-180deg)'
        obj_varibels.menu_burger.style.transition='1200ms'

       
        
          
   
     
      
  
        //Close navbar
    }else if ( obj_varibels.laz == true) {
        obj_varibels.menu_burger.style.transform='rotate(180deg)'
        obj_varibels.menu_burger.style.transition='1200ms'
            obj_varibels.menu_width768.style.display='none'
            obj_varibels.laz=false
  
        
    }


},

 //Function that controls window width
   on_resize() {
   
    if (window.matchMedia("(max-width: 768px)").matches) {








console.log('Display is width 768px or less');
   
    } else {

 
        console.log('Display is wider then 768px');

        //Add scroll on nav background when innerHeight is lover then 70px
  window.addEventListener('scroll',obj_functions.change_navBar_onScroll)
    }
  },
//Function for 5 menu_items for closing and opening nav
  shoutdown_navbar(){
    obj_varibels.menu_burger.style.transform='rotate(180deg)'
    obj_varibels.menu_burger.style.transition='1200ms'




//Function that activated 1500 millisecond after 5 menu_items are clicked
    setTimeout(()=>{
    
  obj_varibels.menu_width768.style.display='none'

 obj_varibels.laz=false

     
    },1500)
  
    
 
  },
  on_mouse_over(a){
      a.target.style.transform='scale(0.93)'
      a.target.style.transition='1200ms'
  
  



},
on_mouse_out(b){
   b.target.style.transform='scale(1)'
   b.target.style.transition='600ms'


},
on_load(){


    obj_varibels.menu.animate([
        // keyframes
        { transform: 'translateX(-1500px)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 1600,
      
        
      });

      obj_varibels.home_page_elem1.animate([
        // keyframes
        { transform: 'translateY(-700px)' },
        { transform: 'translateY(0px)' }
        
      ], {
        // timing options
        duration: 1900,
         
       
      
        
      });


      obj_varibels.home_page_elem2.animate([
        // keyframes
        { transform: 'translateY(700px)' },
        { transform: 'translateY(0px)' }
        
      ], {
        // timing options
        duration: 2200,
         
       
      
        
      });



}

}




//Caling a Function that controls window width
obj_functions.on_resize(obj_varibels.x) 
//Add event listener for Function that controls window width
obj_varibels.x.addEventListener('click',obj_functions.on_resize)



    //Five menu_items768 when windwo width is768 or less click 
      obj_varibels.menu_item768[0].addEventListener('click',obj_functions.shoutdown_navbar)
      obj_varibels.menu_item768[1].addEventListener('click',obj_functions.shoutdown_navbar)
      obj_varibels.menu_item768[2].addEventListener('click',obj_functions.shoutdown_navbar)
      obj_varibels.menu_item768[3].addEventListener('click',obj_functions.shoutdown_navbar)
      obj_varibels.menu_item768[4].addEventListener('click',obj_functions.shoutdown_navbar)
        
        




//Add event listener for sliding image left
obj_varibels.gallery_slider_left.addEventListener('click',obj_functions.image_slide_left)


//Add event listener for sliding image right
obj_varibels.gallery_slider_right.addEventListener('click',obj_functions.image_slide_right)


//Add event listener for menu_burger
obj_varibels.menu_burger.addEventListener('click',obj_functions.toggle_navbar)




//About page elements on mouseover
obj_varibels.about_page_elem1.addEventListener('mouseover',obj_functions.on_mouse_over)
obj_varibels.about_page_elem2.addEventListener('mouseover',obj_functions.on_mouse_over)


//Service Page items on mouseover
obj_varibels.services_items[0].addEventListener('mouseover',obj_functions.on_mouse_over)
obj_varibels.services_items[1].addEventListener('mouseover',obj_functions.on_mouse_over)
obj_varibels.services_items[2].addEventListener('mouseover',obj_functions.on_mouse_over)
obj_varibels.services_items[3].addEventListener('mouseover',obj_functions.on_mouse_over)
obj_varibels.services_items[4].addEventListener('mouseover',obj_functions.on_mouse_over)
obj_varibels.services_items[5].addEventListener('mouseover',obj_functions.on_mouse_over)



//About Page elements on mousout
obj_varibels.about_page_elem1.addEventListener('mouseout',obj_functions.on_mouse_out)
obj_varibels.about_page_elem2.addEventListener('mouseout',obj_functions.on_mouse_out)

//Service Page items on mousout
obj_varibels.services_items[0].addEventListener('mouseout',obj_functions.on_mouse_out)
obj_varibels.services_items[1].addEventListener('mouseout',obj_functions.on_mouse_out)
obj_varibels.services_items[2].addEventListener('mouseout',obj_functions.on_mouse_out)
obj_varibels.services_items[3].addEventListener('mouseout',obj_functions.on_mouse_out)
obj_varibels.services_items[4].addEventListener('mouseout',obj_functions.on_mouse_out)
obj_varibels.services_items[5].addEventListener('mouseout',obj_functions.on_mouse_out)






//On load Function Home Page
window.addEventListener('load',obj_functions.on_load)

