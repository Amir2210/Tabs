import { FaAngleDoubleRight } from 'react-icons/fa';
export function JobInfo({ jobs, company }) {
  const filteredJob = jobs.filter(job => job.company === company)
  return (
    <>
      {filteredJob.map(job =>
        <article key={job.id} className='job-info'>
          <h3>{job.title}</h3>
          <span className="job-company">{job.company}</span>
          <p className="job-date">{job.dates}</p>
          <div>
            {job.duties.map((j, index) => <div className='job-desc' key={index}>
              <FaAngleDoubleRight className='job-icon' />
              <p>{j}</p>
            </div>)}
          </div>
        </article>
      )}
    </>
  )
}