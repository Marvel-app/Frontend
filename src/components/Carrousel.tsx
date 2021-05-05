import { Comic } from './Comic';

interface Props {
  title: string;
  data: { heroInfo: {}; comicsArray: [] };
}

export const Carrousel = ({ title, data }: Props) => {
  return (
    <div className='carrousel'>
      <div className='carrousel__headers'>
        <h2>{title}</h2>
        <a>Find more</a>
      </div>
      <div className='carrousel__comic-container'>
        {data.comicsArray.map((comic: any) => (
          <div className='carrousel__comic-container-item'>
            <Comic
              key={comic.title}
              title={comic.title}
              thumbnail={comic.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
