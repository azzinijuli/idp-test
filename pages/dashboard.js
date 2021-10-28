export default function Dashboard({ jwt }) {
  console.log(jwt);
  return <div>Redirection success</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      jwt: context.query.token,
    },
  };
}
