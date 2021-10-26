export default async function handler(req, res, id) {
  console.log(1, req.query.code);
  console.log(2, id);
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
}

export async function getServerSideProps(params) {
  return {
    props: {
      id: params.id,
    },
  };
}
