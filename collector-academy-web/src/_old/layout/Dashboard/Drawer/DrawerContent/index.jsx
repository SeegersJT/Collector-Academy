// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from '_old/components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        <Navigation />
        <NavCard />
      </SimpleBar>
    </>
  );
}
