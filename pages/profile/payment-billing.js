import PaymentBilling from '../../components/PaymentBilling';
import Layout from '../../components/layout/Layout';
import LayoutProfile from '../../components/layout/LayoutProfile';

const Index = () => {
  return (
    <LayoutProfile>
      <PaymentBilling />
    </LayoutProfile>
  );
};

Index.getLayout = (page) => <Layout title="Account | Easy10">{page}</Layout>;

export default Index;
