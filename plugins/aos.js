import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }, inject) => {
  if (process.client) {
    app.AOS = AOS.init({
      // 你可以在這裡添加 AOS 的選項配置
      duration: 800,
      once: true, // 決定動畫是否只觸發一次
    });
  }
};
