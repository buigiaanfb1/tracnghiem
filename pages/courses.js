import Layout from '../components/layout/Layout';
import CoursesPage from '../components/CoursesPage';

const Index = () => {
  return <CoursesPage />;
};

Index.getLayout = (page) => <Layout title="Courses | Easy10">{page}</Layout>;

export default Index;
