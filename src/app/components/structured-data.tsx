export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jeremiah Okon',
    jobTitle: 'Frontend Developer',
    description:
      'Experienced Frontend Developer specializing in React, Next.js, and TypeScript',
    url: 'https://jeremiahokon.com',
    email: 'okonjeremiahprogs@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ilorin',
      addressRegion: 'Kwara State',
      addressCountry: 'Nigeria',
    },
    sameAs: [
      'https://www.linkedin.com/in/okon-jeremiah/',
      'https://github.com/jerncomania28',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Frontend Development',
      'Web Development',
      'UI/UX Design',
      'Tailwind CSS',
      'Framer Motion',
      'Animation',
      'SEO Optimization',
      'Web Performance',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'University of Ilorin, Ilorin.',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jeremiah Okon Portfolio',
    description: 'Portfolio showcasing frontend development work and projects',
    url: 'https://jeremiahokon.pro',
    author: {
      '@type': 'Person',
      name: 'Jeremiah Okon',
    },
    inLanguage: 'en-US',
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Jeremiah Okon - Frontend Development Services',
    description:
      'Professional frontend development services specializing in React, Next.js, and modern web technologies',
    url: 'https://jeremiahokon.pro',
    telephone: '',
    email: 'okonjeremiahprogs@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ilorin',
      addressRegion: 'Kwara State',
      addressCountry: 'Nigeria',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    priceRange: '$$',
    serviceType: [
      'Frontend Development',
      'React Development',
      'Next.js Development',
      'Web Application Development',
      'UI/UX Development',
    ],
  };

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Jeremiah Okon - Portfolio',
    description: 'A collection of frontend development projects and work',
    url: 'https://jeremiahokon.pro',
    author: {
      '@type': 'Person',
      name: 'Jeremiah Okon',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'CreativeWork',
          name: 'Hypetag',
          url: 'https://hypetag.com/',
          description: 'Frontend development project',
          author: {
            '@type': 'Person',
            name: 'Jeremiah Okon',
          },
        },
        {
          '@type': 'CreativeWork',
          name: 'Bitsin Travels and Tours',
          url: 'https://www.bitsintravelsandtours.com/',
          description: 'Frontend development project',
          author: {
            '@type': 'Person',
            name: 'Jeremiah Okon',
          },
        },
        {
          '@type': 'CreativeWork',
          name: 'Torrista',
          url: 'https://torrista.com.ng/',
          description: 'Frontend development project',
          author: {
            '@type': 'Person',
            name: 'Jeremiah Okon',
          },
        },
        {
          '@type': 'CreativeWork',
          name: 'Medicovestor',
          url: 'https://medicovestor.com/',
          description: 'Frontend development project',
          author: {
            '@type': 'Person',
            name: 'Jeremiah Okon',
          },
        },
        {
          '@type': 'CreativeWork',
          name: 'CentryOS Landing Page',
          url: 'https://centryos.xyz/',
          description: 'Frontend development project',
          author: {
            '@type': 'Person',
            name: 'Jeremiah Okon',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
