import jwt_decode from "jwt-decode";

export default function Dashboard({ jwt }) {
  const token = jwt;
  const decoded = jwt_decode(token);
  console.log(decoded);

  return (
    <>
      <div>Redirection success</div>
      <div>JWT: ${jwt}</div>
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
