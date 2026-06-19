# Sam Portfolio (Next.js)

This project now runs on Next.js with the App Router and TypeScript.

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Contact form setup

The contact form uses the React integration from `@formspree/react`.

1. Create a Formspree form
2. Install dependencies with `npm install`
3. Update the form ID in [src/components/ContactSection.tsx](src/components/ContactSection.tsx) if you want to point at a different form

Current form configuration:

```ts
const [state, handleSubmit] = useForm('mvzndjzr')
```

The form submits `name`, `email`, and `message` through Formspree and surfaces validation errors with `ValidationError`.

## Contact form setup

The contact form uses the React integration from `@formspree/react`.

1. Create a Formspree form.
2. Install dependencies with `npm install`.
3. Update the form ID in `src/components/ContactSection.tsx` if needed.
