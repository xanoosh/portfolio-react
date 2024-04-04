import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-6"
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
      <div className="w-full flex flex-col gap-4 backdrop-blur-sm p-6 bg-white/50 border border-slate-200 rounded-lg shadow dark:bg-slate-800/50 dark:border-slate-700">
        <h2 className="text-white">About me</h2>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fuga
          temporibus iste ullam praesentium provident reiciendis sequi neque,
          tempore officiis adipisci mollitia similique minus nobis voluptate,
          ipsam quod repudiandae deserunt!
        </p>
      </div>
    </motion.div>
  );
}
