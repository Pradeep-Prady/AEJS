import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/General/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Security Services in Coimbatore",
  description:
    "Trusted Security Services in Coimbatore offering high-quality security solutions for a safe and secure environment. Contact us today!",
  keywords:
    "Security Services in Coimbatore, Security Solutions, Detective Services, Manpower Consultancy, Housekeeping Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKL6WCVV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="4RhE729BjHbJDDlVgErYHpS0k3Y4Y4d6XUn3jn9ym3c"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <meta name="msvalidate.01" content="60C25435936D208FD7AD97985F3D6F3E" />
        <meta name="yandex-verification" content="723e015616885af1" />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AEJS INFO SERVICES PRIVATE LIMITED",
              image:
                "https://aejsinfo.com/_next/static/media/logo.c1840848.svg",
              url: "https://aejsinfo.com",
              telephone: "+91 9500475798",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "97, DAS Complex, 5th street Extension, 100 feet road, Behind Kalyan Jewellers, Coimbatore - 641 012",
                addressLocality: "COIMBATORE",
                addressRegion: "Tamilnadu",
                postalCode: "641012",
                addressCountry: "India",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "", // Add latitude here
                longitude: "", // Add longitude here
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              sameAs: [
                "https://x.com/aejsinfo",
                "https://www.instagram.com/aejsinfo/",
                "https://www.linkedin.com/in/aejsinfo-security-services-b5714931b/",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              name: "AEJS INFO SERVICES PRIVATE LIMITED",
              description:
                "AEJS INFO: Offering professional security guards, supervisors, bouncers, and housekeeping services. Trusted for reliable protection and efficient facility management across various sectors.",
              url: "https://aejsinfo.com",
              organizationType: "Private",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+91 9500475798",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "97, DAS Complex, 5th street Extension, 100 feet road, Behind Kalyan Jewellers",
                  addressLocality: "Coimbatore",
                  addressRegion: "Tamilnadu",
                  postalCode: "641012",
                  addressCountry: "India",
                },
              },
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "AEJS Info Services",
              url: "https://aejsinfo.com/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://aejsinfo.com/security-services/security-guard-coimbatore?search_term_string={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Main>{children}</Main>

        {/* Google Tag Manager */}
        <script>
          {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WKL6WCVV');
          `}
        </script>
      </body>
    </html>
  );
}
