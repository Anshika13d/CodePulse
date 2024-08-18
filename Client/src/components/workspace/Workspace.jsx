import React from 'react'
import Split from 'react-split'
import ProbDesc from './problemdesc/ProbDesc'
import Playground from './playground/Playground'


function Workspace({problem}) {
  return (
    <>
        <Split
            className="split"
            minSize={0}
        >
            <ProbDesc problem={problem}/>
            <Playground problem={problem} />
        </Split>
    </>
  )
}

export default Workspace