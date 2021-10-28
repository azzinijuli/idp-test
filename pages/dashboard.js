import jwt_decode from "jwt-decode";

export default function Dashboard({ jwt }) {
  const token = jwt;
  const decoded = jwt_decode(token);

  return (
    <>
      <div>Redirection success</div>
      <div>JWT: ${decoded.sub}</div>
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
