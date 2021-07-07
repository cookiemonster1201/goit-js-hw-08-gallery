const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
  {
    preview: "https://www.bfoto.ru/news/wp-content/uploads/oboi_1280x1024.jpg",
    original: "https://www.bfoto.ru/news/wp-content/uploads/oboi_1280x1024.jpg",
    description: "Flower",
  },
  {
    preview:
      "https://hdoboi.kiev.ua/images/middle/17.Apr.2020-korona-virus.jpg",
    original:
      "https://hdoboi.kiev.ua/images/middle/17.Apr.2020-korona-virus.jpg",
    description: "Virus",
  },
  {
    preview:
      "https://cdn.wallscloud.net/converted/2623833090-05ca318f1c9e-5R0R-1280x1024-MM-100.jpg",
    original:
      "https://cdn.wallscloud.net/converted/2623833090-05ca318f1c9e-5R0R-1280x1024-MM-100.jpg",
    description: "Night",
  },
  {
    preview:
      "https://images.wallpaperscraft.ru/image/pikseli_cvet_ottenki_svet_18389_1280x720.jpg",
    original:
      "https://images.wallpaperscraft.ru/image/pikseli_cvet_ottenki_svet_18389_1280x720.jpg",
    description: "Blue theme",
  },
  {
    preview: "http://www.fonstola.ru/pic/201305/1280x768/fonstola.ru-94643.jpg",
    original:
      "http://www.fonstola.ru/pic/201305/1280x768/fonstola.ru-94643.jpg",
    description: "Cartoon",
  },
  {
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pavlovsk_town_Pavlovsk_Park_IMG_6284_1280.jpg",
    original:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pavlovsk_town_Pavlovsk_Park_IMG_6284_1280.jpg",
    description: "Park",
  },
  {
    preview:
      "https://www.ferra.ru/thumb/640x0/filters:quality(75)/imgs/2018/11/26/19/2794068/8e22eb583c755fc4d2e880d27b1e5b3c9baeaec6.jpg",
    original:
      "https://www.ferra.ru/thumb/640x0/filters:quality(75)/imgs/2018/11/26/19/2794068/8e22eb583c755fc4d2e880d27b1e5b3c9baeaec6.jpg",
    description: "LG",
  },
  {
    preview:
      "https://i.citrus.ua/uploads/content/product-photos/bielousova/january/10-01-1.jpg?_t=1547117197",
    original:
      "https://i.citrus.ua/uploads/content/product-photos/bielousova/january/10-01-1.jpg?_t=1547117197",
    description: "Modern",
  },
  {
    preview:
      "https://blog.allo.ua/wp-content/uploads/2020/05/q93_dd0df941cb63c4d543719d272bf2785cf93150f2d5d7edc62d32caea6f2cfde9.jpg",
    original:
      "https://blog.allo.ua/wp-content/uploads/2020/05/q93_dd0df941cb63c4d543719d272bf2785cf93150f2d5d7edc62d32caea6f2cfde9.jpg",
    description: "Laptop",
  },
  {
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Saint_Petersburg_Palace_Square_Alexander_Column_IMG_6534_1280.jpg",
    original:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Saint_Petersburg_Palace_Square_Alexander_Column_IMG_6534_1280.jpg",
    description: "Square",
  },
  {
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Saint_Petersburg_Winter_Palace_IMG_6487_1280.jpg/1280px-Saint_Petersburg_Winter_Palace_IMG_6487_1280.jpg",
    original:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Saint_Petersburg_Winter_Palace_IMG_6487_1280.jpg/1280px-Saint_Petersburg_Winter_Palace_IMG_6487_1280.jpg",
    description: "Saint Petersburg Winter Palace",
  },
  {
    preview:
      "https://androidinsider.ru/wp-content/uploads/2014/08/3_Image_Nature.jpg",
    original:
      "https://androidinsider.ru/wp-content/uploads/2014/08/3_Image_Nature.jpg",
    description: "Waterfall",
  },
  {
    preview: "https://miro.medium.com/max/643/0*UBq3H4B-Q3H570--.jpg",
    original: "https://miro.medium.com/max/643/0*UBq3H4B-Q3H570--.jpg",
    description: "Yotaphone",
  },
  {
    preview:
      "https://img.moyo.ua/img/products_desc/4673/467343_1591271430_2.jpg",
    original:
      "https://img.moyo.ua/img/products_desc/4673/467343_1591271430_2.jpg",
    description: "Blackview smartphone",
  },

  {
    preview:
      "https://3dnews.ru/assets/external/illustrations/2021/01/11/1029674/folio1.jpg",
    original:
      "https://3dnews.ru/assets/external/illustrations/2021/01/11/1029674/folio1.jpg",
    description: "Man working",
  },
  {
    preview: "https://driverunpaid.ru/wp-content/uploads/lg-g-flex-13.jpg",
    original: "https://driverunpaid.ru/wp-content/uploads/lg-g-flex-13.jpg",
    description: "Earphones",
  },
  {
    preview:
      "https://data.1freewallpapers.com/download/pixels-squares-texture-green-1280x960.jpg",
    original:
      "https://data.1freewallpapers.com/download/pixels-squares-texture-green-1280x960.jpg",
    description: "Green theme",
  },
  {
    preview:
      "https://diag38.ru/800/600/https/vita-auto.ru/upload/iblock/a31/a3163b1859b68db10231915cc52e42d2.jpg",
    original:
      "https://diag38.ru/800/600/https/vita-auto.ru/upload/iblock/a31/a3163b1859b68db10231915cc52e42d2.jpg",
    description: "Car",
  },
  {
    preview:
      "https://images.wallpaperscraft.ru/image/pikseli_krugi_gradient_128689_1280x720.jpg",
    original:
      "https://images.wallpaperscraft.ru/image/pikseli_krugi_gradient_128689_1280x720.jpg",
    description: "Purple theme",
  },
  {
    preview:
      "https://img3.akspic.ru/originals/1/9/2/4/4/144291-liniya_gorizonta-umnyj_gorod-piksel-arhitektura-noch-1280x720.jpg",
    original:
      "https://img3.akspic.ru/originals/1/9/2/4/4/144291-liniya_gorizonta-umnyj_gorod-piksel-arhitektura-noch-1280x720.jpg",
    description: "Night city",
  },
  {
    preview:
      "https://img1.akspic.ru/originals/5/6/9/9/5/159965-google-google_pixel_4-gidroresursy-piksel_4-voda-1280x720.jpg",
    original:
      "https://img1.akspic.ru/originals/5/6/9/9/5/159965-google-google_pixel_4-gidroresursy-piksel_4-voda-1280x720.jpg",
    description: "Beach",
  },
  {
    preview: "https://yamobi.ru/f/2016/img20160901151755.jpg",
    original: "https://yamobi.ru/f/2016/img20160901151755.jpg",
    description: "Acer",
  },
  {
    preview:
      "https://www.xnet.lv/globalassets/productassets/images/86273079_79870933182.jpg?preset=ProductView",
    original:
      "https://www.xnet.lv/globalassets/productassets/images/86273079_79870933182.jpg?preset=ProductView",
    description: "Fullstack engineer",
  },
  {
    preview:
      "https://c.dns-shop.ru/thumb/st4/fit/760/600/a1c751d2473b81f82f4ef1440ecae4b8/q93_1d9eb7422f1f2556817b12f57e377885159e8e03fcdc2a405e53361918c328d3.jpg",
    original:
      "https://c.dns-shop.ru/thumb/st4/fit/760/600/a1c751d2473b81f82f4ef1440ecae4b8/q93_1d9eb7422f1f2556817b12f57e377885159e8e03fcdc2a405e53361918c328d3.jpg",
    description: "Modern TVs",
  },
  {
    preview:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3MqYWQO0QiNQRgyubb19-Sg8TgDYU8W6lg&usqp=CAU",
    original:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3MqYWQO0QiNQRgyubb19-Sg8TgDYU8W6lg&usqp=CAU",
    description: "Watches",
  },
  {
    preview: "https://images.ru.prom.st/711936013_led-proektor-led-86.jpg",
    original: "https://images.ru.prom.st/711936013_led-proektor-led-86.jpg",
    description: "LED projector",
  },
  {
    preview:
      "https://3dnews.ru/assets/external/illustrations/2017/10/19/960277/sb2.jpg",
    original:
      "https://3dnews.ru/assets/external/illustrations/2017/10/19/960277/sb2.jpg",
    description: "Chuwi surbook",
  },
  {
    preview:
      "https://www.xnet.lv/globalassets/productassets/images/86273079_59311394182.jpg?preset=ProductView",
    original:
      "https://www.xnet.lv/globalassets/productassets/images/86273079_59311394182.jpg?preset=ProductView",
    description: "Communication",
  },
  {
    preview:
      "https://diag38.ru/800/600/http/ncimg0.nextcar.cn/picture/2015_04_10/e5990d1a92ec4e00cc417b5f23a9870a.jpg",
    original:
      "https://diag38.ru/800/600/http/ncimg0.nextcar.cn/picture/2015_04_10/e5990d1a92ec4e00cc417b5f23a9870a.jpg",
    description: "Cherry",
  },
  {
    preview:
      "https://upload.wikimedia.org/wikipedia/ru/8/83/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%BE-%D0%95%D0%BB%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%85%D1%80%D0%B0%D0%BC_%28%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%29.JPG",
    original:
      "https://upload.wikimedia.org/wikipedia/ru/8/83/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%BE-%D0%95%D0%BB%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%85%D1%80%D0%B0%D0%BC_%28%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%29.JPG",
    description: "Church",
  },
  {
    preview:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMlj5ZzRtAUqlnUVrl9fY88DoHgC7Y8RTsA&usqp=CAU",
    original:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMlj5ZzRtAUqlnUVrl9fY88DoHgC7Y8RTsA&usqp=CAU",
    description: "Squirrel",
  },
  {
    preview:
      "https://mobile-review.com/sadm_files/bb2fa7c655640515a6c34b1debf441c5.jpg",
    original:
      "https://mobile-review.com/sadm_files/bb2fa7c655640515a6c34b1debf441c5.jpg",
    description: "Chinese people",
  },
  {
    preview:
      "https://tv-vybor.ru/uploads/mini/img-in-article/7f/75ddc71a6572df259a6ffc6196d970.jpg",
    original:
      "https://tv-vybor.ru/uploads/mini/img-in-article/7f/75ddc71a6572df259a6ffc6196d970.jpg",
    description: "HD",
  },
];

export default galleryItems;
