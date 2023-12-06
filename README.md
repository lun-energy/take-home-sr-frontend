## The challenge

One of the key first steps Lun must take as we expand to new markets is to capture relevant installer leads early, so by the time we launch, we have a list of interested installers to reach out to. Your task is to implement a newsletter signup flow on a landing page that allows us to capture highly interested leads.

## Figma file

**Important:** Be careful not to import the Figma file into your employers Figma team.

- Figma file: [https://drive.google.com/file/d/1_fxlItL7csU_cPQX9JqKFs4qGsFt9v_O/view](https://drive.google.com/file/d/1_fxlItL7csU_cPQX9JqKFs4qGsFt9v_O/view)
- How to import the file into your \_personal\_ team: [https://youtu.be/XsRkzTjGlPY](https://youtu.be/XsRkzTjGlPY)

## Instructions

Clone or download the repo (don't fork) and implement the mockup from the Figma file using the best practises you know.

Use any method of styling you prefer. The app is currently set up with TailwindCSS, but it's based on `create-react-app`, so setting up something else should be relatively straight forward.

Feel free to use external libraries where/if it makes sense. For instance, you might want to implement client side validation using a library, or you might want to use the built in constraint validation API. Up to you.

Ideally, we'd like to see your progression through commits - structure the solution as you would structure a feature branch in a real project. Describe your thought process, assumptions, tradeoffs and things you would do differently in PROGRESS.md.

When you're done, send us your solution in a zip file (don't forget the .git folder).

Please let us know how long the challenge takes you. We're not looking for how speedy or lengthy you are. It's just really to give us a clearer idea of what you've produced in the time you decided to take. Spend at most a day on it.

## Folder Structure

```
·
└─ src/
   ├─ components/
   │    Generic, reusable components. Feel free to structure
   │    however you prefer.
   │
   ├─ locales/
   │    Translations for the app.
   │
   ├─ routes/
   │    Routes for the app. You'll primarily work in
   │    `NewsletterSignup.tsx`.
   │
   └─ services/
        You might want to implement API interaction here or
        however else you prefer to structure it.

```

## Running the app

| Command                  | Description                            |
| ------------------------ | -------------------------------------- |
| `npm run start`          | Run the app in development mode        |
| `npm run test:component` | Runs the Cypress component tests.      |
| `npm run test:unit`      | Runs the Jest unit test in watch mode. |
| `npm run typecheck`      | Typecheck the app                      |
