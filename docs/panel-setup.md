# LondraDepo Panel — kurulum

Panel adresi **https://www.londradepo.com/panel**.
- Şifreyle korunur; şifre olmadan hiçbir sayfası açılmaz.
- Google'da indexlenmez: `noindex` başlığı ve meta etiketi var, site haritasında ve llms dosyalarında yer almaz.
- Her bölüm kendi anahtarı eklenince çalışır. Anahtar eksikse o bölüm "bağlı değil" yazar ve panel çalışmaya devam eder.

Anahtarları **sohbette paylaşmayın**. Hepsi Vercel'e girilir:
1. **Vercel → londra-depo projesi → Settings → Environment Variables** sayfasını açın.
2. Her değişkeni **Production** ortamına ekleyin.
3. Ekledikten sonra **Deployments → en son yayın → Redeploy** ile yeniden yayınlayın.

---

## 1. Giriş (zorunlu)
| Değişken | Değer |
|---|---|
| `PANEL_PASSWORD` | Panele girerken kullanacağınız şifre (en az 12 karakter) |
| `PANEL_SECRET` | 32+ karakter rastgele metin. Örnek üretmek için: https://www.uuidgenerator.net adresinden iki UUID'yi yan yana yapıştırın. Değiştirirseniz herkesin oturumu kapanır. |

Oturum 7 gün açık kalır. Çıkmak için sol menüdeki **Çıkış**'a basın.

## 2. Performans ve tıklamalar (Google Analytics + Search Console)
1. https://console.cloud.google.com adresinde bir proje açın (ör. "londradepo-panel").
2. Bu projede şu iki API'yi etkinleştirin: **APIs & Services → Library**:
   - **Google Analytics Data API**;
   - **Google Search Console API**.
3. Servis hesabı oluşturun:
   1. **IAM & Admin → Service Accounts → Create service account**'a girin; ad olarak "panel" yazın.
   2. Oluşan hesabın **Keys → Add key → JSON** adımıyla anahtar dosyasını indirin.
4. Servis hesabının e-posta adresini (…@….iam.gserviceaccount.com) iki yere ekleyin:
   - **GA4:** Admin → Property access management → **Viewer**;
   - **Search Console:** Ayarlar → Kullanıcılar ve izinler → Kullanıcı ekle → **Kısıtlı**.
5. Vercel'e şu değişkenleri ekleyin:

| Değişken | Değer |
|---|---|
| `GOOGLE_SERVICE_ACCOUNT_JSON` | İndirdiğiniz JSON dosyasının **tüm içeriği** (tek satır olarak yapıştırılabilir) |
| `GA4_PROPERTY_ID` | `538800744` |
| `GSC_SITE` | `sc-domain:londradepo.com` |

6. **Tıklamaların "buton konumu" kırılımı için (isteğe bağlı):**
   1. GA4 → Admin → Custom definitions → Create custom dimension'a girin.
   2. Ad: "Click source", kapsam (scope): Event, parametre: `click_source`.
   3. Aynı şekilde `page_group` parametresi için de bir boyut oluşturun.

GA4 yalnızca çerez onayı veren ziyaretçileri sayar. Panelde gördüğünüz tıklamalar gerçek sayının altındadır.

### Servis hesabı yoksa: Claude anlık görüntüsü
Servis hesabı eklenmeden de Performans, Tıklamalar ve Özet sayfaları dolar.
- Claude, Google Analytics ve Search Console bağlantılarından (MCP) veriyi çeker.
- Veriyi panelin özel veritabanına yazar; repoya yazmaz, çünkü repo herkese açık.
- Sayfaların üstünde anlık görüntünün tarihi görünür.
- Yenilemek için Claude'a **"analitiği yenile"** yazmanız yeterli.

Bunun için Vercel'de `PANEL_SNAPSHOT_TOKEN` değişkeni (32+ karakter) bulunmalı. Claude bu değişkeni kendisi ekler; değeri kimseyle paylaşılmaz.

Servis hesabı (`GOOGLE_SERVICE_ACCOUNT_JSON`) eklenirse panel otomatik olarak canlı veriye geçer ve anlık görüntü kullanılmaz.

## 3. Gelen talepler (Formspree)
1. Formspree'ye giriş yapın.
2. **Account → Settings → API** bölümünden bir API anahtarı oluşturun. Submissions API, Formspree'nin API destekleyen planlarında açıktır; anahtar sekmesi yoksa planınız desteklemiyordur.
3. Vercel'e ekleyin: `FORMSPREE_API_KEY` = anahtar.
4. İsteğe bağlı: `FORMSPREE_FORM_ID` (varsayılan değer `xoejvawy`).

