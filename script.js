(() =>{
    function onScroll(){
        //sectionElems (มี s): คือตัวแปรอาร์เรย์ที่เก็บ Element <section> ทั้งหมด 
        // ที่หาเจอจาก document.querySelectorAll('section')
        const sectionElems = Array.from(document.querySelectorAll('section'));
        
        sectionElems.forEach((sectionElem)=>{
         //sectionElem (ไม่มี s): คือตัวแปรที่คุณตั้งชื่อขึ้นมาเองใน forEach loop เพื่อใช้แทน Element 
         // <section> ทีละตัว ที่กำลังถูกประมวลผลในรอบนั้นๆ 
           const imgElem = sectionElem.querySelector('img');
           const textElem = sectionElem.querySelector('.text');
            
           const scrollPosition = window.scrollY;
           //เป็นสิ่งที่ช่วยหาค่า เวลาเรา scroll down ตั้งแต่จุดบนไปล่าง 1ส่วน10 ให้ข้อความแสดงขึ้นมา
           const revealPosition = imgElem.offsetTop+imgElem.offsetHeight/30;

           if(scrollPosition >= revealPosition){
             textElem.classList.add('reveal');
           }
        });
    }
    function run(){
     document.addEventListener('scroll', onScroll);
    }
    run();
})();


วันนี้เป็นวันที่ 11 สำหรับ challenge 21 วันกับ JavaScript พอหลังๆตั้งแต่ ep.10 คือตัวเองมีปัญหากับหน้าจอมากขึ้นเรื่อยๆ เพิ่งเข้าใจว่าการเขียน code ตามติวเตอร์ก็ไม่ใช่ว่าเราจะสำเร็จได้ตามแผนที่เขาวางไว้ให้ เพราะขนาดหน้าจอที่ต่างกันก็ทำให้โค้ดที่เขาวางไว้ให้มีปัญหา ไม่ตรงกับเขาบ้าง แต่หลักๆก็ได้เรียนรู้ CSS มากขึ้นไปด้วย วันนี้ได้เรียนรู้วิธีการทำอนิเมชั่นให้ text มันโผล่ขึ้นตอนที่เรา scroll down วิธีคำนวนคือคำนวนจาก แกน Y บนลงล่าง พอเราเลื่อนหน้าจอไปประมาณ 1 ส่วน 10 จะเห็นข้อความปรากฏ จากตอนแรกเป็นพื้นที่โล่งๆไม่มีอะไร เริ่มเข้าใจเลยว่า การเป็น software developer ต้องใช้ logic เยอะมากจริงๆ อะไรที่เราคนธรรมดาไม่ได้สังเกต การเป็น dev ต้องสังเกตเยอะจริงๆ
