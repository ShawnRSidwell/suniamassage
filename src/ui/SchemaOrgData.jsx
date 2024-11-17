import { Helmet } from "react-helmet";

const SchemaOrgData = () => {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Sunia Ayurveda Massage",
    url: "https://suniamassage.com",
    logo: "https://suniamassage.com/assets/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "(503) 502-3943",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61566073823343",
      "https://www.instagram.com/suniamassage/",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SchemaOrgData;
