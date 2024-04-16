import { ExperienceSectionProps } from '../../interfaces';

export default function ExperienceSection({
  title,
  text,
  list,
}: ExperienceSectionProps) {
  return (
    <div className="flex flex-col gap-6 text-white">
      {title && title.length > 0 ? (
        <h1 className="text-2xl font-semibold">{title}</h1>
      ) : null}
      {text && text.length > 0 ? <p>{text}</p> : null}
      <hr className="border-slate-400" />
      {list && list.length > 0 ? (
        <ol reversed className="list-decimal pl-8">
          {list.map(({ title, date, responsibilities }, i) => (
            <li key={i} className="marker:text-3xl mb-6">
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <h3 className="text-slate-400 font-semibold">{date}</h3>
                </div>
                {responsibilities.length > 0 ? (
                  <ul className="list-square pl-2">
                    {responsibilities.map((responsibility, i) => (
                      <li key={i} className="marker:text-base mb-1">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
