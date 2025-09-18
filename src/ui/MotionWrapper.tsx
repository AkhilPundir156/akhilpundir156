import type { ReactNode } from "react";
import { motion } from 'framer-motion';

export const MotionWrapper = ({children } : {children: ReactNode}) => {
    return(
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className='bg-primary-bg rounded-[16px] pt-[32px] px-[8px] border border-primary-border pb-[24px]'
      >
        { children }
      </motion.div>
    )
};