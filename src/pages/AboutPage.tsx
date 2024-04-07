import { motion } from 'framer-motion';
import cv_pl_path from '../files/jb_cv_pl.pdf';
import cv_en_path from '../files/jb_cv_en.pdf';
import Button from '../components/Button/Button';
import DownloadFileButton from '../components/DownloadFileButton/DownloadFileButton';
import Badge from '../components/Badge/Badge';
import { techStack } from '../globals';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-6 py-6 px-6 sm:px-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="w-full flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50 text-white md:col-span-2">
          <h1 className="text-2xl font-semibold">About me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
            temporibus iste ullam praesentium provident reiciendis sequi neque,
            tempore officiis adipisci mollitia similique minus nobis voluptate,
            ipsam quod repudiandae deserunt!
          </p>
          <ul className="list-square pl-4 [&>*]:pb-2">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
              temporibus iste ullam praesentium provident reiciendis sequi
              neque, tempore officiis adipisci mollitia similique minus nobis
              voluptate.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
              temporibus iste ullam praesentium provident reiciendis sequi
              neque, tempore officiis adipisci mollitia similique minus nobis
              voluptate.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
              temporibus iste ullam praesentium provident reiciendis sequi
              neque, tempore officiis adipisci mollitia similique minus nobis
              voluptate.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
              temporibus iste ullam praesentium provident reiciendis sequi
              neque, tempore officiis adipisci mollitia similique minus nobis
              voluptate.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
              temporibus iste ullam praesentium provident reiciendis sequi
              neque, tempore officiis adipisci mollitia similique minus nobis
              voluptate.
            </li>
          </ul>
        </section>
        <section className="text-white w-full flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50 md:col-span-1">
          <h1 className="text-2xl font-semibold">Technologies</h1>
          {techStack.map(({ title, technologies }, i) => (
            <div key={i}>
              <h2 className="text-xl mb-2">{title}</h2>
              <div className="flex flex-row gap-2 flex-wrap">
                {technologies.map((el, i) => (
                  <Badge text={el} variant="pink" key={i} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className="text-white w-full flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50">
        <h1 className="text-2xl font-semibold">Useful links</h1>
        <p>Links to my socials and code repositories.</p>
        <div className="flex flex-row gap-4 flex-wrap">
          <Button
            text="My linkedin profile"
            url="https://www.linkedin.com/in/janusz-bielczynski/"
            icon="webIcon"
          />
          <Button
            text="My github account"
            url="https://github.com/xanoosh"
            icon="webIcon"
          />
        </div>
      </section>

      <section className="text-white w-full flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50">
        <h1 className="text-2xl font-semibold">Download CV</h1>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
          temporibus iste ullam praesentium provident reiciendis.
        </p>
        <div className="flex flex-row gap-4 flex-wrap">
          <DownloadFileButton
            text="Download CV (pl)"
            fileName="jb_cv_pl.pdf"
            filePath={cv_pl_path}
            variant="primary"
          />
          <DownloadFileButton
            text="Download CV (en)"
            fileName="jb_cv_en.pdf"
            filePath={cv_en_path}
            variant="primary"
          />
        </div>
      </section>
    </motion.div>
  );
}
