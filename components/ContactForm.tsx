"use client";

import { useState, type FormEvent } from "react";

type Labels = { type: string; types: string[]; name: string; email: string; zone: string; zoneHint: string; message: string; submit: string; note: string; subject: string };

/** The site is a static export: the form prepares an email in the visitor's mail app. */
export function ContactForm({ labels }: { labels: Labels }) {
  const [type, setType] = useState(labels.types[0]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${labels.type}: ${type}`,
      `${labels.name}: ${data.get("name") ?? ""}`,
      `${labels.email}: ${data.get("email") ?? ""}`,
      `${labels.zone}: ${data.get("zone") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:dannkamenan@hotmail.com?subject=${encodeURIComponent(`${labels.subject} — ${type}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <fieldset>
        <legend>{labels.type}</legend>
        <div className="choice-row">
          {labels.types.map((option) => (
            <label key={option} className={option === type ? "choice active" : "choice"}>
              <input type="radio" name="type" value={option} checked={option === type} onChange={() => setType(option)} />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field-row">
        <label>{labels.name}<input type="text" name="name" autoComplete="name" required /></label>
        <label>{labels.email}<input type="email" name="email" autoComplete="email" required /></label>
      </div>
      <label>{labels.zone} <span className="field-hint">{labels.zoneHint}</span><input type="text" name="zone" /></label>
      <label>{labels.message}<textarea name="message" rows={5} required /></label>
      <button className="button primary" type="submit">{labels.submit} →</button>
      <p className="field-hint">{labels.note}</p>
    </form>
  );
}
