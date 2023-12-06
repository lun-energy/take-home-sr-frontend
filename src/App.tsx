import * as React from "react";
import "./app.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Component as NewsletterSignup } from "./routes/NewsletterSignup";

export function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<NewsletterSignup />} />,
        ),
      )}
    />
  );
}
