export function stateUrl(stateSlug: string): string {
  return `/${stateSlug}/`;
}

export function situationUrl(slug: string): string {
  return `/situations/${slug}/`;
}

export function countyUrl(state: string, countySlug: string): string {
  return `/${state}/${countySlug}/`;
}

export function cityUrl(state: string, countySlug: string, citySlug: string): string {
  return `/${state}/${countySlug}/${citySlug}/`;
}

export function neighborhoodUrl(
  state: string,
  countySlug: string,
  citySlug: string,
  neighborhoodSlug: string
): string {
  return `/${state}/${countySlug}/${citySlug}/${neighborhoodSlug}/`;
}

export function problemHubUrl(slug: string): string {
  return `/${slug}/`;
}
