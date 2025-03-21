export const oauth_orcid = {
    client_id: process.env.ORCID_CLIENT_ID || "",
    client_secret: process.env.ORCID_CLIENT_SECRET || "",
    authorizeEndpoint: "https://sandbox.orcid.org/oauth/authorize",
    codeExchangeEndpoint: "https://sandbox.orcid.org/oauth/token",
    redirect_uri: process.env.REDIRECT_URI || "",
    scopes: "/activities/update",
  };

  // https://sandbox.orcid.org/oauth/authorize?client_id=[Your client ID]&response_type=code&scope=/read-limited&redirect_uri=[Your landing page]