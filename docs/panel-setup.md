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

---

## Ekranlar
| Ekran | Ne gösterir |
|---|---|
| Özet | 7/28 günlük oturum, WhatsApp ve form sayıları; son talepler; bugünkü takipler; SEO durumu |
| Talepler | Formspree başvuruları; arama ve CSV indirme |
| Tıklamalar | WhatsApp, telefon, teklif butonu ve form tıklamaları; günlük grafik; sayfa ve buton kırılımı |
| Performans | GA4 kanalları ve giriş sayfaları; Search Console'da son 28 gün ile önceki 28 gün karşılaştırması, sorgular ve sayfalar |
| SEO sağlığı | Site haritasındaki sayfa sayısı, llms dosyalarının tarihi ve eksik sayfaları; tüm sayfaların canlı 200 kontrolü |
| Adaylar | Apollo kişileri, aşama, son aktivite; yeni aday formu |
| Görevler | Apollo görevleri: geciken, bugün ve bu hafta; tamamla ve takip ekle |
| Linkler | GA4, Search Console, Formspree, Calendly, Vercel, Apollo ve site araçları |
