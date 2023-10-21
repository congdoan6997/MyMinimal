import { styled } from '@mui/material/styles';
import { useScroll } from 'framer-motion';
import { Box } from '@mui/material';
import ScrollProgress from 'src/components/scroll-progress';

type StyledPolygonProps = {
  anchor?: 'top' | 'bottom';
};

const StyledPolygon = styled('div')<StyledPolygonProps>(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
          // test height
          height: '1000px',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {/* <StyledPolygon /> */}
          <div>Hello home view</div>
          {/* <StyledPolygon anchor="bottom" /> */}
        </Box>
      </Box>
    </>
  );
}
