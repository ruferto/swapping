import ItemsListView from '../ItemsList/ItemsListView';

const Home = () => {
  return (
    <>
      <ItemsListView {...{ title: 'people' }} />
    </>
  );
};
export default Home;
