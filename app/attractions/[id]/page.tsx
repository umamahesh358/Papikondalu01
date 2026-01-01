import Script from 'next/script'
import { attractionsData } from '../attractionsData'
import AttractionDetailClient from './AttractionDetailClient'
import { notFound } from 'next/navigation'
import { getAttractionSlug, getAttractionIdFromSlug } from '../../utils/slugs'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return attractionsData.map((attraction) => ({
    id: getAttractionSlug(attraction.id),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const attractionId = getAttractionIdFromSlug(id)
  const attraction = attractionsData.find(a => a.id === attractionId)

  if (!attraction) {
    return {
      title: 'Attraction Not Found | Papikondalu Tourism',
      description: 'The requested attraction could not be found.'
    }
  }

  // SEO-optimized titles for specific attractions
  const isPapikondalu = attraction.id === 1
  const seoTitle = isPapikondalu
    ? 'Papikondalu Boat Tours 2025 | AC Packages from ₹1250 | Godavari River Cruise'
    : `${attraction.name} | Papikondalu Tourism | East Godavari Attractions`

  const seoDescription = isPapikondalu
    ? 'Book Papikondalu boat tour packages for 2025. AC luxury boats from ₹1250/person. Trusted by 5000+ families. Includes breakfast, lunch & Perantapalli temple visit. Call now!'
    : `${attraction.shortDescription} - Best time to visit: ${attraction.bestTime}. Book your ${attraction.name} tour with Papikondalu Tourism.`

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: isPapikondalu
      ? 'Papikondalu boat tour, Papikondalu packages 2025, Godavari river cruise, AC boat Papikondalu, Papikondalu booking, Perantapalli temple, East Godavari tourism, Papikondalu trip from Bhadrachalam, Papikondalu distance from Hyderabad, Papikondalu boat booking price, Rajahmundry to Papikondalu distance, best time to visit Papikondalu'
      : `${attraction.name}, ${attraction.activities?.join(', ')}, East Godavari, Papikondalu Tourism, Godavari River`,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: [attraction.image],
      type: 'website'
    }
  }
}

export default async function AttractionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const attractionId = getAttractionIdFromSlug(id)

  if (!attractionId) {
    notFound()
  }

  const attraction = attractionsData.find(a => a.id === attractionId)

  if (!attraction) {
    notFound()
  }

  // Base TouristAttraction schema
  const baseSchema = {
    '@type': 'TouristAttraction',
    'name': attraction.name,
    'description': attraction.description,
    'url': `https://bhadradripapikondalu.com/attractions/${id}`,
    'image': attraction.image,
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 17.0005,
      'longitude': 81.8040
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'East Godavari',
      'addressRegion': 'Andhra Pradesh',
      'addressCountry': 'IN'
    }
  }

  // Enhanced schema for Papikondalu page with Product, FAQ, and Review schemas
  const isPapikondalu = attraction.id === 1

  const papikondaluSchema = isPapikondalu ? {
    '@context': 'https://schema.org',
    '@graph': [
      baseSchema,
      // Product schema for pricing in search results
      {
        '@type': 'Product',
        'name': 'Papikondalu AC Boat Tour Package 2025',
        'description': 'Premium AC luxury boat tour to Papikondalu hills with breakfast, lunch, and Perantapalli temple visit included.',
        'image': attraction.image,
        'brand': {
          '@type': 'Brand',
          'name': 'Papikondalu Tourism'
        },
        'offers': {
          '@type': 'AggregateOffer',
          'lowPrice': '1050',
          'highPrice': '2500',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'validFrom': '2025-01-01',
          'priceValidUntil': '2025-12-31',
          'seller': {
            '@type': 'Organization',
            'name': 'Papikondalu Tourism - Sudharshan Rao Pendurthi'
          }
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '5000',
          'bestRating': '5'
        }
      },
      // FAQ schema for rich results
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How much does Papikondalu boat tour cost in 2025?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Papikondalu boat tour prices in 2025 start from ₹1,050 for Non-AC boats and ₹1,250 for AC luxury boats per adult. Child prices are ₹850 for Non-AC and ₹1,050 for AC boats. Bhadrachalam drop packages cost ₹2,500 for adults and ₹2,000 for children.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the best time to visit Papikondalu?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The best time to visit Papikondalu is from October to March when the weather is pleasant with temperatures between 20-30°C. Monsoon season (July-September) should be avoided due to rough river conditions.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How to reach Papikondalu from Rajahmundry?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You can reach Papikondalu by boat from Pattiseema or Polavaram Revu near Rajahmundry. The boat journey takes approximately 2-3 hours each way. Boats depart at 9:00 AM and you will need to report by 7:30 AM for check-in.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is included in Papikondalu boat tour package?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Papikondalu boat tour packages include: AC/Non-AC boat ride, South Indian breakfast (Idli/Upma), vegetarian lunch (Andhra Thali), tea and snacks during return, stop at Perantapalli Tribal Village and Shiva Temple, and life jackets for safety.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long is the Papikondalu boat tour?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A typical 1-day Papikondalu boat tour takes approximately 10-12 hours. You report at 7:30 AM, board the boat at 9:00 AM, and return to Rajahmundry by 7:30-8:00 PM. Overnight packages with stay at Sirivaka are also available.'
            }
          }
        ]
      }
    ]
  } : {
    '@context': 'https://schema.org',
    ...baseSchema
  }

  const jsonLd = papikondaluSchema

  return (
    <>
      <Script
        id={`attraction-schema-${attraction.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AttractionDetailClient attraction={attraction} />
    </>
  )
}