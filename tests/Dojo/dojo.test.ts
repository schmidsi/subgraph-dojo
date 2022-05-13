import { test } from "matchstick-as/assembly/index";
import { log } from "matchstick-as/assembly/log";

import { TypedMap, TypedMapEntry } from "@graphprotocol/graph-ts/index";

test("Dojo", () => {
  log.info("Hello world!", []);
});

test("TypedMap", () => {
  let ourTypedMap = new TypedMap<string, string>();
  ourTypedMap.set("Jerry", "Okolo");
  ourTypedMap.set("Simon", "Schmid");
  ourTypedMap.set("Krishna", "VP");
  ourTypedMap.set("Chidubem", "Okeke");

  let jerry = ourTypedMap.get("Jerry")!;

  log.info("Jerry {}", [jerry]);

  let sum = ourTypedMap.entries.reduce<string>(
    (acc: string, entry: TypedMapEntry<string, string>) => {
      return acc.concat(" ").concat(entry.value);
    },
    "Subgraph Dojo Heroes: "
  );

  log.info("Sum: {}", [sum]);
});
