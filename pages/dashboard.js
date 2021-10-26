export default function Dashboard({ id }) {
  console.log(id);
  return <div>Redirection success</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params,
    },
  };
}
