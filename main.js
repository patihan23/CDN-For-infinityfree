// filepath: c:\Users\lnwqq\Desktop\CV-Website\CEIT-\public\assets\js\main.js
/*=============== SHOW HIDDEN - PASSWORD ===============*/

const showHiddenPass = (loginPass, loginEye) =>{

   const input = document.getElementById(loginPass),

         iconEye = document.getElementById(loginEye)



   if (input && iconEye) {

      iconEye.addEventListener('click', () =>{

         // Change password to text

         if(input.type === 'password'){

            // Switch to text

            input.type = 'text'



            // Icon change

            iconEye.classList.add('ri-eye-line')

            iconEye.classList.remove('ri-eye-off-line')

         } else{

            // Change to password

            input.type = 'password'



            // Icon change

            iconEye.classList.remove('ri-eye-line')

            iconEye.classList.add('ri-eye-off-line')

         }

      })

   }

}



showHiddenPass('login-pass','login-eye')

/*=============== FORM EFFECTS ===============*/
document.addEventListener('DOMContentLoaded', function() {
    // เพิ่มเอฟเฟกต์ glow effect สำหรับปุ่มล็อกอิน
    const loginBtn = document.querySelector('.login__button');
    if (loginBtn) {
        loginBtn.addEventListener('mousemove', function(e) {
            // คำนวณตำแหน่งเม้าส์เทียบกับปุ่ม
            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;
            
            // สร้างเอฟเฟกต์แสงที่ตามเม้าส์
            this.style.background = `
                linear-gradient(135deg, var(--primary-color), var(--secondary-color)),
                radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3), transparent 40%)
            `;
        });
        
        loginBtn.addEventListener('mouseleave', function() {
            // คืนค่ากลับเป็นค่าเดิมเมื่อเมาส์ออกจากปุ่ม
            this.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
        });
    }
      // เอฟเฟกต์ฟอร์มปรากฏพร้อมกับเบลอสลัวของภาพพื้นหลัง
    const loginForm = document.querySelector('.login__form');
    const bgGradient = document.querySelector('.login__bg-gradient');
    
    if(loginForm && bgGradient) {
        // เพิ่มเอฟเฟกต์เมื่อโหลดเสร็จ
        setTimeout(() => {
            bgGradient.style.transition = 'opacity 1.2s ease';
            bgGradient.style.opacity = '0.6';
        }, 100);
    }
    
    // เพิ่มเอฟเฟกต์การเคลื่อนไหวของพื้นหลังเมื่อเลื่อนเมาส์
    document.addEventListener('mousemove', function(e) {
        const bgPattern = document.querySelector('.login__bg-pattern');
        if (bgPattern) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            bgPattern.style.transform = `translate(${moveX}px, ${moveY}px) rotate(0deg)`;
        }
    });
});
