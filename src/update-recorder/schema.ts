// src/update-recorder/schema.ts
// By creating an interface we've added type inference to the options
// argument of our schematic factory function in index.ts.
export interface RecorderOptions {
  path: string;
}
