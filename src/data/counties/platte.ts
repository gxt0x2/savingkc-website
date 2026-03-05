import type { CountyData } from '@/types/geo';

export const platte: CountyData = {
  name: 'Platte County',
  slug: 'platte',
  state: 'mo',
  stateName: 'Missouri',
  description:
    'Platte County sits northwest of downtown Kansas City, home to KCI Airport and a mix of growing suburbs, historic river towns, and scenic countryside along the Missouri River bluffs. The county has seen rapid growth driven by airport-area development and the Zona Rosa shopping district.',
  seatCity: 'Platte City',
  population: '106,718',
  medianHomeValue: '$270,000',
  taxLienInfo:
    'Platte County holds annual tax lien sales through the county collector in Platte City. Delinquent property lists are published in the Platte County Citizen and available at the Platte County Courthouse.',
  probateInfo:
    'Probate is handled by the Platte County Circuit Court, 6th Judicial Circuit, at the Platte County Courthouse in Platte City. Missouri small estate procedures apply for estates under $40,000.',
  cities: [
    {
      name: 'Platte City',
      slug: 'platte-city',
      state: 'mo',
      county: 'Platte County',
      countySlug: 'platte',
      description:
        'Platte City is the county seat and a small but growing city along I-29 north of KCI Airport. The historic downtown square and surrounding neighborhoods offer affordable homes with easy airport and highway access.',
      population: '5,024',
      medianHomeValue: '$230,000',
      zipCodes: ['64079'],
      neighborhoods: [
        {
          name: 'Historic Platte City Square',
          slug: 'historic-platte-city-square',
          description:
            'The courthouse square area features homes from the late 1800s and early 1900s on tree-lined streets surrounding the Platte County Courthouse.',
          landmarks: ['Platte County Courthouse', 'Platte City Square shops', 'Settler\'s Cemetery'],
          medianHomeValue: '$185,000',
          distressFactors: [
            'Pre-1920s homes with original foundations and systems',
            'Historic structures may need lead paint and asbestos abatement',
            'Small lots with limited off-street parking'
          ],
          localHook:
            'The Platte County Courthouse anchors a square where local shops and century-old homes share the same quiet blocks.'
        },
        {
          name: 'Platte City North',
          slug: 'platte-city-north',
          description:
            'North of the historic core, newer subdivisions along I-29 offer modern homes for families and airport-area workers.',
          landmarks: ['Platte City Community Center', 'I-29 corridor', 'Platte City Middle School'],
          medianHomeValue: '$260,000',
          distressFactors: [
            'Some 2000s construction with builder-grade materials aging out',
            'Airport flight path noise affects some properties',
            'Rapid growth straining existing road infrastructure'
          ],
          localHook:
            'Newer homes with quick I-29 access. Platte City North puts KCI Airport and the Northland within a 15-minute drive.'
        },
        {
          name: 'Platte City South / KCI Corridor',
          slug: 'platte-city-south-kci-corridor',
          description:
            'South Platte City near the KCI Airport corridor features a mix of newer homes, hotel district spillover, and affordable properties convenient for airport and airline workers.',
          landmarks: ['KCI Airport area', 'Platte Purchase Drive', 'KCI Expo Center'],
          medianHomeValue: '$220,000',
          distressFactors: [
            'Airport noise from flight paths directly overhead',
            'Hotel and commercial traffic on surrounding roads',
            'Some properties on former farmland with drainage grading issues'
          ],
          localHook:
            'Work at KCI and be home in five minutes. Platte City South is the airport corridor\'s residential anchor.'
        }
      ]
    },
    {
      name: 'Parkville',
      slug: 'parkville',
      state: 'mo',
      county: 'Platte County',
      countySlug: 'platte',
      description:
        'Parkville is a charming river bluff community known for Park University, a walkable downtown along the Missouri River, and some of the most scenic residential areas in the Northland. The city\'s English Landing Park hosts festivals year-round.',
      population: '7,238',
      medianHomeValue: '$315,000',
      zipCodes: ['64152'],
      neighborhoods: [
        {
          name: 'Downtown Parkville',
          slug: 'downtown-parkville',
          description:
            'Parkville\'s downtown along Main Street hugs the Missouri River bluffs, with local galleries, restaurants, and historic homes climbing the hillside.',
          landmarks: ['English Landing Park', 'Main Street shops and galleries', 'Park University'],
          medianHomeValue: '$285,000',
          distressFactors: [
            'Hillside properties face drainage and retaining wall issues',
            'Missouri River flood risk at lower elevations',
            'Historic homes require specialized maintenance'
          ],
          localHook:
            'Walk Main Street galleries, catch a festival at English Landing Park, and watch barges on the Missouri River. Downtown Parkville is a postcard.'
        },
        {
          name: 'Riss Lake / National',
          slug: 'riss-lake-national',
          description:
            'The Riss Lake and National golf course communities in south Parkville offer upscale homes with golf course views and lake access in a wooded setting.',
          landmarks: ['The National Golf Club', 'Riss Lake', 'Parkville Athletic Complex'],
          medianHomeValue: '$350,000',
          distressFactors: [
            'HOA dues are among the highest in the Northland',
            'Golf course homes face uncertain land use if courses close',
            'Large homes from the 2000s may have deferred cosmetic updates'
          ],
          localHook:
            'Golf at The National in the morning and kayak Riss Lake in the afternoon. This is Parkville\'s premier residential area.'
        },
        {
          name: 'Old Parkville / University Heights',
          slug: 'old-parkville-university-heights',
          description:
            'The historic residential streets around Park University feature character homes from the early 1900s with river views and walkability to campus and downtown.',
          landmarks: ['Park University campus', 'Parkville Presbyterian Church', 'River bluff overlooks'],
          medianHomeValue: '$250,000',
          distressFactors: [
            'Steep terrain creates access and foundation challenges',
            'Original plumbing and knob-and-tube wiring in pre-war homes',
            'Parking is limited on narrow hillside streets'
          ],
          localHook:
            'Park University\'s hilltop campus provides the backdrop — and the river bluff views from these streets are earned with every climb.'
        }
      ]
    },
    {
      name: 'Riverside',
      slug: 'riverside',
      state: 'mo',
      county: 'Platte County',
      countySlug: 'platte',
      description:
        'Riverside is a small city along the Missouri River known for the Argosy Casino, Red X shopping district, and affordable residential neighborhoods. Its location between downtown KC and KCI Airport makes it a convenient commuter hub.',
      population: '3,407',
      medianHomeValue: '$220,000',
      zipCodes: ['64150'],
      neighborhoods: [
        {
          name: 'Riverside Residential',
          slug: 'riverside-residential',
          description:
            'Riverside\'s residential streets between the river and I-635 offer affordable mid-century homes with easy access to the Northland\'s commercial corridors.',
          landmarks: ['Argosy Casino complex', 'Red X shopping area', 'Riverside Community Park'],
          medianHomeValue: '$200,000',
          distressFactors: [
            'Missouri River flood zone affects lower-elevation properties',
            'Casino traffic creates congestion on weekends and evenings',
            'Limited residential inventory means less price comparison data'
          ],
          localHook:
            'Riverside sits at the crossroads of I-29 and I-635. You can reach almost anywhere in the metro in 20 minutes.'
        },
        {
          name: 'Briarcliff / Tiffany Springs',
          slug: 'briarcliff-tiffany-springs',
          description:
            'The Briarcliff and Tiffany Springs area near the Zona Rosa shopping district features newer homes and corporate office parks in the KCI corridor.',
          landmarks: ['Zona Rosa shopping center', 'Tiffany Springs Park', 'Briarcliff community'],
          medianHomeValue: '$280,000',
          distressFactors: [
            'Office park vacancy can affect surrounding residential values',
            'Builder-grade construction from rapid 2000s development',
            'Airport proximity means flight path noise for some homes'
          ],
          localHook:
            'Walk to Zona Rosa for shopping and dining, and let Tiffany Springs Park be your backyard escape from the commercial bustle.'
        },
        {
          name: 'Riverside South / Horizons',
          slug: 'riverside-south-horizons',
          description:
            'South Riverside near the Horizons Park area features established homes with Missouri River views and easy access to both I-29 and I-635 interchanges.',
          landmarks: ['Horizons Park', 'I-29 / I-635 interchange', 'Missouri River overlook'],
          medianHomeValue: '$235,000',
          distressFactors: [
            'Highway interchange noise and light pollution',
            'Older infrastructure in sections predating the interchange upgrades',
            'River bluff erosion on western-facing lots'
          ],
          localHook:
            'Two interstates converge outside your door. Riverside South is the metro\'s commuter sweet spot with river views as a bonus.'
        }
      ]
    },
    {
      name: 'Weatherby Lake',
      slug: 'weatherby-lake',
      state: 'mo',
      county: 'Platte County',
      countySlug: 'platte',
      description:
        'Weatherby Lake is a small lakeside community in southern Platte County built around a private 110-acre lake. The city offers a unique mix of modest cottages and large custom homes, all oriented around lake access.',
      population: '1,878',
      medianHomeValue: '$275,000',
      zipCodes: ['64152'],
      neighborhoods: [
        {
          name: 'Weatherby Lake Community',
          slug: 'weatherby-lake-community',
          description:
            'The entire city of Weatherby Lake is essentially one neighborhood centered on the private lake, with homes ranging from original 1950s cottages to modern custom builds.',
          landmarks: ['Weatherby Lake (private)', 'Weatherby Lake Clubhouse', 'Lake Drive'],
          medianHomeValue: '$275,000',
          distressFactors: [
            'Original lake cottages from the 1950s need complete renovation',
            'Lake association dues and rules add to ownership costs',
            'Septic systems on some older properties near the lake'
          ],
          localHook:
            'Private lake living inside the KC metro. Weatherby Lake\'s 110 acres of water are reserved for residents only.'
        }
      ]
    },
    {
      name: 'Weston',
      slug: 'weston',
      state: 'mo',
      county: 'Platte County',
      countySlug: 'platte',
      description:
        'Weston is a historic Missouri River town founded in 1837, known for tobacco barns, the Weston Brewing Company, and a thriving antique and arts scene. The town\'s preserved architecture and bluff-top setting make it one of the most picturesque communities in the metro.',
      population: '1,781',
      medianHomeValue: '$200,000',
      neighborhoods: [
        {
          name: 'Historic Weston',
          slug: 'historic-weston',
          description:
            'Weston\'s downtown and surrounding bluff-top streets feature antebellum and Victorian homes, many on the National Register of Historic Places, with views of the Missouri River valley.',
          landmarks: ['Weston Brewing Company', 'Pirtle Winery', 'McCormick Distillery'],
          medianHomeValue: '$195,000',
          distressFactors: [
            'Historic homes require specialized restoration expertise',
            'Bluff erosion and drainage challenges on steep-grade lots',
            'Limited local employment keeps prices below what the architecture suggests'
          ],
          localHook:
            'Sip local wine at Pirtle, tour the oldest distillery west of the Mississippi at McCormick, and walk streets that predate the Civil War.'
        }
      ]
    },
    {
      name: 'Camden Point',
      slug: 'camden-point',
      state: 'mo',
      county: 'Platte County',
      countySlug: 'platte',
      description:
        'Camden Point is a small village in northern Platte County offering quiet rural living on the bluffs above the Missouri River bottoms. The village has a handful of homes and a deeply rooted farming community.',
      population: '474',
      medianHomeValue: '$155,000',
      neighborhoods: [
        {
          name: 'Camden Point Village',
          slug: 'camden-point-village',
          description:
            'The small collection of homes in Camden Point sits along Highway 92, surrounded by farmland and offering solitude rarely found this close to a major metro.',
          landmarks: ['Highway 92 corridor', 'Camden Point Baptist Church', 'Platte County farmland'],
          medianHomeValue: '$150,000',
          distressFactors: [
            'Rural properties on well and septic',
            'Very limited municipal services',
            'Gravel roads and limited infrastructure in surrounding areas'
          ],
          localHook:
            'Camden Point is farm country with a KC zip code. Open fields, quiet nights, and prices that reflect the simple life.'
        }
      ]
    }
  ]
};
