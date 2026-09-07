import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { frameCount, framePath, investmentFrameCount, investmentFramePath } from '../constants'

export default function Loader() {
  const [loadedCount, setLoadedCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const totalFrames = frameCount + investmentFrameCount

  useEffect(() => {
    let currentLoaded = 0;
    let isMounted = true;
    
    const startTime = Date.now();
    const MIN_LOAD_TIME = 2500; // Minimum 2.5 seconds to show the animation
    
    const checkCompletion = () => {
      if (!isMounted) return;
      currentLoaded++;
      setLoadedCount(currentLoaded);
      if (currentLoaded >= totalFrames) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsedTime);
        setTimeout(() => {
          if (isMounted) setIsComplete(true);
        }, remainingTime);
      }
    };


    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      img.src = framePath(i)
      img.onload = checkCompletion
      img.onerror = checkCompletion
    }
    
    for (let i = 0; i < investmentFrameCount; i++) {
      const img = new Image()
      img.src = investmentFramePath(i)
      img.onload = checkCompletion
      img.onerror = checkCompletion
    }


    const fallback = setTimeout(() => {
        if (isMounted && !isComplete) setIsComplete(true);
    }, 15000);

    return () => {
        isMounted = false;
        clearTimeout(fallback);
    };
  }, [totalFrames, isComplete])

  const percentage = Math.min(100, Math.floor((loadedCount / totalFrames) * 100))

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080a09] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >

          <div className="relative w-40 h-48 mb-8">
            <svg viewBox="0 0 100 120" className="w-full h-full overflow-visible">

               <motion.line 
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 1 }}
                 x1="10" y1="110" x2="90" y2="110" 
                 stroke="#ffffff" 
                 strokeOpacity="0.2"
                 strokeWidth="2" 
               />
               

               <motion.path
                 d="M 25 110 L 25 30 L 75 30 L 75 110"
                 fill="none"
                 stroke="#c9a227"
                 strokeWidth="2"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: percentage / 100 }}
                 transition={{ ease: "easeOut", duration: 0.3 }}
               />
               

               <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: percentage > 10 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
               >
                 <line x1="25" y1="90" x2="75" y2="90" stroke="#c9a227" strokeOpacity="0.3" strokeWidth="1" />
               </motion.g>
               <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: percentage > 30 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
               >
                 <line x1="25" y1="70" x2="75" y2="70" stroke="#c9a227" strokeOpacity="0.3" strokeWidth="1" />
               </motion.g>
               <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: percentage > 50 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
               >
                 <line x1="25" y1="50" x2="75" y2="50" stroke="#c9a227" strokeOpacity="0.3" strokeWidth="1" />
               </motion.g>


               <motion.g 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: percentage > 30 ? 1 : 0 }}
                 transition={{ duration: 0.5 }}
                 fill="#fff"
                 fillOpacity="0.1"
               >
                 <rect x="35" y="75" width="10" height="10" />
                 <rect x="55" y="75" width="10" height="10" />
               </motion.g>
               
               <motion.g 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: percentage > 60 ? 1 : 0 }}
                 transition={{ duration: 0.5 }}
                 fill="#fff"
                 fillOpacity="0.1"
               >
                 <rect x="35" y="55" width="10" height="10" />
                 <rect x="55" y="55" width="10" height="10" />
               </motion.g>
               
               <motion.g 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: percentage > 90 ? 1 : 0 }}
                 transition={{ duration: 0.5 }}
                 fill="#fff"
                 fillOpacity="0.2" // Brighter at the top
               >
                 <rect x="35" y="35" width="10" height="10" />
                 <rect x="55" y="35" width="10" height="10" />
               </motion.g>
               

               <motion.g
                 animate={{ rotate: [0, 8, 0, -4, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 style={{ transformOrigin: '75px 30px' }}
               >
                 <line x1="75" y1="30" x2="75" y2="10" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
                 <line x1="75" y1="10" x2="15" y2="10" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
                 <line x1="20" y1="10" x2="20" y2="25" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
                 <rect x="17" y="25" width="6" height="6" fill="#c9a227" opacity="0.6" />
               </motion.g>
            </svg>
          </div>
          
          <div className="flex flex-col items-center">
            <motion.span 
              className="text-[#c9a227] font-serif text-6xl mb-3 tracking-tight font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {percentage}%
            </motion.span>
            <motion.span 
              className="text-white/40 uppercase tracking-[0.3em] text-[10px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Constructing Experience
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
