import dataFetch, { actionList } from "./data-fetch.js";
import { grabInput } from "./handlersFn.js";
import { domBuilder } from "./domBuilder.js";
import ComponentInterface from "../components/index.js";
import { cleanUp } from "./utils/cleanup.js";
import { rhymeContainer } from "./selectors.js";

const { word, randomWord } = actionList;
const { listElement } = ComponentInterface;

export async function composeInputAndDataFetch(event) {
  const textValue = grabInput(event);
  const data = await dataFetch(textValue, word);
  cleanUp(rhymeContainer);
  domBuilder(data, listElement);
}
