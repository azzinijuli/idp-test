export default function Dashboard() {
  return <div>Redirection success</div>;
}

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {
      id: context.params,
    },
  };
}
