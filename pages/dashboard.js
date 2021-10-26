export default function Dashboard(id) {
  console.log(id);
  return <div>Redirection success</div>;
}

export async function getServerSideProps(params) {
  return {
    props: {
      id: params.id,
    },
  };
}
