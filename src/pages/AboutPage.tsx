import { motion } from 'framer-motion';
import cv_pl_path from '../files/cv_pl.pdf';
import DownloadFileButton from '../components/DownloadFileButton/DownloadFileButton';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-6 py-8 px-4"
    >
      <div className="w-full flex flex-col gap-4 backdrop-blur-sm p-6 bg-white/50 border border-slate-200 rounded-lg shadow dark:bg-slate-800/50 dark:border-slate-700">
        <h2 className="text-white">About me</h2>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
          temporibus iste ullam praesentium provident reiciendis sequi neque,
          tempore officiis adipisci mollitia similique minus nobis voluptate,
          ipsam quod repudiandae deserunt!
        </p>
      </div>
      <div className="text-white w-full flex flex-col gap-4 backdrop-blur-sm p-6 bg-white/50 border border-slate-200 rounded-lg shadow dark:bg-slate-800/50 dark:border-slate-700">
        <h2>About me</h2>
        <>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga</>
        <ul className="list-square pl-4">
          <li>temporibus iste ullam praesentium provident</li>
          <li>reiciendis sequi neque,</li>
          <li>
            tempore officiis adipisci mollitia similique minus nobis voluptate,
          </li>
          <li>ipsam quod repudiandae deserunt!</li>
        </ul>
      </div>

      <div className="w-full flex flex-col gap-4 backdrop-blur-sm p-6 bg-white/50 border border-slate-200 rounded-lg shadow dark:bg-slate-800/50 dark:border-slate-700">
        <h2 className="text-white">Download Curriculum Vitae</h2>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
          temporibus iste ullam praesentium provident reiciendis.
        </p>
        <div className="flex flex-row gap-4">
          <DownloadFileButton
            text="Download CV (pl)"
            fileName="cv_pl.pdf"
            filePath={cv_pl_path}
            variant="primary"
          />
          <DownloadFileButton
            text="Download CV (en)"
            fileName="cv_pl.pdf"
            filePath={cv_pl_path}
            variant="pink"
            disabled={true}
          />
        </div>
      </div>
    </motion.div>
  );
}
