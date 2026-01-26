import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { usePuterStore } from "./lib/puter";
import { useEffect } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { init } = usePuterStore()

  useEffect(() => {
    init();
  }, [init])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-4525787590923476" />

        {/* Primary Meta Tags */}
        <title>Resumind - AI Resume Analyzer & ATS Checker | Free Online Tool</title>
        <meta name="title" content="Resumind - AI Resume Analyzer & ATS Checker | Free Online Tool" />
        <meta name="description" content="Use Resumind's free AI resume analyzer to get an instant ATS score, keyword optimization tips, and professional feedback. Boost your job applications with the best ATS tracking simulation tool." />
        <meta name="keywords" content="AI resume analyzer, ATS checker, free ATS tracking, resume optimization, ATS resume feedback, keyword optimization, career tools, resume scoring, job application tips" />
        <link rel="canonical" href="https://ai-resume-analyzer-8d9i.vercel.app/" />
        <meta name="author" content="Resumind" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-resume-analyzer-8d9i.vercel.app/" />
        <meta property="og:title" content="Resumind - AI Resume Analyzer & ATS Checker" />
        <meta property="og:description" content="Get professional AI feedback on your resume. Optimize for ATS and stand out to recruiters." />
        <meta property="og:image" content="https://ai-resume-analyzer-8d9i.vercel.app/images/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ai-resume-analyzer-8d9i.vercel.app/" />
        <meta property="twitter:title" content="Resumind - AI Resume Analyzer & ATS Checker" />
        <meta property="twitter:description" content="Get professional AI feedback on your resume. Optimize for ATS and stand out to recruiters." />
        <meta property="twitter:image" content="https://ai-resume-analyzer-8d9i.vercel.app/images/og-image.png" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Resumind",
              "operatingSystem": "Web",
              "applicationCategory": "CareerService",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered resume analyzer providing ATS scores and improvement tips.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1250"
              }
            })
          }}
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4525787590923476"
          crossOrigin="anonymous"
        ></script>
        <script src="https://pl28558255.effectivegatecpm.com/b7/a0/d3/b7a0d302adcffea375f85597716e630e.js"></script>
        <script src="https://pl28574892.effectivegatecpm.com/0b/c0/5e/0bc05e9bbc0f51e002c179a37a0f19d2.js"></script>
        <Meta />
        <Links />
      </head>
      <body>
        <script src="https://js.puter.com/v2/"></script>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
