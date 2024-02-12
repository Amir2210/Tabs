export function JobCompanies({ jobs }) {
  return (
    <div className="btn-container">
      {jobs.map(job => <button className='job-btn' key={job.id}>{job.company}</button>)}
    </div>
  )
}