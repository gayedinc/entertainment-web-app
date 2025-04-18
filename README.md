# 🎞️ Entertainment Web App

> Film ve dizileri keşfet, ara, favorilerine ekle. Mobil uyumlu ve kullanıcı odaklı bir eğlence platformu.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

---

## 🔍 Proje Özeti

**Entertainment Web App**, kullanıcıların film ve dizileri keşfedebileceği, arayabileceği ve favorilerine ekleyebileceği modern bir web uygulamasıdır. Mobil öncelikli (mobile-first) tasarım prensibiyle geliştirilen uygulama kullanıcı deneyimini ön planda tutacak şekilde sade ve sezgisel olarak tasarlanmıştır.

Bu proje kullanıcıların film ve dizileri keşfedebileceği, arayabileceği ve kaydedilenlerine ekleyebileceği kapsamlı bir film platformu. Mobil odaklı ve modüler yapıya sahip olan projede kullanıcı deneyimini ön planda tutarak birçok teknik detayı bir araya getirdim.

---

![image](https://github.com/user-attachments/assets/5fb8ae68-cabf-478f-b40d-de570896aff6)

📂 Proje Detayları:

🔹 Sayfa yapısı: Uygulamada dört temel sekme bulunuyor:

Homepage: Trend olan filmleri ve önerilen yapımları listeler.

Movies: Sadece filmleri listeler.

TV Series: Sadece TV dizilerini listeler.

Bookmarked: Kullanıcının kaydedilenlerine eklediği film ve dizileri listeler.

🔹 Favori ekleme özelliği: Kullanıcılar film ve dizilerin sağ üst köşesindeki butonu kullanarak içerikleri kaydedilenlerine ekleyebilir. Bookmarked sekmesinde bu içeriklere erişebilir. LocalStorage kullanarak da kaydedilen dizi ve filmlerin tarayıcı kapansa bile kaybolmamasını sağladım.

📂 Projede Kullandığım Teknolojiler ve Teknikler:

🔹 Hash-based routing ile sayfaları sekmelere ayırarak URL yapısını sade ve yönetilebilir hale getirdim.

🔹 useContext kullanarak global state yönetimi sağladım ve bileşenler arası prop drilling sorununu ortadan kaldırdım.

🔹 API'den veri çekme işlemlerini useEffect ile yönettim.

🔹 Veri filtreleme ve listeleme süreçlerinde filter, find, includes ve map metodlarını kullanarak dinamik ve esnek bir yapı oluşturdum. Kullanıcılar aradıkları filme hızlıca ulaşabiliyor.

🔹 Kodun daha düzenli ve sade olmasını sağlamak için helper fonksiyonlarını ayrı bir dosyada toplayarak modüler bir yapı oluşturdum.

🔹 Mobile öncelikli (mobil-first) tasarım prensibiyle projeyi geliştirerek her ekranda en iyi kullanıcı deneyimini sunmayı hedefledim.
