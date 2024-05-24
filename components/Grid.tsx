import { gridItemns } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItemns.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
