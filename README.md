# 🎞️ Entertainment Web App Projesi

Bu proje kullanıcıların film ve dizileri keşfedebileceği, arayabileceği ve kaydedilenlerine ekleyebileceği kapsamlı bir film platformu. Mobil odaklı ve modüler yapıya sahip olan projede kullanıcı deneyimini ön planda tutarak birçok teknik detayı bir araya getirdim.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)


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
