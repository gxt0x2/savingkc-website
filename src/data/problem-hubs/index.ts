import type { ProblemHubData } from '@/types/content';
import { probateData } from './probate';
import { taxDelinquentData } from './tax-delinquent';

export { probateData, taxDelinquentData };

export const allProblemHubs: ProblemHubData[] = [probateData, taxDelinquentData];

export function getProblemHubBySlug(slug: string): ProblemHubData | undefined {
  return allProblemHubs.find((h) => h.slug === slug);
}
