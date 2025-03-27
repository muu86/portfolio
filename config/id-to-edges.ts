export type EdgeInfo = {
  source: string;
  target: string;
};

export type IdToEdges = Record<string, EdgeInfo[]>;

export const idToEdges: IdToEdges = {
  "projects/digital-nutrition/application/0_nextjs": [
    {
      source: "application-mobile-client",
      target: "application-rest-controller",
    },
  ],

  "projects/digital-nutrition/application/10_api": [
    {
      source: "application-mobile-client",
      target: "application-rest-controller",
    },
  ],

  "projects/digital-nutrition/application/20_security": [
    {
      source: "application-mobile-client",
      target: "application-rest-controller",
    },
    {
      source: "application-rest-controller",
      target: "application-security",
    },
  ],

  "projects/digital-nutrition/application/30_third-party": [
    {
      source: "application-third-party",
      target: "application-api-gateway",
    },
    {
      source: "application-api-gateway",
      target: "application-lambda",
    },
    {
      source: "application-lambda",
      target: "application-dynamodb",
    },
  ],

  "projects/digital-nutrition/application/40_subscription": [
    {
      source: "application-app-store",
      target: "application-api-gateway",
    },
    {
      source: "application-play-store",
      target: "application-api-gateway",
    },
    {
      source: "application-api-gateway",
      target: "application-lambda",
    },
    {
      source: "application-lambda",
      target: "application-dynamodb",
    },
  ],

  "projects/digital-nutrition/application/50_orm": [
    {
      source: "application-orm",
      target: "application-repository",
    },
    {
      source: "application-repository",
      target: "application-mysql",
    },
  ],

  "projects/digital-nutrition/application/70_log": [
    {
      source: "application-outbound",
      target: "application-cloudwatch",
    },
    {
      source: "application-outbound",
      target: "application-google-chat",
    },
  ],
};
