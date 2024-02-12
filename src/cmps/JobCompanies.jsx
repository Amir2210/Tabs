export function JobCompanies({ jobs, company, onChangeCompany }) {
  return (
    <div className="btn-container">
      {jobs.map(job => <button onClick={(event) => onChangeCompany(event.target.innerText)} className={company === job.company ? 'job-btn active-btn' : 'job-btn'} key={job.id}>{job.company}</button>)}
    </div>
  )
}