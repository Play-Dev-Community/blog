export interface AcessibilityConfig {
  font: Partial<FontConfig>;
}

interface FontConfig {
  family: string;
  size: number;
  weight: number;
  color: string;
}