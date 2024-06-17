import { Video } from "./styles";

interface Props {
  link: string;
};

const YoutubeEmbed = ({ link }: Props) => {

  const addAutoplayParam = (url: string) => {
    const hasParams = url.includes("?");
    return hasParams ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  };

  const autoplayLink = addAutoplayParam(link);

  return(
    <Video>
      <iframe
        width="800"
        height="400"
        src= {autoplayLink}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Video>
  )
};

export default YoutubeEmbed;