## 4. Adaylar ve görevler (Apollo.io)
1. Apollo'da **Settings → Integrations → API → Create new key** adımıyla bir anahtar oluşturun. "Set as master key" seçeneğini işaretleyin; görev ve kişi yazmak için gerekir.
2. Vercel'e ekleyin: `APOLLO_API_KEY` = anahtar.
3. İsteğe bağlı: görevlerin sahibi ekipteki ilk kullanıcı değilse `APOLLO_USER_ID` ekleyin.

Panelden yapılabilenler:
- yeni aday ekleme;
- aşama değiştirme;
- görevi tamamlandı işaretleme;
- takip görevi ekleme.

Kredi harcayan işlemler (e-posta açma, zenginleştirme) **panelde yoktur**.

## 5. Müşteri bulma sihirbazı (veritabanı)
Sihirbaz bulunan şirketleri kalıcı olarak saklamak için ücretsiz bir Upstash Redis veritabanı kullanır. Aday verileri yalnızca bu veritabanında ve Apollo'da tutulur, koda yazılmaz.
1. **Vercel → londra-depo projesi → Storage** sekmesini açın.
2. **Create Database → Upstash → Redis** seçin. Bölge olarak **London (eu-west-2)** önerilir. Ücretsiz planı seçip oluşturun.
3. Bağlantı ekranında **londra-depo** projesini ve **Production** ortamını işaretleyip **Connect**'e basın. Vercel `KV_REST_API_URL` ve `KV_REST_API_TOKEN` değişkenlerini kendisi ekler.
4. **Deployments → en son yayın → Redeploy** ile yeniden yayınlayın.

### Kullanım
1. **Müşteri sihirbazı → 1. Hedefi seç** bölümünde şunları seçin:
   - segment (12 segment, ticari öncelik sırasıyla);
   - isteğe bağlı ürün kategorisi;
   - bölge ("Segmente göre" önerilir);
   - büyüklük ve aranacak şirket sayısı.
2. **Görev metnini oluştur → Kopyala** adımlarını izleyin. Birden fazla segment seçtiyseniz adet, önerilen dağılıma göre bölünür.
3. ChatGPT'de **Agent** modunda metni yapıştırıp gönderin.
4. Ajanın verdiği CSV'yi **3. Sonucu içeri al** kutusuna yapıştırın.
5. **Bugün ilk temas: en değerli 10** kartından ya da listeden seçtiklerinizi **Apollo'ya aktar**'a basarak gönderin.
   - Apollo'da kişi açılır ve segment ile öncelik etiketleri eklenir.
   - İlk e-posta görevi önceliğe göre tarihlenir: A ertesi iş günü, B 3 iş günü, C 7 iş günü.
   - Görev notunda karar verici, satış açısı ve tahmini depolama geliri yer alır. Kredi harcamaz.
6. Görüştükçe durumları (İletişime geçildi / Olumlu / Elendi) güncelleyin. **Segment performansı** tablosu hangi segmentin satışa döndüğünü gösterir.

### Öncelik puanı (ticari değer)
| Bileşen | Ağırlık | Ne ölçer |
|---|---|---|
| Uygunluk | %45 | İngiltere kanıtı, palet/koli ürün, e-ticaret varlığı, İngiltere deposu olmaması, bölge, büyüklük, kaynaklı e-posta. Forwarder'larda: İngiltere deposu olmaması ve hacim kanıtı. |
| Hacim değeri | %35 | Tahmini palet, yıllık konteyner, aylık sipariş, düzenli akış |
| Segment önceliği | %20 | İş analizindeki segment puanı (65–97) |

- **A:** 75 ve üzeri; **B:** 60–74; **C:** 60'ın altı.
- **Tahmini depolama geliri:** palet tahmininin alt sınırı × £15.17/ay. Bu tutar £3.50/palet/hafta fiyatından hesaplanır, yalnızca depolamayı kapsar ve KDV hariçtir.
- Diğer hizmetlere fiyat konmaz.

### İlk 100 aday için önerilen dağılım
Bu dağılım iş analizine dayalı bir tahmindir.

| Grup | Hedef |
|---|---|
| Türk ihracatçılar | 30 |
| Amazon UK | 20 |
| Shopify / DTC | 15 |
| UK ithalatçılar | 15 |
| Ambalaj / otomotiv | 12 |
| Freight forwarder (partner) | 8 |

Panel en çok eksik olan grubu **Sıradaki önerilen arama** düğmesiyle gösterir.

Otomatik arama (panelden "Ara" butonu) sonraki aşamada gelecek; bunun için bir yapay zekâ API anahtarı gerekecek.

