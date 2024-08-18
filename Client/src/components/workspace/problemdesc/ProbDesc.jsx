import React from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

function ProbDesc({problem}) {
  return (
    <div className='bg-gradient-to-r from-inherit to-gray-900' >
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-gray-800 text-blue-200 overflow-x-hidden font-bold'>
				<div className={"bg-gray-800 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>{problem?.title}</div>
						</div>
						<div className='flex items-center mt-3'>
							<div
								className={`text-green-200 bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
							>
								Easy
							</div>
							<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-300 text-dark-green-s'>
								<BsCheck2Circle />
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-gray-500'>
								<AiFillLike />
								<span className='text-xs'>120</span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-gray-500'>
								<AiFillDislike />
								<span className='text-xs'>2</span>
							</div>
							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-gray-500 '>
								<TiStarOutline />
							</div>
						</div>

						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm'>
							<div
								dangerouslySetInnerHTML={{
									__html: problem.problemStatement,
								}}
							/>
						</div>

						{/* Examples */}
						<div className='mt-4'>
						{problem.examples.map((example, index) => (
							<div key={example.id}> 
								<p className='font-medium text-white'>Example {index + 1}: </p>
								{example.img && (
									<img src={example.img} alt='example' className='w-1/2 mt-6' />
								)}
								<div className="example-card">
									<pre>
										<strong className="text-white">
											Input: 
										</strong>
										{example.inputText}
										<br />
										<strong>Output: </strong>
										{example.outputText}
										<br />
										{
											example.explaination && (
												<>
													<strong>Explaination: </strong>
												</>
											)
										}
									</pre>
								</div>
							</div>
						))}
							
						</div>

						{/* Constraints */}
						<div className='my-5'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc'>
								<div
									dangerouslySetInnerHTML={{
										__html: problem.constraints,
									}}	
								/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default ProbDesc