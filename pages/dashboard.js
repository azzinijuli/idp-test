export default function Dashboard() {
  return <div>Redirection success</div>;
}

export async function getServerSideProps(context) {
  console.log(context.query.query.token);
  return {
    props: {
      id: context.params,
    },
  };
}