## 6. WebContact sihirbazı (iletişim formları)
Ajan, şirketlerin web sitesindeki iletişim formunu şirkete özel kısa bir mesajla doldurur. Gönderen bilgileri sabittir: **Yusuf Barış, LondraDepo Operations Manager**, support@londradepo.com, +44 7554 195190, londradepo.com. Yanıtlar support@londradepo.com adresine gelir.

Müşteri sihirbazıyla aynı veritabanını ve aynı aday listesini kullanır, ek bir kurulum gerekmez. Aynı şirkete iki kez yazılmaz.

### Kullanım
1. Kaynağı seçin:
   - **1a. Müşteri sihirbazı listesinden (önerilen):** daha önce araştırılmış, henüz temas edilmemiş A ve B öncelikli şirketler, en değerliden başlayarak.
   - **1b. Yeni araştırma + form:** segment ve bölge seçilir; ajan önce şirketleri bulur, sonra formlarını doldurur.
2. Kaç form gönderileceğini (10, 20 veya 30) ve onay biçimini seçin. Varsayılan: ajan ilk 2 formu göndermeden önce size gösterir.
3. **Görev metnini kopyala** ile metni alın, ChatGPT'de **Agent** modunda yapıştırıp gönderin. İlk formlarda ajan sizden onay ister.
4. Ajanın verdiği CSV kaydını **3. Ajanın kaydını içeri al** kutusuna yapıştırın.
   - Gönderilen şirketler müşteri listesinde "İletişime geçildi" olur.
   - Yeni araştırmadan gelen şirketler müşteri listesine de eklenir.
5. **Elle gönderilecekler:** CAPTCHA isteyen veya hata veren formlar burada listelenir.
   1. **Formu aç**'a basın.
   2. **Mesajı kopyala** ile mesajı alıp forma yapıştırın ve gönderin.
   3. **Gönderdim**'e basın.
6. **Takip zamanı gelenler:** formu 5 iş günü önce gönderilmiş ve yanıt gelmemiş şirketler. Bu şirketler için Apollo'da ertesi iş günüyle tarihli bir takip görevi açılır; kredi harcamaz.
7. Yanıt geldikçe şirketin durumunu güncelleyin (Yanıt geldi / Olumlu / İlgilenmiyor). "Olumlu" ve "İlgilenmiyor" müşteri listesine de yansır.

### İş listesi ve raporlar
WebContact sayfasında üç bölüm var: **İş listesi**, **Rapor** ve **Çalıştır**.

**İş listesi:** her şirket kendi durumuna göre otomatik olarak bir işe düşer.

| İş | Ne zaman |
|---|---|
| Yanıtı değerlendir | Şirket yanıt verdi |
| Görüşme / teklif | Olumlu dönüş geldi |
| Takip et | Form ya da e-posta ulaştı, 5 iş günü geçti, yanıt yok |
| E-posta gönder | Formu yok, kurumsal e-posta kayıtlı. "E-posta taslağını aç" hazır mesajı kendi e-posta programınızda açar. Gönderdikten sonra "Gönderdim"e basın. |
| Birlikte gönder (doğrulama) | CAPTCHA veya güvenlik kodu var |
| Hatayı incele | Site hata verdi, teyit gelmedi ya da telefon biçimi kabul edilmedi |
| Başka kanal bul | Form da e-posta da yok |
| Yanıt bekleniyor | Mesaj ulaştı, takip zamanı gelmedi |
| Kapandı | Atlandı ya da ilgilenmiyor |

- Her şirketin **geçmişi** tutulur: incelendi, form gönderildi, doğrulama engeli, hata, e-posta gönderildi, takip, yanıt ve notlar.
- Her şirkete not ekleyebilirsiniz (ör. "Telefonla arandı").

**Rapor:**
- Gün / Hafta / Ay seçilir; ok düğmeleriyle önceki ve sonraki döneme geçilir.
- Sayılar: incelenen, ulaşılan, form, e-posta, doğrulama, hata, formsuz, atlandı, takip, yanıt.
- Haftalık ve aylık görünümde günlük grafik vardır.
- Dönemde yapılan her işin listesi ve WhatsApp ya da e-postaya yapıştırılabilir bir özet metin bulunur.

### Telefon formatı
Bazı formlar +44'lü İngiltere numarasını kabul etmez: "+" işaretine, boşluğa ya da hane sayısına takılır. Ajan bu durumda şunları yapar:

1. Önce alanın örneğine ve karakter sınırına bakar.
2. Ülke kodu ayrı bir listeden seçiliyorsa United Kingdom (+44) seçer ve numara alanına 7554195190 yazar.
3. Değilse şu biçimleri sırayla dener:

