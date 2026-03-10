

export default function Partners() {
  const partners = [
    { img: 'https://www.ambotis.ru/workdir/b/00/movenpick.png' },
    { img: 'https://www.ambotis.ru/workdir/b/00/four-seasons.png' },
    { img: 'https://www.ambotis.ru/workdir/b/00/emirates.png' },
    { img: 'https://www.ambotis.ru/workdir/b/00/etihad.png' },
    { img: 'https://www.ambotis.ru/workdir/b/00/qatar-airways.png' }
  ];
  return (
    <section className="w-full px-20 my-20">

      <div className="flex items-center justify-between gap-12 h-20">

        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.img}
            alt={`partner-${index}`}
            className="h-full object-contain"
          />
        ))}

      </div>

    </section>
  );
}