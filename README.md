  EcoCampus – Sürdürülebilir Kampüs Pazaryeri

Bu proje, Konya Gıda ve Tarım Üniversitesi Yazılım Mühendisliği Bölümü
YMH3007 Fullstack Web ve Mobil Uygulama Geliştirme dersi kapsamında
final projesi olarak geliştirilmiştir.

1. PROJE TANIMI

EcoCampus; üniversite öğrencilerinin kullanmadıkları kitap, ders materyali ve
çeşitli eşyaları satabilecekleri veya ücretsiz olarak bağışlayabilecekleri
bir kampüs pazaryeri uygulamasıdır.

Projenin amacı, dönem boyunca öğrenilen teknolojileri kullanarak
uçtan uca (fullstack) çalışan bir sistem geliştirmektir.

Uygulama 3 katmanlı mimari yapıya sahiptir:
- Backend API
- Web Yönetim Paneli
- Mobil Uygulama

2. KULLANILAN TEKNOLOJİLER

BACKEND
- Node.js
- Express.js
- PostgreSQL
- MVC (Model – View – Controller) mimarisi
- JWT (JSON Web Token) ile kimlik doğrulama
- Bcrypt ile parola şifreleme
- .env ile ortam değişkenleri yönetimi

 FRONTEND WEB (Yönetim Paneli)
- React
- Vite
- React Router
- Axios

FRONTEND MOBİL (Ana Uygulama)
- React Native
- Expo
- FlatList
- SafeAreaView


3. KLASÖR YAPISI

ecocampus/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   └── package.json
├── web/
│   └── src/
├── mobile/
│   └── App.js
└── README.md

 4. KURULUM VE ÇALIŞTIRMA

BACKEND
bash
cd backend
npm install
npm start


Backend uygulaması varsayılan olarak  
http://localhost:3000 adresinde çalışır.


 WEB (Yönetim Paneli)

bash
cd web
npm install
npm run dev

Web uygulaması varsayılan olarak  
http://localhost:5173 adresinde çalışır.

MOBİL UYGULAMA

bash
cd mobile
npm install
npx expo start


Mobil uygulama Expo Go kullanılarak Android veya iOS cihazlarda
çalıştırılabilir.

5. SİSTEM ÖZELLİKLERİ

- Kullanıcı kayıt ve giriş işlemleri
- JWT tabanlı kimlik doğrulama
- Ürün (ilan) listeleme
- 0 TL olan ürünler için **“Bağış”** etiketi
- Web ve Mobil uygulamalar arasında veri senkronizasyonu
- PostgreSQL veritabanı kullanımı

