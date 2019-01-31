export interface Devices {
  [uniqueId: string] : Device;
}

export interface Device {
   d : DTypes;
   id : string;
   meta : MetaTypes;
   s : STypes;
}

export interface DTypes {
  [name: string] : Attribute;
}

export interface MetaTypes {
  [name: string] : Attribute;
}

export interface STypes {
  [name: string] : Attribute;
}

export interface Attribute {
  time : number;
  value : string;
}

export interface LeakIq {
  unique : string;
  name : string;
  flow1 : string;
  flow2 : string;
}

export interface SlipRadio {
  unique : string;
  name : string;
}

export interface VariableHistoryOptions {
  num : number;
  chunksize : number;
  progress : (num) => void;
}
