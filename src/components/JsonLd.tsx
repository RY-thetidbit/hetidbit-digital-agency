import {
  faqJsonLd,
  localBusinessJsonLd,
  offerJsonLd,
} from "@/lib/schema";

export default function JsonLd() {
  const schemas = [localBusinessJsonLd(), faqJsonLd(), offerJsonLd()];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
