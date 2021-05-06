import comicThumbnail from '../assets/images/comicThumbnail.png';

interface Props {
  title: string;
  thumbnail: string;
}

export const Comic = ({ title, thumbnail }: Props) => {
  return (
    <div className='comic__container'>
      <img
        src={thumbnail === '' ? comicThumbnail : thumbnail}
        height='317px'
        width='230px'
        alt={title}
      />
      <p>{title}</p>
    </div>
  );
};
