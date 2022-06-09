import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Thumbnail from './Thumbnail';
import { useState, useRef, useEffect } from 'react';
import { Movie } from '../typings';

interface Props {
	title: string;
	movies: Movie[]
}

export default function Row({ title, movies }: Props) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMove, setIsMove] = useState(false);

    const handleClick = (direction: string) => {
        setIsMove(true)

        if (rowRef.current) {
        	const {scrollLeft, clientWidth} = rowRef.current

        	const scrollTo = direction === "left" 
        	? scrollLeft - clientWidth 
        	: scrollLeft + clientWidth

        	rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
        }
    }

	return (
		<div className="h-40 space-y-0.5 md:space-y-2">
			<h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
			       {title}
			</h2>

			<div className="group relative md:-ml-2">
				<ChevronLeftIcon onClick={() => handleClick("left")} className={`arrow left-2 ${!isMove && "hidden"}`} />

                     <div ref={rowRef} className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 scrollbar-hide">
                         {movies.map((movie) => (
                              <Thumbnail key={movie.id} movie={movie} />
                         	))}
                     	
                     </div>

				<ChevronRightIcon onClick={() => handleClick("right")} className={`arrow right-2 ${isMove}`} />
			</div>
		</div>
	)
}