export default function Dashboard({ jwt }) {
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
