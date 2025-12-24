"use client";

import { siteConfig } from "@/lib/data";
import Script from "next/script";

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    "name": siteConfig.name,
    "image": "https://petsneed.in/images/pets-need-clinic-parlour-storefront-alipore-kolkata.jpg",
    "@id": "",
    "url": "https://petsneed.in/",
    "telephone": siteConfig.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": "Kolkata",
      "postalCode": "700027",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5228595,
      "longitude": 88.324997
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.facebook.com/petsneedkolkata/",
      siteConfig.mapLink
    ]  
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;