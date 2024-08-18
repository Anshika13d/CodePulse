import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Workspace from '../components/workspace/Workspace';
import { problems } from '../utils/problems';

const CodePage = () => {
  const { pid } = useParams(); // Get the 'pid' parameter from the URL
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the problem data based on 'pid'
    const fetchProblem = () => {
      if (pid && problems[pid]) {
        setProblem(problems[pid]);
        
      } else {
        console.error("Problem not found");
      }
      setLoading(false);
    };

    fetchProblem();
  }, [pid]);

  if (loading) return <div>Loading...</div>; // Show loading message while fetching data

  if (!problem) return <div>Problem not found</div>; // Show error message if problem not found

  return (
    <div className=''>
      <Workspace problem={problem} />
    </div>
  );
};

export default CodePage;
