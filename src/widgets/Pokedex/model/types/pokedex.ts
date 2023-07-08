export interface PokemonList {
  name: string;
  url: string;
}

export interface PokedexSchema {
  results: PokemonList[];
  initialData?: any[];
  fullInfo?: any[];

  isLoading?: boolean;
  error?: string | undefined;

  count: number;
  pageCount?: number;
  search?: string;
  next: string;
  previous: string;
  disable?: boolean;
  url?: string;

  selectedTypes?: Record<string, boolean>;
}
