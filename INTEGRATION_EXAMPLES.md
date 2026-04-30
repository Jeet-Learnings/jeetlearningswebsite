# Real-World Integration Examples

## Example 1: Homepage Hero Section

### Before:
```tsx
export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Discover Your Perfect Career Path
        </h1>
        <p className="text-xl mb-8">
          Expert guidance for your future success
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold">
          Get Started Today
        </button>
      </div>
    </section>
  );
}
```

### After:
```tsx
"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

export function HeroSection() {
  const title = useTranslatedContent("Discover Your Perfect Career Path");
  const subtitle = useTranslatedContent("Expert guidance for your future success");
  const buttonText = useTranslatedContent("Get Started Today");

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
```

---

## Example 2: Career Card Component

### Before:
```tsx
interface CareerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function CareerCard({ title, description, icon }: CareerCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
        Learn More
      </button>
    </div>
  );
}
```

### After:
```tsx
"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

interface CareerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function CareerCard({ title, description, icon }: CareerCardProps) {
  const translatedTitle = useTranslatedContent(title);
  const translatedDescription = useTranslatedContent(description);
  const learnMoreText = useTranslatedContent("Learn More");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{translatedTitle}</h3>
      <p className="text-gray-600">{translatedDescription}</p>
      <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
        {learnMoreText}
      </button>
    </div>
  );
}
```

---

## Example 3: Blog Post Component

### Before:
```tsx
interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

export function BlogPost({ title, excerpt, author, date, category }: BlogPostProps) {
  return (
    <article className="mb-8 p-6 bg-white rounded-lg shadow">
      <div className="mb-4">
        <span className="text-sm font-semibold text-blue-600">{category}</span>
        <h2 className="text-2xl font-bold mt-2">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
      <button className="mt-4 text-blue-600 font-semibold">Read Full Article</button>
    </article>
  );
}
```

### After:
```tsx
"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

export function BlogPost({ title, excerpt, author, date, category }: BlogPostProps) {
  const translatedTitle = useTranslatedContent(title);
  const translatedExcerpt = useTranslatedContent(excerpt);
  const translatedCategory = useTranslatedContent(category);
  const readMoreText = useTranslatedContent("Read Full Article");
  const byText = useTranslatedContent("By");

  return (
    <article className="mb-8 p-6 bg-white rounded-lg shadow">
      <div className="mb-4">
        <span className="text-sm font-semibold text-blue-600">{translatedCategory}</span>
        <h2 className="text-2xl font-bold mt-2">{translatedTitle}</h2>
      </div>
      <p className="text-gray-600 mb-4">{translatedExcerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{byText} {author}</span>
        <span>{date}</span>
      </div>
      <button className="mt-4 text-blue-600 font-semibold">{readMoreText}</button>
    </article>
  );
}
```

---

## Example 4: FAQ Section

### Before:
```tsx
const faqs = [
  {
    question: "What is career counseling?",
    answer: "Career counseling is a process that helps individuals explore career options..."
  },
  {
    question: "How long does the process take?",
    answer: "The process typically takes 4-6 weeks depending on your needs..."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-4 text-left font-semibold hover:bg-gray-50"
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50 border-t">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

### After:
```tsx
"use client";

import { useState } from "react";
import { useTranslatedContent, useTranslatedContents } from "@/app/hooks/useTranslatedContent";

