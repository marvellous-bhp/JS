// export default class Effect_Text{
//      tag_html; //html chua effect
//      arr_text; //mang text
//      text;
//      index; //index text
//      time;
//      status; //status of text
//     constructor(tag_html, arr_text, time) {
//         this. tag_html=tag_html;
//         this. arr_text=arr_text;
//         this. text="";
//         this. index=0;
//         this. time=parseInt(time, 10);
//         this. textFunc();
//         this. status=false;
//     }
//      textFunc = () =>{
//         const index = this. index % this. arr_text.length;
//         const current_text= this. arr_text[ index];
//         if(this. status) {
//             //Xóa từ
//             this. text =  current_text.substring(0, this. text.length - 1)
//         } else {
//             //Thêm từ
//             this. text =  current_text.substring(0, this. text.length + 1)
//         }
    
//         // Thêm từ vào đối tượng
//         this. tag_html.innerHTML = `<span class="text">${this. text}</span>`
    
//         //Tốc độ chữ
//         let text_speed = 500;
//         if(this. status) {
//             text_speed = text_speed /2
//         }
    
//         //Nếu từ hoàn thành
//         if(!this. status && this. text ===  current_text) {
//             //Tạo thời điểm ngừng ở cuối
//              text_speed = this. time;
//             console.log(this. time)
//             //Thiết lập xóa chữ đúng
//             this. status = true;
//         } else if (this. status && this. text === ''){
//             this. status = false;
//             //Move to từ tiếp theo
//             this. index++;
//             //Dừng trước khi đánh chữ
//              text_speed = 300
//         }
    
//         setTimeout(() => this. textFunc(),  text_speed)

//     }
//     run=() => {
//         const tag_html = document.querySelector('.danh_chu');
//         const arr_text = JSON.parse(tag_html.getAttribute('data-chu'));
//         const time =  tag_html.getAttribute('data-thoiGianDoi');
//         //Thiết Lập hàm hieu_ung _danh_chu
//         new  textFunc( tag_html,  text,  time)
//     }
// }

