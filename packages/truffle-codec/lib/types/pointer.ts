import { AstDefinition } from "truffle-codec-utils";
import { Range } from "./storage";

export type DataPointer = StackPointer | MemoryPointer | StoragePointer
  | CalldataPointer | StackLiteralPointer | ConstantDefinitionPointer
  | SpecialPointer | EventDataPointer | EventTopicPointer | GenericAbiPointer;

export type AbiPointer = CalldataPointer | EventDataPointer | GenericAbiPointer;

export interface StackPointer {
  location: "stack",
  from: number;
  to: number;
}

export interface MemoryPointer {
  location: "memory",
  start: number;
  length: number;
}

export interface CalldataPointer {
  location: "calldata",
  start: number;
  length: number;
}

export interface EventDataPointer {
  location: "eventdata",
  start: number;
  length: number;
}

export interface EventTopicPointer {
  location: "eventtopic",
  topic: number;
}

export interface GenericAbiPointer {
  location: "abi",
  start: number;
  length: number;
}

export interface StoragePointer {
  location: "storage",
  range: Range;
}

export interface StackLiteralPointer {
  location: "stackliteral",
  literal: Uint8Array;
}

export interface ConstantDefinitionPointer {
  location: "definition",
  definition: AstDefinition;
}

export interface SpecialPointer {
  location: "special",
  special: string; //sorry
}