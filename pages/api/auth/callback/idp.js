export default async function handler(req, res) {
  const code = req.query.code;
  const newUrl = `https://idpsesiont.telecom.com.ar/openam/oauth2/realms/convergente/access_token?code=${code}&grant_type=authorization_code&redirect_uri=https://idp-nextjs-test.netlify.app/api/auth/callback/idp`;
  const encoded = Buffer.from(
    `${process.env.NEXT_PUBLIC_IDP_CLIENT_ID}:${process.env.NEXT_PUBLIC_IDP_CLIENT_SECRET}`,
    "binary"
  ).toString("base64");

  const response = await fetch(newUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encoded}`,
    },
  });
  const data = await response.json();
  res.redirect(`/dashboard?token=${data.id_token}`);

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      Buffer.from(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  parseJwt(data.id_token);
  console.log(parseJwt());
}
