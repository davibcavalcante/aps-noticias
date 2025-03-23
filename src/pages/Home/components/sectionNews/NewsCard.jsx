import bg from '../../../../assets/bg-black.jpg'

const NewsCard = ({ article, id }) => {
  return (
    <article className="relative rounded-xl overflow-hidden h-80 w-[600px] px-2">
      <div className="absolute top-0 left-0 w-[calc(100% - 2.5rem)] h-full bg-linear-to-t bg- from-5% from-neutral-800 to-transparent z-10 rounded-xl overflow-hidden"></div>
      <div className="bg-main w-10 h-10 absolute top-4 left-4 rounded-full text-white text-xl flex items-center justify-center font-bold">
        {id}
      </div>
      <div className="absolute bottom-0 w-full text-white p-4 z-20">
        <h1 className="text-xl">{article.title}</h1>
        <h2 className="text-gray-200 text-sm">{article.published}</h2>
      </div>
      <div className="absolute top-0 left-0 w-full overflow-hidden h-full">
        <img
          src={article.image !== 'sem imagem' ? article.image : bg}
          alt={article.title}
          className="h-full w-full object-cover"
        />
      </div>
    </article>

  );
};

export default NewsCard;