import { oauth_orcid } from "./orcidOauth";
import { redirect } from "next/navigation";

export async function orcidAuthAction() {
    const query = {
      client_id: oauth_orcid.client_id,
      redirect_uri: oauth_orcid.redirect_uri,
      response_type: "code",
      scope: oauth_orcid.scopes,
    };
    const url = new URL(oauth_orcid.authorizeEndpoint);
    url.search = new URLSearchParams(query).toString();
    console.log("the uri:")
    console.log(url.toString())
    redirect(url.toString());
}