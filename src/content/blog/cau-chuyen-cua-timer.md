---
title: "Timer và mấy thứ linh tinh animation trên web"
description: "Câu chuyện mình đi làm animation cho cái blog"
pubDate: "Jul 02 2023"
heroImage: "/blog-placeholder-5.jpg"
---

Mấy nay ngồi viết cái blog lại cho kịp làm đẹp cái resume, có ngồi nghịch ngợm tí xíu về phần animation trên web. Với một ít kiến thức animation nên mình cũng ngọ nguậy được mấy cái ý tưởng mà mình nghĩ ra. :nice:

Như các bạn đã thấy ở Homepage, có mấy cái ảnh thụt ra thụt vô, hôm bữa tính dùng Canvas múa cho mạnh nhưng mà chợt thấy làm vậy để làm gì :thonking:, cứ quăng cái thẻ img vào rồi cho nó cái tọa độ là nó chạy được mà. Thế là mình cũng ngồi múa may quay với nó. Bỏ qua câu chuyện về Technical mình viết nó như thế nào :ehe:, có thể mình sẽ viết một bài về cái đó sau, thì ý tưởng là cho nó pop-up một vị trí bất kì trên bất kì bốn cạnh màn hình, cho animation nó chạy thụt lên, rồi lại lại thụt xuống là xong :thonking:. Có Workflow rồi thì dễ, múa may tí là ra, chỉ là tính toán toán học một xíu. Thành quả thì các bạn đã thấy ở cái Homepage rồi :happy:.

Đang tính hí hửng đem khoe mọi người thì thấy animation bị lỗi, tự dưng 2 3 tấm ảnh nhảy ra bay tứ lung tung :worry:, mình tự nhủ là do khi alt + tab qua thì nó hot reload nên mới gây ra thế thôi chứ không bị gì đâu, thế là đem lên vercel deploy coi thử, và bùm, nó vẫn bị :disappointed:.

Sau khi vén cái tay áo lên tìm hiểu là do đâu thì google xíu là đã tìm thấy vấn đề. Để tối ưu hóa Performance cho browser, khi chuyển qua tab khác thì tab trước đó sẽ được đánh là inactive, frozen các Javascript không cần thiết, khi active lại thì mấy cái Javacript chạy tiếp. Ờ thì, chuyện sẽ không có gì to tác cho tới khi bạn dùng đến mấy cái Timer của JS :thonking:. Animation trên web có nhiều cách để làm, bạn có thể dùng css để transition nó như cái Menu trong cái blog này chẳng hạn, hay flexible hơn bằng cách dùng mấy cái thư viện như GSAP,... . Trong trường hợp này thì mình đơn giản là bảo máy tính "Ê, cứ bao nhiêu đó giây mày chạy cho tao một cái hành động này" là xong. Đơn giản là cứ 1s nó chạy 60 lần, tức là 60FPS, bạn chỉ cần setInterval cho nó chạy cái hàm đó 1s 60 lần là xong rồi. Cơ bản thì về mặt ý tượng nó sẽ đại khái như thế này:

```js
const lmao = setInterval(dosomeThing, 1000 / 60);
clearInterval(lmao);
```

Ờ thì nếu như mà chỉ có vậy thôi thì vẫn chưa có gì, Timer sau khi Inactive sẽ đưa action vào trong một cái event queue, stack ở trong đó, tới lúc bạn quay lại, Tab active lên thì nó sẽ fire hết cái mớ action trong event queue đó một lượt, sync lại với web app.

Nhưng mà trường hợp của mình thì nó khác cái ở trên một tí, vì hành động của mình chia ra 2 lần action, lần thứ nhất là cứ sau 3s là nó lại gọi 1 cái ảnh random lên, rồi sau khi ảnh gọi lên thì mới chạy animation. Tức là code nó sẽ kiểu kiểu như vầy:

```js
function doAnimation() {
  //animation function here
}

function spawnFunction() {
  //random image here
  const lmao = setInterval(doAnimation, 1000 / 60);
  clearInterval(lmao);
}

setInterval(spawnFunction, 3000);
```

Trường hợp này của mình thì nó lại là 2 cái setInterval lồng vào nhau, và thằng doAnimation cứ sau 3s nó mới chạy một lần, nhưng mà sau khi đã Inactive tab thì action sẽ đi vào event queue stack ở trong đó, khi Active lại thì n thằng spawnFunction lao ra chạy cùng một lúc, n thằng doAnimation chạy theo sau mà đếch chờ nhau gì cả :thonking:, thành ra là animation sẽ bị chạy lung tung cả lên mà không đúng với timing mình đã đặt ra trước :thonking:.

Khi mà đã hiểu nó chạy như thế nào thì work around với nó cũng dễ hơn :thonking:. Đơn giản là khi inactive tab thì mình clear cái Interval đi, active thì lại gọi lên chạy lại, đó là cách nhanh nhất để sửa cái lỗi này :thonking:

```js
function clearIntervalWhenTabIsInactive() {
  if (document.hidden) {
    clearInterval(popAnimation);
    clearInterval(spawnAnimation);
  } else {
    spawnFuntion();
    spawnAnimation = setInterval(() => spawnFuntion(), spawnDuration);
  }
}

document.addEventListener("visibilitychange", clearIntervalWhenTabIsInactive);
```

Trong trường hợp này thì nó nhanh và hiệu quả, nhưng mà làm như vầy thì đơn nhiên là mọi thứ bắt đầu lại từ đầu, thế nếu bạn lại muốn giữ lại animation đó khi active lại tab cho nó lại tiếp tục chạy từ lúc inactive tab thì sao ? :thonking: Trong trường hợp này thì mình nên lưu nó vào một cái state, khi inactive thì bạn lưu hết mấy thứ cần thiết vào cái state đó, rồi khi active tab lại thì truyền state vào bên trong hàm để nó chạy tiếp. Làm thì cũng được nhưng do mình <del>lười</del> không muốn phức tạp hóa vấn đề lên nữa, và tính chất của blog thì cũng không cần nên thôi :thonking:

```js
let state = {}

function clearIntervalWhenTabIsInactive() {
  if (document.hidden) {
    clearInterval(popAnimation);
    clearInterval(spawnAnimation);

    //save state here
    state = {...}
  } else {
    spawnFuntion();
    spawnAnimation = setInterval((state) => spawnFuntion(state), spawnDuration);
  }
}

document.addEventListener("visibilitychange", clearIntervalWhenTabIsInactive);
```

Rồi đó là cách mà mình work around với mấy cái animation linh tinh mà không ai hỏi này. Cảm ơn anh <a target='_blank' href='https://minhle.space'>Monody Le</a> đã hỗ và giải thích cặn kẽ cho mình về mấy cái event queue này. Đây cũng là cái blog vô tri đầu tiên mà mình viết, cảm ơn mọi người đã đọc tới đây :happy:.
