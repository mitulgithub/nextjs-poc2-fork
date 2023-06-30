import { graphql } from "msw";
import getChildsSampleResponse from "./sampleResponse/getChildsSampleResponse";
import getChildByIdSampleResponse from "./sampleResponse/getChildByIdSampleResponse.json";

export const handlers = [
  graphql.query("GetChilds", (req, res, ctx) => {
    return res(ctx.data(getChildsSampleResponse));
  }),

  graphql.query("GetChildById", (req, res, ctx) => {
    return res(ctx.data(getChildByIdSampleResponse));
  }),
];
