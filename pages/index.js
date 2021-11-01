import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const baseUrl = "https://idpsesiont.telecom.com.ar/openam/oauth2/realms";
  const realms = "convergente";
  const responseType = "code";
  const clientId = "oidc-ppd-test";
  const redirectUri =
    "https://idp-nextjs-test.netlify.app/api/auth/callback/idp";
  const state = "doeeHdmVTm67Am1oc3QXHyMQTKcMPoc2MqguEDqxZwE";
  const nonce = "jLJOz5dnXr1L2QzJshw7wI0CA7pQfLQz_wzn4EArA1t";
  const { data: session } = useSession();

  {
    <Head>
      <title>Portal Unificado</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>;
    session ? (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    ) : (
      <>
        <div>Not signed in</div>
        <main>
          <div>
            <a
              href={`${baseUrl}/${realms}/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid+profile&state=${state}&nonce=${nonce}`}
            >
              Login manual
            </a>
          </div>
          <button
            onClick={() =>
              signIn(null, {
                callbackUrl: "https://idp-nextjs-test.netlify.app/dashboard",
              })
            }
          >
            Login auth
          </button>
        </main>
      </>
    );
  }
}

// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
