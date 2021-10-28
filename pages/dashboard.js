export default function Dashboard({ jwt }) {
  const parsedToken = function parseJwt(jwt) {
    const base64Url = jwt.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      Buffer.from(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };
  return (
    <>
      <div>Redirection success</div>
      <div>JWT parsed: ${parsedToken(jwt)}</div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      jwt: context.query.token,
    },
  };
}
