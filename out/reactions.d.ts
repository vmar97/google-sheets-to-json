export interface Reactions {
  sourceSheet: SourceSheet;
  name: string;
  image: string;
  source: string[];
  sourceNotes: null | string;
  internalId: string;
  uniqueEntryId: string;
}
export declare enum SourceSheet {
  Reactions = 'Reactions',
}