const faqs = [
  {
    question: "What is career counseling?",
    answer: "Career counseling is a process that helps individuals explore career options..."
  },
  {
    question: "How long does the process take?",
    answer: "The process typically takes 4-6 weeks depending on your needs..."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heading = useTranslatedContent("Frequently Asked Questions");

  // Translate all questions and answers
  const translatedFaqs = faqs.map(faq => ({
    question: useTranslatedContent(faq.question),
    answer: useTranslatedContent(faq.answer)
  }));

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">{heading}</h2>
      {translatedFaqs.map((faq, index) => (
        <div key={index} className="mb-4 border rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-4 text-left font-semibold hover:bg-gray-50"
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50 border-t">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

## Example 5: Navigation Menu

### Before:
```tsx
const navItems = [
  { label: "Home", href: "/" },
  { label: "Career Path", href: "/career-path" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export function NavigationMenu() {
  return (
    <nav className="flex gap-6">
      {navItems.map(item => (
        <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
```

### After:
```tsx
"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Career Path", href: "/career-path" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export function NavigationMenu() {
  return (
    <nav className="flex gap-6">
      {navItems.map(item => (
        <NavItem key={item.href} label={item.label} href={item.href} />
      ))}
    </nav>
  );
}

function NavItem({ label, href }: { label: string; href: string }) {
  const translatedLabel = useTranslatedContent(label);
  
  return (
    <a href={href} className="text-gray-700 hover:text-blue-600">
      {translatedLabel}
    </a>
  );
}
```

---

## Example 6: Form with Labels

### Before:
```tsx
export function ContactForm() {
  return (
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Full Name</label>
        <input type="text" className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Email Address</label>
        <input type="email" className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Message</label>
        <textarea className="w-full border rounded px-3 py-2" rows={4}></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold">
        Send Message
      </button>
    </form>
  );
}
```

### After:
```tsx
"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

export function ContactForm() {
  const fullNameLabel = useTranslatedContent("Full Name");
  const emailLabel = useTranslatedContent("Email Address");
  const messageLabel = useTranslatedContent("Message");
  const submitButton = useTranslatedContent("Send Message");

  return (
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">{fullNameLabel}</label>
        <input type="text" className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">{emailLabel}</label>
        <input type="email" className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">{messageLabel}</label>
        <textarea className="w-full border rounded px-3 py-2" rows={4}></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold">
        {submitButton}
      </button>
    </form>
  );
}
```

---

## Example 7: Using TranslatedText Component (Simplest)

### Before:
```tsx
export function ServiceCard() {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h3 className="text-xl font-bold mb-2">Career Counseling</h3>
      <p className="text-gray-600 mb-4">Get personalized guidance from experts</p>
      <button className="text-blue-600 font-semibold">Learn More</button>
    </div>
  );
}
```

### After (Using TranslatedText):
```tsx
import { TranslatedHeading, TranslatedParagraph, TranslatedText } from "@/app/components/TranslatedText";

export function ServiceCard() {
  return (
    <div className="p-6 bg-white rounded-lg">
      <TranslatedHeading level={3} className="text-xl font-bold mb-2">
        Career Counseling
      </TranslatedHeading>
      <TranslatedParagraph className="text-gray-600 mb-4">
        Get personalized guidance from experts
      </TranslatedParagraph>
      <button className="text-blue-600 font-semibold">
        <TranslatedText>Learn More</TranslatedText>
      </button>
    </div>
  );
}
```

---

## Example 8: Dynamic Content from API

### Before:
```tsx
interface Career {
  id: string;
  title: string;
  description: string;
}

export function CareerList({ careers }: { careers: Career[] }) {
  return (
    <div>
      {careers.map(career => (
        <div key={career.id} className="mb-4 p-4 border rounded">
          <h3 className="font-bold">{career.title}</h3>
          <p className="text-gray-600">{career.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### After:
```tsx
"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

interface Career {
  id: string;
  title: string;
  description: string;
}

export function CareerList({ careers }: { careers: Career[] }) {
  return (
    <div>
      {careers.map(career => (
        <CareerItem key={career.id} career={career} />
      ))}
    </div>
  );
}

function CareerItem({ career }: { career: Career }) {
  const translatedTitle = useTranslatedContent(career.title);
  const translatedDescription = useTranslatedContent(career.description);

  return (
    <div className="mb-4 p-4 border rounded">
      <h3 className="font-bold">{translatedTitle}</h3>
      <p className="text-gray-600">{translatedDescription}</p>
    </div>
  );
}
```

---

## Quick Integration Checklist

- [ ] Add `"use client"` at the top of component
- [ ] Import `useTranslatedContent` from `@/app/hooks/useTranslatedContent`
- [ ] Wrap text strings with `useTranslatedContent()`
- [ ] Test by clicking language toggle in navbar
- [ ] Check IndexedDB to verify translations are cached

---

## Performance Tips

1. **Translate at component level** - Not at page level
2. **Use TranslatedText component** - For simple cases
3. **Batch translate** - Use `useTranslatedContents` for multiple items
4. **Cache will grow** - This is normal and good (faster subsequent loads)
5. **Monitor API usage** - Check your Gemini API quota

---

## Common Patterns

### Pattern 1: Translate Props
```tsx
function MyComponent({ title, description }: Props) {
  const t1 = useTranslatedContent(title);
  const t2 = useTranslatedContent(description);
  return <div><h1>{t1}</h1><p>{t2}</p></div>;
}
```

### Pattern 2: Translate Constants
```tsx
const MENU_ITEMS = ["Home", "About", "Contact"];

function Menu() {
  return (
    <nav>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item} label={item} />
      ))}
    </nav>
  );
}

function MenuItem({ label }: { label: string }) {
  const translated = useTranslatedContent(label);
  return <a href="#">{translated}</a>;
}
```

### Pattern 3: Translate Objects
```tsx
const data = { title: "Welcome", subtitle: "Learn" };

function Component() {
  const translated = useTranslatedContents(data);
  return <div><h1>{translated.title}</h1><p>{translated.subtitle}</p></div>;
}
```

---

That's it! Use these examples as templates for integrating translations into your existing components.
