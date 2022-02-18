import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetPublicGists from '../../hooks/useGetPublicGists';
import { GistItemWrapper, GistsListWrapper } from './GistsListStyle';

const imageVariants = {
  visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
  hidden: { opacity: 0 },
};

export default function GistsList() {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, gistsData, hasMore } = useGetPublicGists(pageNumber);
  const { ref: lastGistItemRef, inView } = useInView();

  useEffect(() => {
    if (inView && hasMore) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }, [inView, hasMore]);

  return (
    <GistsListWrapper>
      {loading && <p>Loading...</p>}
      {gistsData.map((gist, index) => {
        const repoFile = Object.keys(gist.files)[0];
        return (
          <GistItemWrapper
            key={`${gist.id}-${index}`}
            ref={gistsData.length === index + 1 ? lastGistItemRef : null}
          >
            <motion.div
              initial='hidden'
              animate='visible'
              variants={imageVariants}
              className='imageWrapper'
            >
              <img
                src={gist.owner.avatar_url}
                alt={`${gist.owner.login}'s profile pic`}
              />
            </motion.div>
            <p>{repoFile}</p>
          </GistItemWrapper>
        );
      })}
    </GistsListWrapper>
  );
}
