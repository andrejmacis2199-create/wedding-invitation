# Свадебное приглашение · Андрей & Виктория

Сайт-приглашение на 7 августа 2026 года. Сделан на Next.js 15 (App Router) + Tailwind CSS 4 + Framer Motion.

## Запуск локально

```bash
npm install
npm run dev
```

Открыть в браузере: [http://localhost:3000](http://localhost:3000).

## Структура

- `src/app/page.tsx` — главная страница (Hero, секции).
- `src/app/layout.tsx` — корневой layout, шрифты, метаданные.
- `src/app/globals.css` — глобальные стили, цветовая палитра.
- `src/components/` — компоненты секций (Welcome, CountdownTimer, LocationMap, Timeline, DressCode, GiftPreferences, ImportantInfo, RSVPSection) и декоративные SVG (`Ornaments.tsx`, `SectionAnchor.tsx`).
- `public/photos/` — фотографии (главное фото и фото локации).

## Деплой на Vercel (бесплатно)

Vercel — нативная платформа для Next.js. Бесплатный план Hobby полностью покрывает приглашение, выдаёт публичный поддомен `*.vercel.app` с HTTPS.

### Шаги

1. **Установите Git** (если ещё нет): https://git-scm.com/download/win.
2. **Заведите аккаунт на GitHub** (или войдите) и создайте новый пустой репозиторий, например `wedding-invitation` (private — приватный).
3. В корне проекта (`C:\CursorProjects\personal\wedding-invitation`) выполните:

   ```powershell
   git init
   git add .
   git commit -m "Wedding invitation site"
   git branch -M main
   git remote add origin https://github.com/<ВАШ_USER>/wedding-invitation.git
   git push -u origin main
   ```

4. **Зарегистрируйтесь** на [vercel.com](https://vercel.com) через «Continue with GitHub».
5. На дашборде Vercel: **Add New → Project** → выберите репозиторий `wedding-invitation` → **Import**.
6. Vercel автоматически распознает Next.js. Ничего не меняйте, нажмите **Deploy**.
7. Через 1–2 минуты получите публичный URL, например:
   - `https://wedding-invitation-<ВАШ_USER>.vercel.app` — основной адрес;
   - `https://wedding-invitation-<хэш>.vercel.app` — preview-адрес каждого деплоя.
8. В **Settings → Domains** можно сократить поддомен до красивого, например `andrey-victoria.vercel.app` (если свободно).
9. Любой `git push origin main` будет автоматически обновлять сайт за ~1 минуту.

### Свой домен (опционально, платно)

- Зарегистрировать `.ru` — около 200 ₽/год на reg.ru. Зарубежные `.com` / `.love` / `.wedding` — на namecheap, ~$10–15/год.
- В Vercel: **Settings → Domains → Add** → ввести домен (например, `andreyivictoria.ru`).
- Vercel покажет DNS-записи (A 76.76.21.21 или CNAME `cname.vercel-dns.com`).
- Прописать эти записи в панели регистратора. Через 5–30 минут домен заработает с автоматическим HTTPS.

> Бесплатные домены (.tk, .ml через Freenom) сейчас нестабильны — не рекомендую.

### Альтернатива: Netlify

Аналогичный сценарий — даёт `your-name.netlify.app`. Также бесплатно. Подключение тоже через GitHub.

### Альтернатива: Cloudflare Pages

Бесплатно, очень быстрая CDN, но для Next.js нужен адаптер `@cloudflare/next-on-pages`. Сложнее, чем Vercel, без преимуществ для статичного приглашения.

## Изменения текста и фото

- Имена / дата / адрес — в [src/app/page.tsx](src/app/page.tsx) и компонентах.
- Телефон организатора — `organizerPhone` в [src/components/ImportantInfo.tsx](src/components/ImportantInfo.tsx).
- Ссылка на анкету гостя (Яндекс.Формы) — пропс `formLink` для `<RSVPSection />` в [src/app/page.tsx](src/app/page.tsx).
- Главное фото — `public/photos/IMG_0861.JPG`, при замене на новое сохраните ту же раскладку. Положение кадра регулируется `backgroundPosition` в hero-блоке `page.tsx`.
- Фото локации — `public/photos/TWXkjOItEUgf--2nkk_gMgJsAJB6zZWvDeHIUPy4MyPdF0dGGasXME9wcer7ZnKj8E0OA3PCvjmXrYlnlt2cH05w.jpg`.

## Production-сборка локально (проверка перед деплоем)

```bash
npm run build
npm run start
```
