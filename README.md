# 🎞️ Entertainment Web App

> Film ve dizileri keşfet, ara, favorilerine ekle. Mobil uyumlu ve kullanıcı odaklı bir eğlence platformu.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Proje Özeti

**Entertainment Web App** kullanıcıların film ve dizileri keşfedebileceği, arayabileceği ve favorilerine ekleyebileceği modern bir web uygulamasıdır. Mobil öncelikli (mobile-first) tasarım prensibiyle geliştirilen uygulama kullanıcı deneyimini ön planda tutacak şekilde sade ve sezgisel olarak tasarlanmıştır.

## 🧭 Uygulama Akışı

🔹 Uygulama dört temel sekmeden oluşmaktadır. Her biri belirli bir içerik türünü kullanıcıya sunmak üzere yapılandırılmıştır:

Homepage: Trend olan filmleri ve önerilen yapımları listeler. Kullanıcıyı karşılayan ana sayfadır.

![image](https://github.com/user-attachments/assets/36a88766-ba18-49e5-9d40-49b36b079764)

Movies: Sadece film kategorisindeki içerikleri gösterir.

![image](https://github.com/user-attachments/assets/2ec71a19-a1a3-4885-8c62-761f1d46e2df)

TV Series: Dizi kategorisine ait içerikleri listeler.

![image](https://github.com/user-attachments/assets/9b0e82c8-094d-4f71-8e0d-777be9cfa013)

Bookmarked: Kullanıcının favorilerine eklediği yapımları saklar ve listeler.

![image](https://github.com/user-attachments/assets/65840f8a-1816-4d0a-8e15-95dbda227b4a)

## 🛠️ Kullanılan Teknolojiler

🔹 React: Bileşen tabanlı yapı ile modüler ve sürdürülebilir bir mimari sağlandı. Kullanıcı arayüzü dinamik olarak oluşturuldu.

🔹 JavaScript (ES6+): Modern JavaScript sözdizimi ile etkileşimli davranışlar ve veri işleme mantığı yazıldı.

🔹 HTML5 & CSS3: Semantik HTML elementleri ile yapısal bütünlük sağlandı. CSS ile responsive ve mobil öncelikli bir tasarım geliştirildi.

🔹 Hash-based Routing: URL üzerinde # işaretinden sonra gelen yapılarla sayfa yönlendirme sağlandı. Böylece SPA mantığı desteklendi.

🔹 LocalStorage: Kullanıcının favorilere eklediği film ve dizileri tarayıcıda kalıcı olarak saklamak için kullanıldı. Sayfa yenilense veya tarayıcı kapansa dahi veriler korunmaya devam eder.

🔹 Helper Fonksiyon: Uygulama içi sayfa yönlendirmesini sade bir yapıyla yönetmek için `helper.jsx` dosyasında URL'ye göre uygun bileşeni döndüren bir yönlendirme fonksiyonu (`getPage`) tanımlandı. Bu yapı sayesinde React Router gibi bir kütüphane kullanmadan hash tabanlı routing sistemine uygun basit ve anlaşılır bir geçiş mekanizması oluşturulmuş oldu.

🔹 Veri Filtreleme ve Listeleme: filter, find, includes ve map gibi dizisel JavaScript metodları kullanılarak kullanıcı aramalarına göre dinamik içerik gösterimi sağlandı.

🔹 Mobile-First Tasarım: Tasarım süreci mobil cihazları önceliklendirerek planlandı. Tüm bileşenler küçük ekranlardan büyük ekranlara ölçeklenecek biçimde düzenlendi.

🔹 Kullanıcı Bildirimleri (Toast): Kullanıcıların yaptığı işlemleri daha görünür ve anlaşılır hale getirmek amacıyla `react-hot-toast` kütüphanesini kullanarak `toast.success` mesajları gösterdim. Örneğin bir film veya dizi favorilere eklendiğinde ya da kaldırıldığında ekranın üst kısmında işlemle ilgili kısa bir bilgilendirme mesajı görünür. Bu sayede kullanıcı yaptığı işlemin başarılı bir şekilde gerçekleştiğini hemen fark edebilir. Bu küçük ama etkili detay genel kullanıcı deneyimini güçlendirmeyi hedefliyor.

## 🧠 State Yönetimi
🔹 Uygulamada hem global hem de local düzeyde state yönetimi gerçekleştirdim. React'ın useContext ve useState hook'larını kullandım.

> 💡 **State Yönetimi**
> 
> 🔹 *Global State (`useContext`):*  
> Uygulama genelinde erişilmesi gereken veriler için `useContext` yapısını kullandım. Bu sayede bileşenler arasında prop drilling yapmadan, global state'e erişim sağladım. Favorilere ekleme ve silme gibi işlemler bu yapı üzerinden yönetildi.
> 
> 🔹 *Local State (`useState`):*  
> Arama kutusu gibi yalnızca belirli bileşenlere özel verileri `useState` ile yönettim. Böylece bileşenler kendi içinde bağımsız çalışabilir hale geldi.

## 🌐 Canlı Link

Uygulamayı canlı olarak aşağıdaki link üzerinden görüntüleyebilirsiniz:

🔗 [https://entertainment-web-app-liart.vercel.app](https://entertainment-web-app-liart.vercel.app)

## 🗂️ Proje Yapısı

```bash
📦 src
 ┣ 📂 assets
 ┃ ┗ 📂 css
 ┃   ┣ 📄 main.css           # Ana stillerin tanımlandığı dosya
 ┃   ┗ 📄 reset.css          # Tarayıcı varsayılan stillerini sıfırlayan dosya
 ┣ 📂 components
 ┃ ┣ 📄 BookmarkedMovies.jsx # Favorilere eklenen içerikleri listeleyen bileşen
 ┃ ┣ 📄 Header.jsx           # Uygulama başlığı ve navigasyonu
 ┃ ┣ 📄 HomePage.jsx         # Anasayfa bileşeni (trend içerikler)
 ┃ ┣ 📄 Movies.jsx           # Sadece filmleri listeleyen bileşen
 ┃ ┣ 📄 Recommended.jsx      # Önerilen içerikleri yöneten bileşen
 ┃ ┗ 📄 TvSeries.jsx         # Sadece dizileri listeleyen bileşen
 ┣ 📄 App.jsx                # Ana uygulama yapısı ve sayfa yönlendirmesi
 ┣ 📄 Svg.jsx                # Tüm SVG ikonlarının yönetildiği bileşen
 ┣ 📄 helper.jsx             # URL'ye göre doğru sayfa bileşenini döndüren yönlendirme fonksiyonu
 ┣ 📄 main.jsx               # Uygulamanın React DOM'a bağlandığı giriş noktası
