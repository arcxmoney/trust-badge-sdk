export type Project = {
    id: number;
    verifiedProjectId: string | null;
    name: string;
    logo: string | null;
    description: string | null;
    websiteUrl: string | null;
    twitterUrl: string | null;
    discordUrl: string | null;
    organizationId: number | null;
    foundationDate: string | null;
    createdAt: string;
    updatedAt: string;
    category: ProjectCategory;
    reviewCount: number;
    validReviewCount: number;
    averageRating: number;
    rankingPosition: number | null;
  };

  export enum ProjectCategory {
    Bridging = "Bridging",
    Yield = "Yield",
    NFT = "NFT",
    Gaming = "Gaming",
    DeFi = "DeFi",
    Infrastructure = "Infrastructure",
    Stablecoins = "Stablecoins",
    DAOs = "DAOs",
    Insurance = "Insurance",
    Fundraising = "Fundraising",
    Security = "Security",
    Wallet = "Wallet",
    Tool = "Tool",
    DEX = "DEX",
  }
