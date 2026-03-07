# CSS Kararlari

## 1. Breakpoint Secimi
- 640px ve 1024px kullandim cunku mobil, tablet ve masaustu ayrimini net yapar.
- 640px'de header ve hakkimda yataya geciyor, 1024px'de icerik genisligi sinirlaniyor ve grid 3 sutuna cikiyor.

## 2. Layout Tercihleri
- Header icin Flexbox sectim; hizalama ve wrap kontrolu kolay.
- Proje kartlari icin Grid sectim; esnek sutun yapisi ve kartlari hizli dizmek icin uygun.
- auto-fit kullandim; kartlar uygun genislikte otomatik satira yayiliyor.

## 3. Design Tokens
- Mavi agirlikli bir palet sectim; sade ve akademik bir gorunum sagliyor.
- Spacing skalasini 4px tabanli olceklerle belirledim; tutarli bosluklar olusuyor.
- Fluid typography icin clamp degerlerini kucukten buyuge akici artacak sekilde ayarladim.

## 4. Responsive Stratejiler
- Mobile-first uyguladim; temel stiller mobil icin yazildi, genis ekranlarda media query ile gelistirildi.
- Header, hakkimda yerlesimi, form butonu ve proje grid breakpoints'de degisiyor.
- Gorsellerde max-width ve object-fit kullandim, boyutlar ekrana gore bozulmadan uyum sagliyor.