| Sıra | Biçim |
|---|---|
| 1 | +44 7554 195190 |
| 2 | +447554195190 |
| 3 | +44-7554-195190 |
| 4 | 00447554195190 |
| 5 | 447554195190 |
| 6 | 07554 195190 |
| 7 | 07554195190 |
| 8 | 7554195190 |
| 9 | 0044 7554 195190 |

4. Hiçbir biçim kabul edilmezse:
   - telefon alanı isteğe bağlıysa alanı boş bırakır;
   - zorunluysa formu göndermez ve "Telefon formatı kabul edilmedi" olarak işaretler. Bu formlar "Elle gönderilecekler" listesine düşer. Listede her biçim tek tıkla kopyalanabilir.
5. Yalnızca Türkiye numarası kabul eden zorunlu alanlara numara uydurmaz.

### Doğrulama engelleri (CAPTCHA / güvenlik kodu)
Ajan, doğrulama isteyen bir formda formu doldurur ama göndermez. Doğrulama şunlardan biri olabilir: reCAPTCHA, hCaptcha, Cloudflare kontrolü, resimdeki güvenlik kodu, matematik sorusu, SMS/e-posta kodu ya da üyelik şartı. Ajan formu kaydeder ve kayıt şu bilgileri içerir:
- engelin türü;
- nerede takıldığı;
- hazır mesaj;
- form adresi;
- kaçıncı deneme olduğu.

Bu formlar panelde **Doğrulama engelleri** listesinde ayrıca tutulur; hiçbir kayıt kaybolmaz. Listedeki seçenekler:
1. **Birlikte gönderme görev metni:** ajan her formu yeniden doldurur. Doğrulama adımında durur ve tarayıcının kontrolünü size verir. Siz doğrulamayı çözünce formu gönderir ve teyidi kaydeder. Her form için onayınızı ister.
2. **CSV indir:** yalnız engellenen formların listesi.
3. **Gönderdim / Vazgeç:** formu elle gönderdiyseniz ya da bırakmak istiyorsanız işaretleyin.

Aynı şirket tekrar içe aktarılırsa deneme sayısı artar. Form gönderilene kadar şirket listede kalır.

### Ajanın uyduğu kurallar
- CAPTCHA'yı geçmeye çalışmaz. Formu göndermez, "elle gönder" olarak işaretler.
- E-posta göndermez. Formu olmayan şirketin yalnızca e-posta adresini kaydeder.
- "Satış mesajı kabul etmiyoruz" yazan formlara ve iş başvurusu, şikâyet ya da destek formlarına göndermez.
- Bülten ve pazarlama onay kutularını işaretlemez. Yalnızca zorunlu gizlilik onayını işaretler.
- Her şirkete en fazla bir kez gönderir.
- Mesaj yalnızca doğrulanmış bilgileri içerir: Essex deposu, palet başına haftada £3.50 + KDV'den başlayan fiyat, asgari hacim yok.
- Her mesajın sonunda bir çıkma cümlesi vardır.

---

## Ekranlar
| Ekran | Ne gösterir |
|---|---|
| Özet | 7/28 günlük oturum, WhatsApp ve form sayıları; son talepler; bugünkü takipler; SEO durumu |
| Talepler | Formspree başvuruları; arama ve CSV indirme |
| Tıklamalar | WhatsApp, telefon, teklif butonu ve form tıklamaları; günlük grafik; sayfa ve buton kırılımı |
| Performans | GA4 kanalları ve giriş sayfaları; Search Console'da son 28 gün ile önceki 28 gün karşılaştırması, sorgular ve sayfalar |
| SEO sağlığı | Site haritasındaki sayfa sayısı, llms dosyalarının tarihi ve eksik sayfaları; tüm sayfaların canlı 200 kontrolü |
| Müşteri sihirbazı | Segment ve bölgeye göre ajan görev metni; ajan sonucunu içe aktarma; öncelik puanı (A/B/C) ve tahmini depolama geliri; en değerli 10; ilk 100 dağılımı; segment performansı; Apollo'ya aktarma; segmente göre e-posta şablonları |
| WebContact sihirbazı | Şirket iletişim formlarını Yusuf Barış adına dolduran ajan görev metni; kaydı içe aktarma; elle gönderilecekler; 5 iş günü sonra takip; yanıt durumu; örnek mesajlar |
| Adaylar | Apollo kişileri, aşama, son aktivite; yeni aday formu |
| Görevler | Apollo görevleri: geciken, bugün ve bu hafta; tamamla ve takip ekle |
| Linkler | GA4, Search Console, Formspree, Calendly, Vercel, Apollo ve site araçları |
