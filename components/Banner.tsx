import Image from 'next/image'
import { Movie } from '../typings';
import { baseUrl } from '../constants/movie';
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { movieState, modalState } from '../atoms/modalAtom'
import { useRecoilValue, useRecoilState } from 'recoil';

interface Props {
	netflixOriginals: Movie[]
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
   const [showModal, setShowModal] = useRecoilState(modalState);
   const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
     setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

	return (
		<div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
			<div className="absolute top-0 -z-10 left-0 h-[95vh] w-screen">
			    <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                  layout="fill"
                  objectFit="cover"
			    />   
			</div>

			<div className="">
				<h1 className="text-2xl lg:text-6xl md:text-4xl font-bold" >
			       {movie?.title || movie?.name || movie?.original_name}
			    </h1>
			    
			    <p className="max-w-xs md:max-w-lg text-shadow-md md:text-lg lg:max-w-2xl lg:text-xl text-xs">
			      {movie?.overview}
			    </p>
			</div>
			    
			    

			    <div className="flex space-x-3">
			    	 <button className="bannerButton bg-white text-black">
			    	    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
			    	     Play
			    	 </button>
			    	 <button className="bannerButton bg-[gray]/70"
               onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
			    	 >
			    	     More info
                  <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
			    	 </button>
			    </div>
		</div>
	)
}