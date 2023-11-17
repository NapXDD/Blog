---
title: "Một chút về BETH techstack mới nổi gần đây"
description: "hypermedia, HTMX và mấy thứ xung quanh bun"
pubDate: "November 13 2023"
heroImage: "/blog-placeholder-5.jpg"
---

Tính viết bài này từ hồi mấy tháng trước những chưa có thời gian, nay có thời gian kèm với việc thằng react nó mới ra cái server component của nó nên viết luôn .

### Ủa rồi ra Server Component chi ?

Mới gần đây React quăng ra nguyên một cái cục component, đại khái là nó query sql thẳng trong component :thonking: từ thuở sơ khai ban đầu React được sinh ra là một UI library, sinh ra là để giải quyết vấn đề về front-end, Improve UX và là giải pháp hợp lí để giải quyết các app nặng về side effect.

React đơn thuần là một UI library, do có vấn đề về SEO nên thằng Next nó mới được sinh ra, Next là một React fullstack Framework và giải quyết các vấn đề mà React chưa giải quyết được <strike>mặc dù nó nặng vcl :thonking:</strike>

Thế rồi bằng một cách thần kì nào đó, No one ask nhưng React nó ra Server Component, query thẳng sql vào Component, chắc mục đích là cũng muốn React nó fullstack được, nhưng làm như thế thì khác gì quay trở lại web thời kì đầu và viết PHP :thonking:, tính ra viết vậy thì thà viết mô hình mvc cho xong :holyshiet:

Các tinh hoa từ trước đến giờ mà mình thấy được của React, chính là JSX và Hook, JSX làm việc viết UI tiện hơn rất nhiều, còn Hook sinh ra để improve Life cycle code, khá là tiện. Mặc dù mình có nghe được nhiều ông FE dev nói rằng class đã lỗi thời và chê nó không còn hữu dụng. Nhưng tin mình đi, UI, side effect hay pass data từ mấy cái API không phải là những vấn đề duy nhất của Front-end đâu.

### Bun ra đời

Rồi bun ra đời trong một thời đại web có nhiều thư viện hay Framework nhiều không tả nổi, vừa mới ra đời, nhưng bun đã trở nên viral với những quảng cáo về performance vượt hẳn với những người đàn anh tiền nhiệm, nhưng mình cũng không tin mấy cái quảng cáo đấy lắm, nghe bịp nhiều quen rồi :thonking:

Thứ mình để ý tới bun là <a href="https://elysiajs.com/" target="_blank">ElysiaJS</a> <strike>Chắc chắn không phải là do nó wjpu đâu</strike>, thật ra ban đầu mình chỉ nhìn nó như là một cái Backend Framework thôi, cơ mà sau cái video <a href="https://youtu.be/cpzowDDJj24?si=1biy9Nh85QyCXDXk">BETH techstack</a> thì thấy nó hay phết, cơ bản là quay trở lại full server side rendering, nhưng mà là serverless :thonking:, 
