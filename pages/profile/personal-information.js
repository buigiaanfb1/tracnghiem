import Layout from '../../components/layout/Layout';
import PersonalInformation from '../../components/PersonalInformation';
import LayoutProfile from '../../components/layout/LayoutProfile';

const Index = () => {
  return (
    <LayoutProfile>
      <PersonalInformation />
    </LayoutProfile>
  );
};

Index.getLayout = (page) => (
  <Layout title="Personal Information | Easy10">{page}</Layout>
);

export default Index;
